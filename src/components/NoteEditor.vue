<script setup>
import { ref, watch, onMounted } from 'vue'
import { Sun, Moon, Eye, PenLine } from 'lucide-vue-next'
import { renderMarkdown } from '../utils/markdown'

const props = defineProps({
  problem: Object,
  isDarkMode: Boolean,
  isEditMode: Boolean
})

const emit = defineEmits(['updateProblemMemo', 'addTag', 'removeTag', 'toggleDarkMode', 'toggleEditMode'])

const newTagInput = ref('')
const renderedMarkdown = ref('')

const updateRenderedMarkdown = async () => {
  if (props.problem?.memo) {
    renderedMarkdown.value = await renderMarkdown(props.problem.memo)
  } else {
    renderedMarkdown.value = ''
  }
}

watch(() => props.problem?.memo, updateRenderedMarkdown, { immediate: true })

const handleAddTag = () => {
  if (newTagInput.value.trim()) {
    emit('addTag', props.problem.id, newTagInput.value.trim())
    newTagInput.value = ''
  }
}

const handleMemoUpdate = (e) => {
  emit('updateProblemMemo', props.problem.id, e.target.value)
}
</script>

<template>
  <div class="main-content">
    <template v-if="problem">
      <div class="editor-header">
        <div class="header-left">
          <div class="title-area">
            <span class="problem-id-large">{{ problem.id }}</span>
            <h2 class="problem-title-large">{{ problem.title }}</h2>
          </div>
          
          <div class="tag-container">
            <div class="tag-list">
              <span v-for="tag in problem.tags" :key="tag" class="tag-badge">
                #{{ tag }}
                <button @click="$emit('removeTag', problem.id, tag)" class="tag-remove">&times;</button>
              </span>
            </div>
            <input 
              v-model="newTagInput" 
              @keyup.enter="handleAddTag" 
              placeholder="+ 태그 추가 (알고리즘 등)" 
              class="tag-input"
            />
          </div>
        </div>

        <div class="mode-toggle-mini">
          <button @click="$emit('toggleDarkMode')" :title="isDarkMode ? '라이트 모드' : '다크 모드'" class="toggle-icon-btn">
            <Sun v-if="isDarkMode" :size="20" />
            <Moon v-else :size="20" />
          </button>
          <button @click="$emit('toggleEditMode')" :title="isEditMode ? '보기 모드' : '편집 모드'" class="toggle-icon-btn">
            <Eye v-if="isEditMode" :size="20" />
            <PenLine v-else :size="20" />
          </button>
        </div>
      </div>
      <div class="editor-body">
        <textarea 
          v-if="isEditMode" 
          :value="problem.memo" 
          @input="handleMemoUpdate"
          class="bear-editor" 
          placeholder="여기에 생각을 적어보세요..."
        ></textarea>
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
</style>
