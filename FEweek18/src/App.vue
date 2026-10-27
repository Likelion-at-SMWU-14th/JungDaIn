<script setup>
import { ref } from 'vue'

const todos = ref([
  { id : 1, text: 'Vue 설치하기', done: true },
  { id : 2, text: '템플릿 문법 익히기', done: false }.
  { id : 3, text: 'Todo 앱 만들기', done: false }
])
</script>

<template>
  <h1>할 일 목록</h1>
  <ul>
    <li v-for="todo in todos" :key="todo.id">
      <span :class="{{ done: todo.done }}">{{ todo.text }}</span>
    </li>
  </ul>
</template>

<style scoped>
.done {
  text-decoration: line-through;
  color: #999;
}
</style>
