<script setup>
import { ref } from "vue";
import TodoInput from "./components/TodoInput.vue";
import TodoItem from "./components/TodoItem.vue";

const todos = ref([
  { id : 1, text: 'Vue 설치하기', done: true },
  { id : 2, text: '템플릿 문법 익히기', done: false },
  { id : 3, text: 'Todo 앱 만들기', done: false },
]);

function addTodo(text) {
  todos.value.push({ id: Date.now(), text, done: false});
}

function toggleTodo(id) {
  const todo = todos.value.find((todo) => todo.id === id);
  todo.done = !todo.done;
}

function removeTodo(id) {
  todos.value = todos.value.filter((todo) => todo.id !== id);
}
</script>

<template>
  <h1>할 일 목록</h1>
  <TodoInput @add="addTodo" />
  <ul>
    <TodoItem
      v-for = "todo in todos"
      :key="todo.id"
      :todo="todo"
      @toggle="toggleTodo"
      @remove="removeTodo"
    />
  </ul>
</template>

<style scoped>
.done {
  text-decoration: line-through;
  color: #999;
}
</style>
