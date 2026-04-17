# 🤖 AI Project Context & Rules (README.project.md)

이 파일은 AI 에이전트가 이 프로젝트를 이해하고 코드를 생성할 때 반드시 준수해야 하는 **최우선 지침서**입니다.

---

## 🏗️ Project Overview
- **Name**: Gitxplor (github-takingnotes)
- **Concept**: GitHub 저장소 탐색 및 코드/마크다운 뷰어
- **Primary Goal**: 사용자에게 클로드(Claude) 스타일의 깔끔하고 직관적인 코드 탐색 경험 제공

## 🛠️ Tech Stack & Constraints
- **Framework**: Vue 3 (Composition API, `<script setup>`)
- **Build Tool**: Vite
- **Styling**: Tailwind CSS (Utility-first)
- **Key Libs**: `highlight.js` (Code), `marked` (Markdown)
- **Deployment**: GitHub Pages (`gh-pages`)

---

## 📏 Core Coding Rules (AI Rules)

### 1. Vue Architecture
- **SFC Structure**: 반드시 `<script setup>`, `<template>`, `<style>` 순서로 작성합니다.
- **Reactivity**: `ref`보다는 관련 있는 상태를 `reactive`로 묶는 것을 선호하는지, 아니면 일관되게 `ref`를 사용하는지 확인 후 따르세요. (기본값: `ref` 선호)
- **Props/Emits**: `defineProps`와 `defineEmits`를 사용하여 명시적으로 선언하세요.

### 2. Styling (Tailwind)
- **Consistency**: `src/style.css`에 정의된 커스텀 컬러(`bg-claude-bg`, `text-claude-text` 등)를 최우선으로 사용하세요.
- **Responsiveness**: 모든 UI는 `md:` 프리픽스를 활용하여 모바일 우선(Mobile-first)으로 설계하세요.

### 3. Logic & Patterns
- **Clean Code**: 함수는 하나의 기능만 수행하도록 분리하고, 복잡한 로직은 `composables`로 추출할 것을 고려하세요.
- **Error Handling**: API 호출 시 반드시 `try-catch` 블록과 사용자 피드백(Loading/Error state)을 포함하세요.

---

## 🔄 Workflow for AI
1. **Research**: 변경 전 `App.vue`와 관련 컴포넌트의 연결 구조를 먼저 파악하세요.
2. **Strategy**: 구현 계획을 짧게 요약하여 제안하고 승인을 받으세요.
3. **Execution**: 코드를 작성한 후, 기존 UI 스타일과 어긋나지 않는지 검토하세요.
4. **Validation**: 가능하다면 `npm run dev` 상황을 가정하여 로직의 결함을 스스로 체크하세요.

---

## ⚠️ Anti-Patterns (Do NOT do this)
- 기존에 정의된 Tailwind 설정(`tailwind.config.js`)을 무시하고 하드코딩된 색상 값을 사용하지 마세요.
- Option API 스타일의 Vue 코드를 작성하지 마세요.
- 불필요한 외부 라이브러리를 추가하기 전에 기존 의존성(`package.json`)으로 해결 가능한지 먼저 검토하세요.

---

## 🚨🚨 User Control
- 많은 코드 내용(코드를 갈아엎거나 상당한 부분을 교체)을 첨가/삭제 시 사용자에게 승인을 필수로 받으십시오
- 사용자가 보기 편하게 기능 별 분리를 명확하게 하십시오.
- 지속적으로 사용자가 AI 에이전트에 수정명령을 내리면 쓰레기 코드가 쌓이는 경우가 많은데 지속적으로 최적화를 진행하며 불필요한 코드는 사용자의 허가를 받아 제거합니다.
- 위 내용의 허가가 필요한 경우에는 '허가 필요'라는 대제목으로 사용자가 이해하기 편하도록 한국어로 설명하시오.



> **Note to AI**: 이 규칙을 숙지했다면, 모든 작업 시 이 지침을 바탕으로 최선의 코드를 제안하세요.
