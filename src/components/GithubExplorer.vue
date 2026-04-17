<script setup>
import { ref, computed, watch } from 'vue'
import { Sun, Moon, Download, ExternalLink } from 'lucide-vue-next'
import { renderMarkdown, highlightCode } from '../utils/markdown'

const props = defineProps({
  selectedFile: Object,
  isDarkMode: Boolean
})

const emit = defineEmits(['importToNote', 'toggleDarkMode'])

const isMarkdownFile = computed(() => {
  return props.selectedFile?.name.toLowerCase().endsWith('.md')
})

const renderedMarkdown = ref('')
const highlightedCode = ref('')

const updateContent = async () => {
  if (!props.selectedFile) {
    renderedMarkdown.value = ''
    highlightedCode.value = ''
    return
  }

  if (isMarkdownFile.value) {
    renderedMarkdown.value = await renderMarkdown(props.selectedFile.content)
  } else {
    const ext = props.selectedFile.name.split('.').pop()
    highlightedCode.value = await highlightCode(props.selectedFile.content, ext)
  }
}

watch(() => props.selectedFile, updateContent, { immediate: true })
</script>

<template>
  <div class="main-content">
    <template v-if="selectedFile">
      <div class="editor-header">
        <div class="header-left">
          <div class="title-area">
            <span class="problem-id-large">GitHub Explorer</span>
            <h2 class="problem-title-large">{{ selectedFile.name }}</h2>
          </div>
          <div class="github-actions">
            <button @click="$emit('importToNote')" class="import-btn">
              <Download :size="16" /> 현재 노트에 첨부
            </button>
            <a :href="selectedFile.html_url" target="_blank" class="external-link-btn">
              GitHub에서 보기 <ExternalLink :size="14" />
            </a>
          </div>
        </div>
        <div class="mode-toggle-mini">
          <button @click="$emit('toggleDarkMode')" class="toggle-icon-btn">
            <Sun v-if="isDarkMode" :size="20" />
            <Moon v-else :size="20" />
          </button>
        </div>
      </div>
      <div class="editor-body">
        <div v-if="isMarkdownFile" class="markdown-view" v-html="renderedMarkdown"></div>
        <pre v-else class="code-viewer"><code class="hljs" v-html="highlightedCode"></code></pre>
      </div>
    </template>
    <div v-else class="empty-state">
      <div class="empty-icon">🐙</div>
      <p>GitHub 저장소를 탐색하고 코드를 확인하세요.</p>
    </div>
  </div>
</template>

<style scoped>
.header-left {
  display: flex;
  flex-direction: column;
  gap: 16px;
  flex-grow: 1;
}

.github-actions {
  display: flex;
  gap: 12px;
  margin-top: 12px;
}
.import-btn {
  background-color: var(--accent);
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 8px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 6px;
  transition: opacity 0.2s;
}
.import-btn:hover { opacity: 0.9; }
.external-link-btn {
  color: var(--text-muted);
  text-decoration: none;
  font-size: 13px;
  display: flex;
  align-items: center;
  gap: 4px;
}

.code-viewer {
  background-color: var(--sidebar-bg);
  padding: 0;
  border-radius: 12px;
  font-family: "JetBrains Mono", "Cascadia Code", "Fira Code", monospace;
  font-size: 14px;
  line-height: 1.6;
  overflow-x: auto;
  margin: 0;
  border: 1px solid var(--border-color);
}
.code-viewer code {
  display: block;
  padding: 24px;
  background: transparent !important;
}
</style>
