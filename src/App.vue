<script setup>
import { ref, computed, onMounted, defineAsyncComponent } from 'vue'
import Sidebar from './components/Sidebar.vue'
import { useTheme } from './composables/useTheme'
import { useAuth } from './composables/useAuth'
import { useProblems } from './composables/useProblems'
import { useGithub } from './composables/useGithub'

// Lazy load components for better performance
const NoteEditor = defineAsyncComponent(() => import('./components/NoteEditor.vue'))
const GithubExplorer = defineAsyncComponent(() => import('./components/GithubExplorer.vue'))

// 1. State Management
const activeTab = ref('notes') // 'notes' | 'explore'
const selectedId = ref(null)
const isEditMode = ref(false)

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
[Source Link](${selectedGithubFile.value.html_url})

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
</template>

<style>
/* Global styles are in style.css */
</style>
