<script setup>
import { ref } from 'vue'

const books = ref([
  { id: 1, title: '데미안', done: true },
  { id: 2, title: '채식주의자', done: false },
  { id: 3, title: '아몬드', done: false },
])

const newTitle = ref('')

function addBook() {
  if (!newTitle.value.trim()) return
  books.value.push({ id: Date.now(), title: newTitle.value, done: false })
  newTitle.value = ''
}

function removeBook(id) {
  books.value = books.value.filter((book) => book.id !== id)
}
</script>

<template>
  <h1>나의 독서 기록</h1>
  <input v-model="newTitle" @keyup.enter="addBook" placeholder="책 제목을 입력하세요" />
  <button @click="addBook">추가</button>

  <ul>
    <li v-for="book in books" :key="book.id">
      <input type="checkbox" v-model="book.done" />
      <span :class="{ done: book.done }">{{ book.title }}</span>
      <button @click="removeBook(book.id)">삭제</button>
    </li>
  </ul>
</template>

<style scoped>
.done {
  text-decoration: line-through;
  color: #999;
}
</style>