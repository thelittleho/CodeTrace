import { ref, onMounted } from 'vue'

export function useTheme() {
  const isDarkMode = ref(false)

  const toggleDarkMode = () => {
    isDarkMode.value = !isDarkMode.value
    document.documentElement.classList.toggle('dark-mode', isDarkMode.value)
    
    // Highlight.js theme swap
    const existingLink = document.getElementById('hljs-theme')
    if (existingLink) existingLink.remove()
    
    const link = document.createElement('link')
    link.id = 'hljs-theme'
    link.rel = 'stylesheet'
    link.href = isDarkMode.value 
      ? 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/github-dark.min.css'
      : 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/github.min.css'
    document.head.appendChild(link)
    
    localStorage.setItem('theme', isDarkMode.value ? 'dark' : 'light')
  }

  const initTheme = () => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      isDarkMode.value = true
      document.documentElement.classList.add('dark-mode')
      
      const link = document.createElement('link')
      link.id = 'hljs-theme'
      link.rel = 'stylesheet'
      link.href = 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/github-dark.min.css'
      document.head.appendChild(link)
    }
  }

  return {
    isDarkMode,
    toggleDarkMode,
    initTheme
  }
}
