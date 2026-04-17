<script setup>
import { ref, computed } from 'vue'
import { Edit3, Github, ExternalLink, Trash2, Star, Folder, FileText, ArrowLeft, LogIn } from 'lucide-vue-next'

const props = defineProps({
  activeTab: String,
  problems: Array,
  selectedId: String,
  currentUser: Object,
  isLoading: Boolean,
  githubIsLoading: Boolean,
  githubFiles: Array,
  githubPath: Array,
  githubRepo: String,
  favoriteRepos: Array
})

const emit = defineEmits([
  'update:activeTab', 
  'update:selectedId', 
  'addProblem', 
  'deleteProblem', 
  'fetchRepo', 
  'toggleFavoriteRepo', 
  'navigateFolder', 
  'goBack', 
  'viewFile', 
  'login', 
  'logout'
])

const inputUrl = ref('')
const searchQuery = ref('')
const localGithubRepo = ref(props.githubRepo)

const filteredProblems = computed(() => {
  const query = searchQuery.value.toLowerCase().trim()
  if (!query) return props.problems
  return props.problems.filter(p => 
    p.title.toLowerCase().includes(query) || 
    p.id.includes(query) ||
    (p.tags && p.tags.some(tag => tag.toLowerCase().includes(query)))
  )
})

const handleAddProblem = () => {
  emit('addProblem', inputUrl.value)
  inputUrl.value = ''
}

const handleFetchRepo = () => {
  emit('fetchRepo', localGithubRepo.value)
}

const isCurrentRepoFavorited = computed(() => {
  return props.favoriteRepos.includes(props.githubRepo)
})
</script>

<template>
  <div class="sidebar">
    <div class="sidebar-tabs">
      <button :class="{ active: activeTab === 'notes' }" @click="$emit('update:activeTab', 'notes')">
        <Edit3 :size="16" /> <span>Notes</span>
      </button>
      <button :class="{ active: activeTab === 'explore' }" @click="$emit('update:activeTab', 'explore')">
        <Github :size="16" /> <span>Explore</span>
      </button>
    </div>

    <!-- Notes Tab -->
    <template v-if="activeTab === 'notes'">
      <div class="input-container">
        <input v-model="inputUrl" @keyup.enter="handleAddProblem" placeholder="프로그래머스 URL 입력" class="url-input" />
        <input v-model="searchQuery" placeholder="제목, ID, 태그로 검색" class="search-input" />
      </div>

      <div class="problem-list">
        <div v-if="!currentUser" class="auth-message">로그인하여 데이터를 클라우드에 저장하세요.</div>
        <div v-else-if="isLoading" class="auth-message">불러오는 중...</div>
        <div v-else-if="filteredProblems.length === 0" class="auth-message">검색 결과가 없습니다.</div>
        <div v-else v-for="p in filteredProblems" :key="p.id" class="problem-item" :class="{ active: selectedId === p.id }" @click="$emit('update:selectedId', p.id)">
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
              <button @click.stop="$emit('deleteProblem', p.id)" class="delete-btn"><Trash2 :size="14" /></button>
            </div>
          </div>
        </div>
      </div>
    </template>

    <!-- GitHub Explore Tab -->
    <template v-else>
      <div class="input-container">
        <div class="github-search">
          <input v-model="localGithubRepo" @keyup.enter="handleFetchRepo" placeholder="owner/repo 입력" class="url-input" />
          <button @click="$emit('toggleFavoriteRepo')" class="star-btn" :class="{ favorited: isCurrentRepoFavorited }" title="즐겨찾기 토글">
            <Star :size="18" :fill="isCurrentRepoFavorited ? 'var(--accent)' : 'none'" />
          </button>
          <button @click="handleFetchRepo" class="search-btn"><Github :size="18" /></button>
        </div>
        
        <div v-if="favoriteRepos.length > 0" class="repo-chips">
          <span v-for="repo in favoriteRepos" :key="repo" class="repo-chip" @click="$emit('fetchRepo', repo)">
            {{ repo.split('/')[1] || repo }}
          </span>
        </div>
      </div>

      <div class="github-tree">
        <div v-if="githubIsLoading" class="auth-message">탐색 중...</div>
        <div v-else-if="githubFiles.length === 0" class="auth-message">저장소를 입력하고 검색하세요.</div>
        <div v-else>
          <div class="tree-header" v-if="githubPath.length > 0">
            <button @click="$emit('goBack')" class="back-btn"><ArrowLeft :size="14" /> 뒤로가기</button>
            <span class="current-path">/ {{ githubPath[githubPath.length-1].name }}</span>
          </div>
          <div v-for="file in githubFiles" :key="file.sha" 
               class="tree-item" 
               @click="file.type === 'dir' ? $emit('navigateFolder', file) : $emit('viewFile', file)">
            <Folder v-if="file.type === 'dir'" :size="16" class="icon-folder" />
            <FileText v-else :size="16" class="icon-file" />
            <span class="item-name">{{ file.name }}</span>
          </div>
        </div>
      </div>
    </template>

    <div class="sidebar-footer">
      <div v-if="currentUser" class="user-profile">
        <img :src="currentUser.photoURL" class="user-avatar" alt="Avatar" />
        <div class="user-info">
          <span class="user-name">{{ currentUser.displayName }}</span>
          <button @click="$emit('logout')" class="auth-btn-small">로그아웃</button>
        </div>
      </div>
      <button v-else @click="$emit('login')" class="login-btn">
        <LogIn :size="16" style="margin-right: 8px;" /> GitHub 로그인
      </button>
    </div>
  </div>
</template>

<style scoped>
.sidebar-tabs {
  display: flex;
  padding: 12px 16px 0 16px;
  gap: 8px;
  border-bottom: 1px solid var(--border-color);
}
.sidebar-tabs button {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 10px;
  background: none;
  border: none;
  border-bottom: 2px solid transparent;
  color: var(--text-muted);
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
}
.sidebar-tabs button.active {
  color: var(--accent);
  border-bottom-color: var(--accent);
}

.github-search {
  display: flex;
  gap: 8px;
}
.star-btn {
  background-color: var(--input-bg);
  border: 1px solid var(--border-color);
  border-radius: 10px;
  padding: 0 10px;
  cursor: pointer;
  color: var(--text-muted);
  transition: all 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
}
.star-btn:hover, .star-btn.favorited {
  color: var(--accent);
  border-color: var(--accent);
}

.repo-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 10px;
}
.repo-chip {
  font-size: 11px;
  font-weight: 600;
  color: var(--text-muted);
  background-color: var(--hover-bg);
  padding: 4px 10px;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s;
}
.repo-chip:hover {
  background-color: var(--accent-light);
  color: var(--accent);
}

.search-btn {
  background-color: var(--input-bg);
  border: 1px solid var(--border-color);
  border-radius: 10px;
  padding: 0 12px;
  cursor: pointer;
  color: var(--text-muted);
  transition: all 0.2s;
}
.search-btn:hover {
  color: var(--accent);
  border-color: var(--accent);
}

.github-tree {
  flex-grow: 1;
  overflow-y: auto;
  padding: 8px 0;
}
.tree-header {
  padding: 8px 16px;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  color: var(--text-muted);
}
.back-btn {
  background: none;
  border: none;
  color: var(--accent);
  cursor: pointer;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 4px;
}
.tree-item {
  padding: 10px 24px;
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  transition: background 0.2s;
}
.tree-item:hover {
  background-color: var(--hover-bg);
}
.icon-folder { color: #f9d767; }
.icon-file { color: var(--text-muted); }
.item-name {
  font-size: 13px;
  color: var(--text-main);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
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
</style>
