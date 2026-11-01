<script setup>
import { ref } from 'vue'

const books = ref([
  { id: 1, title: '데미안', done: true },
  { id: 2, title: '채식주의자', done: false },
  { id: 3, title: '아몬드', done: false },
])
</script>

<template>
  <h1>나의 독서 기록</h1>
  <ul>
    <li v-for="book in books" :key="book.id">
      <span :class="{ done: book.done }">{{ book.title }}</span>
    </li>
  </ul>
</template>

<style scoped>
.done {
  text-decoration: line-through;
  color: #999;
}
</style>