<script setup>
import { ref, computed, onMounted, defineAsyncComponent } from 'vue'
import Sidebar from './components/Sidebar.vue'
import { useTheme } from './composables/useTheme'
import { useAuth } from './composables/useAuth'
import { useProblems } from './composables/useProblems'
import { useGithub } from './composables/useGithub'
import { ChevronLeft, ChevronRight } from 'lucide-vue-next'

// Lazy load components for better performance
const NoteEditor = defineAsyncComponent(() => import('./components/NoteEditor.vue'))
const GithubExplorer = defineAsyncComponent(() => import('./components/GithubExplorer.vue'))

// 1. State Management
const activeTab = ref('notes')
const selectedId = ref(null)
const isEditMode = ref(false)
const isSidebarOpen = ref(true)

// 2. Composables
const { isDarkMode, toggleDarkMode, initTheme } = useTheme()
const { currentUser, handleLogin, handleLogout } = useAuth()
const { 
  problems, 
  isLoading, 
  addProblem: addProblemLogic, 
  deleteProblem, 
  updateProblemMemo, 
  addTag, 
  removeTag 
} = useProblems(currentUser)
const { 
  githubRepo, 
  githubFiles, 
  githubPath, 
  githubIsLoading, 
  selectedGithubFile, 
  favoriteRepos, 
  fetchRepo, 
  navigateFolder, 
  goBack, 
  viewFile, 
  toggleFavoriteRepo 
} = useGithub(currentUser)

// 3. Computed Properties
const currentProblem = computed(() => problems.value.find(p => p.id === selectedId.value))

// 4. Methods
const handleAddProblem = async (url) => {
  const newId = await addProblemLogic(url)
  if (newId) selectedId.value = newId
}

const importToNote = () => {
  if (!currentProblem.value || !selectedGithubFile.value) {
    return alert('첨부할 노트를 먼저 선택해주세요.')
  }
  
  const ext = selectedGithubFile.value.name.split('.').pop()
  const langMap = { js: 'javascript', ts: 'typescript', py: 'python', cpp: 'cpp', java: 'java' }
  const lang = langMap[ext] || ext

  const appendContent = `\n\n---
### 📂 Attached from GitHub: ${selectedGithubFile.value.name}
[View Original Source on GitHub](${selectedGithubFile.value.html_url})

\`\`\`${lang}
${selectedGithubFile.value.content}
\`\`\`
`
  updateProblemMemo(currentProblem.value.id, currentProblem.value.memo + appendContent)
  activeTab.value = 'notes'
  isEditMode.value = false
  alert('노트에 첨부되었습니다.')
}

onMounted(() => {
  initTheme()
})
</script>

<template>
  <div class="app-container" :class="{ 'sidebar-closed': !isSidebarOpen }">
    <Sidebar 
      v-model:activeTab="activeTab"
      v-model:selectedId="selectedId"
      :problems="problems"
      :currentUser="currentUser"
      :isLoading="isLoading"
      :githubIsLoading="githubIsLoading"
      :githubFiles="githubFiles"
      :githubPath="githubPath"
      :githubRepo="githubRepo"
      :favoriteRepos="favoriteRepos"
      @addProblem="handleAddProblem"
      @deleteProblem="deleteProblem"
      @fetchRepo="fetchRepo"
      @toggleFavoriteRepo="toggleFavoriteRepo"
      @navigateFolder="navigateFolder"
      @goBack="goBack"
      @viewFile="viewFile"
      @login="handleLogin"
      @logout="handleLogout"
    />

    <!-- Sidebar Toggle Button -->
    <button class="sidebar-toggle" @click="isSidebarOpen = !isSidebarOpen" :title="isSidebarOpen ? '사이드바 닫기' : '사이드바 열기'">
      <ChevronLeft v-if="isSidebarOpen" :size="20" />
      <ChevronRight v-else :size="20" />
    </button>

    <main class="main-layout">
      <NoteEditor 
        v-if="activeTab === 'notes'"
        :problem="currentProblem"
        :isDarkMode="isDarkMode"
        :isEditMode="isEditMode"
        @updateProblemMemo="updateProblemMemo"
        @addTag="addTag"
        @removeTag="removeTag"
        @toggleDarkMode="toggleDarkMode"
        @toggleEditMode="isEditMode = !isEditMode"
      />

      <GithubExplorer 
        v-else
        :selectedFile="selectedGithubFile"
        :isDarkMode="isDarkMode"
        @importToNote="importToNote"
        @toggleDarkMode="toggleDarkMode"
      />
    </main>
  </div>
</template>

<style>
.app-container {
  display: flex;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  position: relative;
}

/* Sidebar transition */
.sidebar {
  width: 300px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 1;
}

.sidebar-closed .sidebar {
  margin-left: -300px;
  opacity: 0;
  pointer-events: none;
}

.main-layout {
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 0;
  width: 100%;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  align-items: center; /* 자식 요소들을 중앙으로 정렬 */
}

/* NoteEditor와 GithubExplorer가 내부에서 전체 너비를 갖도록 보장 */
.main-layout > * {
  width: 100%;
}

/* Floating Toggle Button */
.sidebar-toggle {
  position: absolute;
  left: 284px;
  top: 20px;
  z-index: 1000;
  width: 32px;
  height: 32px;
  background-color: var(--bg-color);
  border: 1px solid var(--border-color);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: var(--text-muted);
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.sidebar-toggle:hover {
  background-color: var(--hover-bg);
  color: var(--accent);
  border-color: var(--accent);
}

.sidebar-closed .sidebar-toggle {
  left: 16px;
}

/* Responsive Mobile Styles */
@media (max-width: 768px) {
  .sidebar {
    position: fixed;
    height: 100vh;
    z-index: 999;
    box-shadow: 10px 0 30px rgba(0,0,0,0.1);
  }

  .editor-header {
    padding: 40px 20px 20px 20px;
  }

  .editor-body {
    padding: 10px 20px 40px 20px;
  }

  .problem-title-large {
    font-size: 1.6rem;
  }

  .sidebar-toggle {
    left: 284px;
    top: auto;
    bottom: 24px; /* 모바일에서는 하단이 터치하기 편함 */
  }

  .sidebar-closed .sidebar-toggle {
    left: 16px;
    bottom: 24px;
  }

  /* 사이드바가 열렸을 때 배경 어둡게 (선택 사항) */
  .app-container:not(.sidebar-closed)::after {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0,0.3);
    z-index: 998;
    pointer-events: auto;
  }
}

/* Dark Mode adjustment for Toggle Button */
.dark-mode .sidebar-toggle {
  box-shadow: 0 2px 8px rgba(0,0,0,0.2);
}
</style>
