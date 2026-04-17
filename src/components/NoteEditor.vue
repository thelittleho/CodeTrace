<script setup>
import { ref, watch, onMounted, onUnmounted } from 'vue'
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
const localMemo = ref('')
let debounceTimer = null

// 마크다운 렌더링 업데이트
const updateRenderedMarkdown = async (content) => {
  renderedMarkdown.value = await renderMarkdown(content || '')
}

// 문제 전환 시 로컬 메모 초기화 및 렌더링
watch(() => props.problem?.id, (newId) => {
  if (newId) {
    localMemo.value = props.problem.memo || ''
    updateRenderedMarkdown(localMemo.value)
  }
}, { immediate: true })

// 외부(Firebase)에서 메모가 변경되었을 때, 
// 현재 에디터가 편집 중이 아닐 때만 동기화 (충돌 방지)
watch(() => props.problem?.memo, (newMemo) => {
  if (newMemo !== localMemo.value && !debounceTimer) {
    localMemo.value = newMemo || ''
    updateRenderedMarkdown(localMemo.value)
  }
})

const handleAddTag = () => {
  if (newTagInput.value.trim()) {
    emit('addTag', props.problem.id, newTagInput.value.trim())
    newTagInput.value = ''
  }
}

// 입력을 처리하고 부모에게 전달 (Debounce 적용)
const handleMemoInput = (e) => {
  const newValue = e.target.value
  localMemo.value = newValue
  
  // 입력 중에도 즉시 렌더링 업데이트 (반응성 확보)
  if (!props.isEditMode) updateRenderedMarkdown(newValue)

  // Firebase 업데이트 지연 (커서 튐 방지)
  clearTimeout(debounceTimer)
  debounceTimer = setTimeout(() => {
    emit('updateProblemMemo', props.problem.id, newValue)
    updateRenderedMarkdown(newValue)
    debounceTimer = null
  }, 500) // 0.5초 동안 입력이 없으면 저장
}

onUnmounted(() => {
  clearTimeout(debounceTimer)
})
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
          :value="localMemo" 
          @input="handleMemoInput"
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
/* 기존 스타일 유지 */
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
