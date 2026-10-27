<script setup>
import { ref } from 'vue'

const todos = ref([
  { id : 1, text: 'Vue 설치하기', done: true },
  { id : 2, text: '템플릿 문법 익히기', done: false }.
  { id : 3, text: 'Todo 앱 만들기', done: false }
])

const newTodo = ref('')

function addTodo() {
  if (!newTodo.value.trim()) return
  todos.value.push({ id: Date.now(), text: newTodo.value, done: false})
  newTodo.value = ''
}

function removeTodo(id) {
  todos.value = todos.value.filter(todo => todo.id !== id)
}
</script>

<template>
  <h1>할 일 목록</h1>
  <input v-model="newTodo" @keyup.enter="addTodo" placeholder="할 일을 입력하세요">
  <button @click="addTodo">추가</button>
  <ul>
    <li v-for="todo in todos" :key="todo.id">
      <input type="checkbox" v-model="todo.done">
      <span :class="{{ done: todo.done }}">{{ todo.text }}</span>
      <button @click="removeTodo(todo.id)">삭제</button>
    </li>
  </ul>
</template>

<style scoped>
.done {
  text-decoration: line-through;
  color: #999;
}
</style>
