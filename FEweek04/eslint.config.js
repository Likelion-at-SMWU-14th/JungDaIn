import js from '@eslint/js' // ESLint 기본 JS 추천 규칙
import globals from 'globals' // 전역 변수 설정
import reactHooks from 'eslint-plugin-react-hooks' // React Hooks 규칙
import reactRefresh from 'eslint-plugin-react-refresh' // React Fast Refresh 규칙
import { defineConfig, globalIgnores } from 'eslint/config' // ESLint Flat Config 설정 함수
import prettier from 'eslint-config-prettier' // Prettier 충돌 방지 설정
import prettierPlugin from 'eslint-plugin-prettier' // Prettier 규칙 검사 플러그인

export default defineConfig([
  globalIgnores(['dist']), // dist 디렉토리 ESLint 검사 제외
  {
    files: ['**/*.{js,jsx}'], // ESLint 검사 대상 파일 확장자
    extends: [
      js.configs.recommended, // JavaScript 추천 규칙
      reactHooks.configs.flat.recommended, // React Hooks 추천 규칙
      reactRefresh.configs.vite, // Vite React Refresh 규칙
    ],
    languageOptions: {
      ecmaVersion: 'latest', // 최신 JS 문법 지원
      globals: globals.browser, // 브라우저 전역 변수 허용
      parserOptions: {
        ecmaFeatures: { jsx: true }, // JSX 문법 지원
        sourceType: 'module', // import, export 지원
      },
    },
    plugins: {
      prettier: prettierPlugin, // Prettier 플러그인 등록
    },
    rules: {
      'prettier/prettier': 'error', // Prettier 규칙 위반 시 ESLint 에러 처리
    },
  },
  prettier, // ESLint와 Prettier 충돌 방지
])
