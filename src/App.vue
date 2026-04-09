<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import { marked } from 'marked'
import { BookOpen, Edit3, ExternalLink, Plus, Trash2 } from 'lucide-vue-next'

const problems = ref([])
const selectedId = ref(null)
const inputUrl = ref('')
const isEditMode = ref(false)

// 로컬 스토리지에서 데이터 불러오기
onMounted(() => {
  const saved = localStorage.getItem('bj-problems')
  if (saved) {
    problems.value = JSON.parse(saved)
  }
})

// 데이터 변경 시 로컬 스토리지에 저장
watch(problems, (newVal) => {
  localStorage.setItem('bj-problems', JSON.stringify(newVal))
}, { deep: true })

const currentProblem = computed(() => 
  problems.value.find(p => p.id === selectedId.value)
)

const renderedMarkdown = computed(() => {
  if (!currentProblem.value) return ''
  return marked(currentProblem.value.memo || '')
})

const extractProblemId = (url) => {
  // URL 형태: https://www.acmicpc.net/problem/1000
  const match = url.match(/problem\/(\d+)/)
  if (match) return match[1]
  
  // URL 형태: https://www.acmicpc.net/source/1234 (이런 경우도 숫자만 추출)
  // 혹은 그냥 숫자만 입력한 경우
  const numbers = url.match(/\d+/)
  return numbers ? numbers[0] : null
}

const addProblem = async () => {
  const trimmedUrl = inputUrl.value.trim()
  if (!trimmedUrl) return

  const id = extractProblemId(trimmedUrl)
  
  if (!id) {
    alert('올바른 백준 URL 또는 문제 번호를 입력해주세요.')
    return
  }

  if (problems.value.some(p => p.id === id)) {
    alert('이미 추가된 문제입니다.')
    selectedId.value = id
    inputUrl.value = ''
    return
  }

  try {
    // solved.ac API는 공개 API지만, 간혹 CORS나 헤더 문제로 브라우저에서 직접 호출 시 실패할 수 있음
    const response = await fetch(`/api/v3/problem/show?problemId=${id}`, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    
    if (!response.ok) throw new Error('정보를 가져오지 못했습니다.')
    
    const data = await response.json()
    
    const newProblem = {
      id: id,
      title: data.titleKo || '제목 없음',
      memo: `# ${id}. ${data.titleKo}

## 문제 요약

## 생각
- `,
      createdAt: new Date().toISOString()
    }
    
    problems.value.unshift(newProblem)
    selectedId.value = id
    inputUrl.value = ''
    isEditMode.value = true
  } catch (e) {
    console.error(e)
    alert(`문제 정보를 가져오는데 실패했습니다. (문제 번호: ${id})
네트워크 상태나 번호가 정확한지 확인해주세요.`)
  }
}

const deleteProblem = (id) => {
  if (confirm('정말 삭제하시겠습니까?')) {
    problems.value = problems.value.filter(p => p.id !== id)
    if (selectedId.value === id) selectedId.value = null
  }
}

const openProblemPage = (id) => {
  window.open(`https://www.acmicpc.net/problem/${id}`, '_blank')
}

const selectProblem = (id) => {
  selectedId.value = id
  isEditMode.value = false
}
</script>

<template>
  <div class="sidebar">
    <div class="input-container">
      <input 
        v-model="inputUrl" 
        @keyup.enter="addProblem"
        placeholder="백준 URL 또는 문제 번호 입력" 
        class="url-input"
      />
    </div>
    
    <div class="problem-list">
      <div 
        v-for="p in problems" 
        :key="p.id"
        class="problem-item"
        :class="{ active: selectedId === p.id }"
        @click="selectProblem(p.id)"
      >
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <div>
            <span class="problem-id">[{{ p.id }}]</span>
            <span class="problem-title">{{ p.title }}</span>
          </div>
          <div style="display: flex; gap: 8px; align-items: center;">
            <button @click.stop="openProblemPage(p.id)" class="action-btn" title="백준 문제 페이지 열기">
              <ExternalLink :size="14" />
            </button>
            <button @click.stop="deleteProblem(p.id)" class="delete-btn" title="삭제">
              <Trash2 :size="14" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="main-content">
    <template v-if="currentProblem">
      <div class="editor-header">
        <h2 style="margin: 0; font-size: 1.2rem;">[{{ currentProblem.id }}] {{ currentProblem.title }}</h2>
        <div class="mode-toggle">
          <button 
            :class="{ active: !isEditMode }" 
            @click="isEditMode = false"
          >
            <BookOpen :size="14" style="margin-right: 4px; vertical-align: middle;"/> 읽기
          </button>
          <button 
            :class="{ active: isEditMode }" 
            @click="isEditMode = true"
          >
            <Edit3 :size="14" style="margin-right: 4px; vertical-align: middle;"/> 수정
          </button>
        </div>
      </div>

      <div class="editor-body">
        <textarea 
          v-if="isEditMode"
          v-model="currentProblem.memo"
          class="markdown-editor"
          placeholder="여기에 생각을 적어보세요 (마크다운 지원)"
        ></textarea>
        <div 
          v-else 
          class="markdown-view" 
          v-html="renderedMarkdown"
        ></div>
      </div>
    </template>
    
    <div v-else class="empty-state">
      <BookOpen :size="48" style="margin-bottom: 16px; opacity: 0.2;" />
      <p>문제를 선택하거나 새로운 URL을 입력하여 기록을 시작하세요.</p>
    </div>
  </div>
</template>

<style scoped>
.delete-btn, .action-btn {
  padding: 4px;
  border: none;
  background: transparent;
  color: var(--text-muted);
  opacity: 0;
  transition: opacity 0.2s;
}

.problem-item:hover .delete-btn, .problem-item:hover .action-btn {
  opacity: 1;
}

.delete-btn:hover, .action-btn:hover {
  color: var(--accent);
}
</style>
