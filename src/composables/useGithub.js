import { ref, watch, onUnmounted } from 'vue'
import { db, doc, onSnapshot, updateDoc, arrayUnion, arrayRemove } from '../firebase'

export function useGithub(currentUser) {
  const githubRepo = ref('')
  const githubFiles = ref([])
  const githubPath = ref([])
  const githubIsLoading = ref(false)
  const selectedGithubFile = ref(null)
  const favoriteRepos = ref([])
  let unsubscribe = null

  const subscribeToFavorites = (uid) => {
    unsubscribe = onSnapshot(doc(db, "users", uid), (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.data()
        favoriteRepos.value = data.favoriteRepos || []
      }
    })
  }

  watch(currentUser, (user) => {
    if (user) subscribeToFavorites(user.uid)
    else {
      favoriteRepos.value = []
      if (unsubscribe) unsubscribe()
    }
  }, { immediate: true })

  onUnmounted(() => {
    if (unsubscribe) unsubscribe()
  })

  const fetchRepo = async (repoName) => {
    let repo = repoName || githubRepo.value.trim()
    if (!repo) return
    
    if (repo.includes('github.com')) {
      const parts = repo.replace('https://', '').replace('http://', '').split('/')
      if (parts.length >= 3) repo = `${parts[1]}/${parts[2]}`
    }

    githubIsLoading.value = true
    try {
      const res = await fetch(`https://api.github.com/repos/${repo}/contents/`)
      if (!res.ok) throw new Error('저장소를 찾을 수 없습니다.')
      const data = await res.json()
      githubFiles.value = data
      githubPath.value = []
      githubRepo.value = repo
    } catch (err) {
      alert(err.message)
    } finally {
      githubIsLoading.value = false
    }
  }

  const navigateFolder = async (folder) => {
    githubIsLoading.value = true
    try {
      const res = await fetch(folder.url)
      const data = await res.json()
      githubFiles.value = data
      githubPath.value.push(folder)
    } catch (err) {
      alert('폴더를 열 수 없습니다.')
    } finally {
      githubIsLoading.value = false
    }
  }

  const goBack = async () => {
    if (githubPath.value.length === 0) return
    githubPath.value.pop()
    
    githubIsLoading.value = true
    try {
      const url = githubPath.value.length === 0 
        ? `https://api.github.com/repos/${githubRepo.value}/contents/`
        : githubPath.value[githubPath.value.length - 1].url
      
      const res = await fetch(url)
      const data = await res.json()
      githubFiles.value = data
    } catch (err) {
      alert('이전 경로로 돌아갈 수 없습니다.')
    } finally {
      githubIsLoading.value = false
    }
  }

  const viewFile = async (file) => {
    githubIsLoading.value = true
    try {
      const res = await fetch(file.download_url)
      const content = await res.text()
      selectedGithubFile.value = { ...file, content }
    } catch (err) {
      alert('파일을 불러올 수 없습니다.')
    } finally {
      githubIsLoading.value = false
    }
  }

  const toggleFavoriteRepo = async () => {
    if (!currentUser.value || !githubRepo.value) return
    const userDocRef = doc(db, "users", currentUser.value.uid)
    const isFavorited = favoriteRepos.value.includes(githubRepo.value)
    if (isFavorited) {
      await updateDoc(userDocRef, { favoriteRepos: arrayRemove(githubRepo.value) })
    } else {
      await updateDoc(userDocRef, { favoriteRepos: arrayUnion(githubRepo.value) })
    }
  }

  return {
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
  }
}
