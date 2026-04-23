import { ref, watch, onUnmounted } from 'vue'
import { db, doc, setDoc, onSnapshot, updateDoc, arrayUnion, arrayRemove } from '../firebase'
import { parseProgrammersHtml, parseCodeUpHtml, detectPlatform } from '../utils/parser'

export function useProblems(currentUser) {
  const problems = ref([])
  const isLoading = ref(false)
  let unsubscribe = null

  const subscribeToUserData = (uid) => {
    isLoading.value = true
    unsubscribe = onSnapshot(doc(db, "users", uid), (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.data()
        problems.value = (data.problems || []).sort((a, b) => b.createdAt - a.createdAt)
      } else {
        setDoc(doc(db, "users", uid), { problems: [], favoriteRepos: [] })
      }
      isLoading.value = false
    })
  }

  watch(currentUser, (user) => {
    if (user) {
      subscribeToUserData(user.uid)
    } else {
      problems.value = []
      if (unsubscribe) unsubscribe()
    }
  }, { immediate: true })

  onUnmounted(() => {
    if (unsubscribe) unsubscribe()
  })

  const addProblem = async (url) => {
    if (!url.trim() || !currentUser.value) return
    
    try {
      const platform = detectPlatform(url)
      let id = null

      if (platform === 'Programmers') {
        const idMatch = url.match(/learn\/courses\/30\/lessons\/(\d+)/)
        if (idMatch) id = idMatch[1]
      } else if (platform === 'CodeUp') {
        const idMatch = url.match(/id=(\d+)/)
        if (idMatch) id = idMatch[1]
      }

      if (!id) {
        alert('지원하지 않는 문제 URL 형식이거나 올바르지 않은 주소입니다.')
        return
      }
      
      if (problems.value.some(p => p.id === id && p.platform === platform)) {
        alert('이미 추가된 문제입니다.')
        return
      }

      isLoading.value = true
      const fetchTargets = [
        url,
        `https://api.allorigins.win/get?url=${encodeURIComponent(url)}`,
        `https://corsproxy.io/?${encodeURIComponent(url)}`
      ]

      let htmlContent = null
      for (const targetUrl of fetchTargets) {
        try {
          const controller = new AbortController()
          const timeoutId = setTimeout(() => controller.abort(), 10000)
          const res = await fetch(targetUrl, { signal: controller.signal })
          clearTimeout(timeoutId)
          if (res.ok) {
            if (targetUrl === url) htmlContent = await res.text()
            else {
              const data = await res.json()
              htmlContent = data.contents || data
            }
            if (htmlContent && (htmlContent.includes('school.programmers.co.kr') || htmlContent.includes('codeup.kr'))) break
          }
        } catch (e) { console.warn('프록시 시도 실패') }
      }

      if (!htmlContent) throw new Error('데이터 로드 실패')

      let title, content
      if (platform === 'Programmers') {
        ({ title, content } = parseProgrammersHtml(htmlContent))
      } else {
        ({ title, content } = parseCodeUpHtml(htmlContent))
      }

      const newProblem = { 
        id, 
        title, 
        url, 
        memo: content, 
        tags: [], 
        platform,
        createdAt: Date.now() 
      }
      
      await updateDoc(doc(db, "users", currentUser.value.uid), { 
        problems: arrayUnion(newProblem) 
      })
      
      return id
    } catch (err) {
      console.error(err)
      alert('문제를 가져오지 못했습니다.')
    } finally { 
      isLoading.value = false 
    }
  }

  const deleteProblem = async (id) => {
    if (!confirm('정말 삭제하시겠습니까?')) return
    const problemToDelete = problems.value.find(p => p.id === id)
    if (problemToDelete && currentUser.value) {
      await updateDoc(doc(db, "users", currentUser.value.uid), { 
        problems: arrayRemove(problemToDelete) 
      })
    }
  }

  const updateProblemMemo = async (id, newMemo) => {
    if (!currentUser.value || !id) return
    const updatedProblems = problems.value.map(p => p.id === id ? { ...p, memo: newMemo } : p)
    await updateDoc(doc(db, "users", currentUser.value.uid), { problems: updatedProblems })
  }

  const addTag = async (id, tag) => {
    if (!tag || !currentUser.value || !id) return
    const updatedProblems = problems.value.map(p => {
      if (p.id === id) {
        const tags = p.tags || []
        if (tags.includes(tag)) return p
        return { ...p, tags: [...tags, tag] }
      }
      return p
    })
    await updateDoc(doc(db, "users", currentUser.value.uid), { problems: updatedProblems })
  }

  const removeTag = async (id, tagToRemove) => {
    if (!currentUser.value || !id) return
    const updatedProblems = problems.value.map(p => {
      if (p.id === id) {
        return { ...p, tags: (p.tags || []).filter(t => t !== tagToRemove) }
      }
      return p
    })
    await updateDoc(doc(db, "users", currentUser.value.uid), { problems: updatedProblems })
  }

  return {
    problems,
    isLoading,
    addProblem,
    deleteProblem,
    updateProblemMemo,
    addTag,
    removeTag
  }
}
