# 🤖 AI Project Context & Rules (README.project.md)

이 파일은 AI 에이전트가 이 프로젝트를 이해하고 코드를 생성할 때 반드시 준수해야 하는 **최우선 지침서**입니다.

---

## 🏗️ Project Overview
- **Name**: BeakjoonRecorder (codetrace)
- **Concept**: 알고리즘 문제 정보 자동 추출 및 GitHub 저장소 탐색 통합형 개인 학습 노트
- **Primary Goal**: 문제 풀이 기록과 본인의 GitHub 코드를 한곳에서 관리하고, 코드를 노트에 즉시 첨부할 수 있는 유기적인 경험 제공

## 🛠️ Tech Stack & Constraints
- **Framework**: Vue 3 (Composition API, `<script setup>`)
- **Build Tool**: Vite
- **Database/Auth**: Firebase (Firestore, GitHub OAuth)
- **Styling**: Vanilla CSS (CSS Variables 기반)
- **Key Libs**: `marked` (Markdown), `highlight.js` (Code Highlighting), `lucide-vue-next` (Icons)
- **Deployment**: GitHub Pages (`gh-pages`)

---

## 📏 Core Coding Rules (AI Rules)

### 1. Vue Architecture & Navigation
- **Tabs Mode**: 사이드바는 `Notes`와 `Explore`(GitHub) 두 가지 모드로 운영됩니다. 각 모드의 상태(`activeTab`)를 존중하여 개발하세요.
- **SFC Structure**: `<script setup>`, `<template>`, `<style>` 순서를 유지합니다.

### 2. GitHub Integration
- **GitHub API**: `api.github.com`을 사용하여 저장소 트리와 파일 내용을 페치합니다.
- **Import Bridge**: `importToNote` 함수를 통해 탐색 중인 코드를 활성화된 노트에 마크다운 코드 블록 형태로 첨부하는 기능을 유지 및 발전시키세요.

### 3. Styling & Highlighting
- **Design Tokens**: `src/style.css`와 `App.vue`의 CSS 변수를 사용하여 Claude 스타일의 일관성을 유지하세요.
- **Syntax Highlighting**: `highlight.js`를 사용하며, 다크 모드 전환 시 테마가 유동적으로 변경되도록 처리되어 있습니다.

### 3. Logic & Patterns
- **Firebase Sync**: Firestore 데이터 업데이트 시 `updateDoc`, `arrayUnion`, `arrayRemove` 등을 활용하여 실시간 동기화를 유지하세요.
- **Error Handling**: 외부 URL 페치(Proxy 사용 등)나 Firebase 통신 시 예외 처리를 철저히 하세요.
- **Markdown**: `marked` 라이브러리를 통해 변환된 HTML이 `src/style.css`의 `.markdown-view` 스타일과 잘 어우러지도록 하세요.

---

## 🔄 Workflow for AI
1. **Research**: 변경 전 `App.vue`와 `src/utils/parser.js`, `src/style.css`의 연동 구조를 먼저 파악하세요.
2. **Strategy**: 구현 계획을 짧게 요약하여 제안하고 승인을 받으세요.
3. **Execution**: 코드를 작성한 후, 기존의 디자인 시스템(CSS 변수)과 어긋나지 않는지 검토하세요.
4. **Validation**: 기능 변경 후 데이터 동기화와 UI 반응성을 확인하세요.

---

## ⚠️ Anti-Patterns (Do NOT do this)
- **No Tailwind**: Tailwind CSS 클래스를 사용하지 마세요. 모든 스타일은 `src/style.css` 또는 `<style scoped>`에서 작성합니다.
- **Hardcoded Colors**: 헥사 코드(`#d97706` 등)를 직접 쓰지 말고 반드시 CSS 변수를 사용하세요.
- **Direct DOM Manipulation**: Vue의 선언적 렌더링을 따르고, `src/utils/parser.js`와 같은 특수 목적 외에는 직접적인 DOM 조작을 피하세요.

---

## 🚨🚨 User Control
- 많은 코드 내용(코드를 갈아엎거나 상당한 부분을 교체)을 첨가/삭제 시 사용자에게 승인을 필수로 받으십시오.
- 사용자가 보기 편하게 기능 별 분리를 명확하게 하십시오.
- 지속적으로 최적화를 진행하며 불필요한 코드(쓰레기 코드)는 사용자의 허가를 받아 제거합니다.
- 위 내용의 허가가 필요한 경우에는 '허가 필요'라는 대제목으로 사용자가 이해하기 편하도록 한국어로 설명하시오.

> **Note to AI**: 이 규칙을 숙지했다면, 모든 작업 시 이 지침을 바탕으로 최선의 코드를 제안하세요.
