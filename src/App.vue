<script setup>
import { ref, computed, onMounted, onUnmounted, watch, shallowRef } from 'vue'
import { marked } from 'marked'
import { BookOpen, Edit3, ExternalLink, Trash2, Eye, PenLine, LogIn, LogOut, User, Sun, Moon } from 'lucide-vue-next'
import { auth, db, provider, signInWithPopup, signOut, doc, setDoc, onSnapshot, updateDoc, arrayUnion, arrayRemove } from './firebase'
import { onAuthStateChanged } from 'firebase/auth'
import { parseProgrammersHtml } from './utils/parser'

// 1. State Management
const problems = ref([]) 
const selectedId = ref(null)
const inputUrl = ref('')
const searchQuery = ref('') // 검색어 추가
const isEditMode = ref(true)
const currentUser = ref(null)
const isLoading = ref(true)
const isDarkMode = ref(false)
const newTagInput = ref('') // 태그 입력용

// 2. Computed Properties
// 검색어에 따라 필터링된 목록 (제목, ID, 태그 검색 지원)
const filteredProblems = computed(() => {
  const query = searchQuery.value.toLowerCase().trim()
  if (!query) return problems.value
  return problems.value.filter(p => 
    p.title.toLowerCase().includes(query) || 
    p.id.includes(query) ||
    (p.tags && p.tags.some(tag => tag.toLowerCase().includes(query)))
  )
})

const currentProblem = computed(() => problems.value.find(p => p.id === selectedId.value))
const renderedMarkdown = computed(() => currentProblem.value ? marked(currentProblem.value.memo || '') : '')

// 3. Auth & Theme Logic
const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value
  document.documentElement.classList.toggle('dark-mode', isDarkMode.value)
  localStorage.setItem('theme', isDarkMode.value ? 'dark' : 'light')
}

const handleLogin = async () => {
  try { await signInWithPopup(auth, provider) } catch (err) { console.error('로그인 실패:', err) }
}

const handleLogout = () => signOut(auth)

// 4. Data Operations
const addProblem = async () => {
  if (!inputUrl.value.trim() || !currentUser.value) return
  
  try {
    const idMatch = inputUrl.value.match(/learn\/courses\/30\/lessons\/(\d+)/)
    if (!idMatch) return alert('프로그래머스 문제 URL을 입력해주세요.')
    
    const id = idMatch[1]
    if (problems.value.some(p => p.id === id)) return alert('이미 추가된 문제입니다.')

    isLoading.value = true

    const fetchTargets = [
      inputUrl.value,
      `https://api.allorigins.win/get?url=${encodeURIComponent(inputUrl.value)}`,
      `https://corsproxy.io/?${encodeURIComponent(inputUrl.value)}`
    ]

    let htmlContent = null
    for (const targetUrl of fetchTargets) {
      try {
        const controller = new AbortController()
        const timeoutId = setTimeout(() => controller.abort(), 10000)
        const res = await fetch(targetUrl, { signal: controller.signal })
        clearTimeout(timeoutId)
        if (res.ok) {
          if (targetUrl === inputUrl.value) htmlContent = await res.text()
          else {
            const data = await res.json()
            htmlContent = data.contents || data
          }
          if (htmlContent && htmlContent.includes('school.programmers.co.kr')) break
        }
      } catch (e) { console.warn('프록시 시도 실패') }
    }

    if (!htmlContent) throw new Error('데이터 로드 실패')

    const { title, content } = parseProgrammersHtml(htmlContent)

    // 태그 배열(tags) 초기화 추가
    const newProblem = { id, title, url: inputUrl.value, memo: content, tags: [], createdAt: Date.now() }
    await updateDoc(doc(db, "users", currentUser.value.uid), { problems: arrayUnion(newProblem) })
    
    inputUrl.value = ''
    selectedId.value = id
  } catch (err) {
    alert('문제를 가져오지 못했습니다.')
  } finally { isLoading.value = false }
}

// 태그 추가 함수
const addTag = async () => {
  const tag = newTagInput.value.trim()
  if (!tag || !currentProblem.value) return
  
  if (!currentProblem.value.tags) currentProblem.value.tags = []
  if (currentProblem.value.tags.includes(tag)) {
    newTagInput.value = ''
    return
  }

  const updatedProblems = problems.value.map(p => {
    if (p.id === selectedId.value) {
      return { ...p, tags: [...(p.tags || []), tag] }
    }
    return p
  })
  
  await updateDoc(doc(db, "users", currentUser.value.uid), { problems: updatedProblems })
  newTagInput.value = ''
}

// 태그 삭제 함수
const removeTag = async (tagToRemove) => {
  const updatedProblems = problems.value.map(p => {
    if (p.id === selectedId.value) {
      return { ...p, tags: (p.tags || []).filter(t => t !== tagToRemove) }
    }
    return p
  })
  await updateDoc(doc(db, "users", currentUser.value.uid), { problems: updatedProblems })
}

const deleteProblem = async (id) => {
  if (!confirm('정말 삭제하시겠습니까?')) return
  const problemToDelete = problems.value.find(p => p.id === id)
  if (problemToDelete) {
    await updateDoc(doc(db, "users", currentUser.value.uid), { problems: arrayRemove(problemToDelete) })
    if (selectedId.value === id) selectedId.value = null
  }
}

// 5. Lifecycle & Sync
let unsubscribe = null
const subscribeToUserData = (uid) => {
  isLoading.value = true
  unsubscribe = onSnapshot(doc(db, "users", uid), (snapshot) => {
    if (snapshot.exists()) {
      problems.value = (snapshot.data().problems || []).sort((a, b) => b.createdAt - a.createdAt)
    } else {
      setDoc(doc(db, "users", uid), { problems: [] })
    }
    isLoading.value = false
  })
}

onMounted(() => {
  const savedTheme = localStorage.getItem('theme')
  if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    isDarkMode.value = true
    document.documentElement.classList.add('dark-mode')
  }

  onAuthStateChanged(auth, (user) => {
    currentUser.value = user
    if (user) subscribeToUserData(user.uid)
    else {
      problems.value = []
      isLoading.value = false
      if (unsubscribe) unsubscribe()
    }
  })
})

onUnmounted(() => { if (unsubscribe) unsubscribe() })

// 메모 변경 감지 및 클라우드 업데이트 (Debounce 적용 고려 가능)
watch(() => currentProblem.value?.memo, async (newMemo, oldMemo) => {
  if (currentUser.value && selectedId.value && newMemo !== undefined && oldMemo !== undefined) {
    const userDocRef = doc(db, "users", currentUser.value.uid)
    const updatedProblems = problems.value.map(p => p.id === selectedId.value ? { ...p, memo: newMemo } : p)
    await updateDoc(userDocRef, { problems: updatedProblems })
  }
})
</script>

<template>
  <div class="sidebar">
    <div class="input-container">
      <input v-model="inputUrl" @keyup.enter="addProblem" placeholder="프로그래머스 URL 입력" class="url-input" />
      <input v-model="searchQuery" placeholder="제목, ID, 태그로 검색" class="search-input" />
    </div>

    <div class="problem-list">
      <div v-if="!currentUser" class="auth-message">로그인하여 데이터를 클라우드에 저장하세요.</div>
      <div v-else-if="isLoading" class="auth-message">불러오는 중...</div>
      <div v-else-if="filteredProblems.length === 0" class="auth-message">검색 결과가 없습니다.</div>
      <div v-else v-for="p in filteredProblems" :key="p.id" class="problem-item" :class="{ active: selectedId === p.id }" @click="selectedId = p.id">
        <div class="problem-item-inner">
          <div class="problem-info">
            <span class="problem-id">{{ p.id }}</span>
            <span class="problem-title">{{ p.title }}</span>
            <div v-if="p.tags && p.tags.length > 0" class="mini-tags">
              <span v-for="tag in p.tags" :key="tag" class="mini-tag">#{{ tag }}</span>
            </div>
          </div>
          <div class="item-actions">
            <button @click.stop="window.open(p.url, '_blank')" class="action-btn"><ExternalLink :size="14" /></button>
            <button @click.stop="deleteProblem(p.id)" class="delete-btn"><Trash2 :size="14" /></button>
          </div>
        </div>
      </div>
    </div>

    <div class="sidebar-footer">
      <div v-if="currentUser" class="user-profile">
        <img :src="currentUser.photoURL" class="user-avatar" alt="Avatar" />
        <div class="user-info">
          <span class="user-name">{{ currentUser.displayName }}</span>
          <button @click="handleLogout" class="auth-btn-small">로그아웃</button>
        </div>
      </div>
      <button v-else @click="handleLogin" class="login-btn">
        <LogIn :size="16" style="margin-right: 8px;" /> GitHub 로그인
      </button>
    </div>
  </div>

  <div class="main-content">
    <template v-if="currentProblem">
      <div class="editor-header">
        <div class="header-left">
          <div class="title-area">
            <span class="problem-id-large">{{ currentProblem.id }}</span>
            <h2 class="problem-title-large">{{ currentProblem.title }}</h2>
          </div>
          
          <div class="tag-container">
            <div class="tag-list">
              <span v-for="tag in currentProblem.tags" :key="tag" class="tag-badge">
                #{{ tag }}
                <button @click="removeTag(tag)" class="tag-remove">&times;</button>
              </span>
            </div>
            <input 
              v-model="newTagInput" 
              @keyup.enter="addTag" 
              placeholder="+ 태그 추가 (알고리즘 등)" 
              class="tag-input"
            />
          </div>
        </div>

        <div class="mode-toggle-mini">
          <button @click="toggleDarkMode" :title="isDarkMode ? '라이트 모드' : '다크 모드'" class="toggle-icon-btn">
            <Sun v-if="isDarkMode" :size="20" />
            <Moon v-else :size="20" />
          </button>
          <button @click="isEditMode = !isEditMode" :title="isEditMode ? '보기 모드' : '편집 모드'" class="toggle-icon-btn">
            <Eye v-if="isEditMode" :size="20" />
            <PenLine v-else :size="20" />
          </button>
        </div>
      </div>
      <div class="editor-body">
        <textarea v-if="isEditMode" v-model="currentProblem.memo" class="bear-editor" placeholder="여기에 생각을 적어보세요..."></textarea>
        <div v-else class="markdown-view" v-html="renderedMarkdown"></div>
      </div>
    </template>
    <div v-else class="empty-state">
      <div class="empty-icon">✎</div>
      <p>기록할 문제를 선택하거나 URL을 입력하세요.</p>
    </div>
  </div>
</template>

<style scoped>
/* 기존 스타일은 유지하되 중복 제거 및 최적화 */
.problem-item-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.problem-info {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex-grow: 1;
  margin-right: 8px;
}
.search-input {
  width: 100%;
  padding: 12px 16px;
  border-radius: 10px;
  border: 1px solid var(--border-color);
  background-color: var(--input-bg);
  color: var(--text-main);
  font-size: 14px;
  margin-top: 12px;
  box-sizing: border-box;
  outline: none;
  transition: all 0.2s;
  font-family: var(--font-family);
}
.search-input:focus {
  border-color: var(--accent);
}

.mini-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  margin-top: 4px;
}
.mini-tag {
  font-size: 10px;
  color: var(--text-muted);
  background-color: var(--hover-bg);
  padding: 2px 6px;
  border-radius: 4px;
}

.header-left {
  display: flex;
  flex-direction: column;
  gap: 16px;
  flex-grow: 1;
}

.tag-container {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
}
.tag-list {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
.tag-badge {
  background-color: var(--accent-light);
  color: var(--accent);
  padding: 4px 10px;
  border-radius: 6px;
  font-size: 13px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 4px;
}
.tag-remove {
  background: none;
  border: none;
  color: var(--accent);
  cursor: pointer;
  padding: 0;
  font-size: 16px;
  line-height: 1;
  display: flex;
  align-items: center;
}
.tag-input {
  background: none;
  border: none;
  border-bottom: 1px solid var(--border-color);
  color: var(--text-main);
  padding: 4px 0;
  font-size: 13px;
  outline: none;
  width: 140px;
  transition: border-color 0.2s;
}
.tag-input:focus {
  border-color: var(--accent);
}

.auth-message {
  padding: 40px 24px;
  text-align: center;
  font-size: 14px;
  color: var(--text-muted);
  line-height: 1.6;
}
.sidebar-footer {
  padding: 24px;
  border-top: 1px solid var(--border-color);
  background-color: var(--sidebar-bg);
}
.user-profile {
  display: flex;
  align-items: center;
  gap: 12px;
}
.user-avatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
}
.user-info {
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.user-name {
  font-size: 13px;
  font-weight: 600;
}
.auth-btn-small {
  background: none;
  border: none;
  padding: 0;
  color: var(--accent);
  font-size: 11px;
  cursor: pointer;
  text-align: left;
}
.login-btn {
  width: 100%;
  padding: 12px;
  background-color: var(--input-bg);
  color: var(--text-main);
  border: 1px solid var(--border-color);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  cursor: pointer;
}
.item-actions {
  display: flex;
  gap: 4px;
  opacity: 0;
  transition: opacity 0.2s;
}
.problem-item:hover .item-actions {
  opacity: 1;
}
.action-btn, .delete-btn {
  background: none;
  border: none;
  padding: 4px;
  cursor: pointer;
  color: var(--text-muted);
}
.delete-btn:hover { color: #ff4d4f; }
.action-btn:hover { color: var(--accent); }
</style>
