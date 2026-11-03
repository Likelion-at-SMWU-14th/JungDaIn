<script setup>
import { ref, computed } from 'vue'
import BookInput from './components/BookInput.vue'
import BookItem from './components/BookItem.vue'

const books = ref([
  { id: 1, title: '데미안', done: true },
  { id: 2, title: '채식주의자', done: false },
  { id: 3, title: '아몬드', done: false },
])

const doneCount = computed(() => books.value.filter((book) => book.done).length)

function addBook(title) {
  books.value.push({ id: Date.now(), title, done: false })
}

function toggleBook(id) {
  const book = books.value.find((book) => book.id === id)
  book.done = !book.done
}

function removeBook(id) {
  books.value = books.value.filter((book) => book.id !== id)
}
</script>

<template>
  <h1>나의 독서 기록</h1>
  <p>{{ doneCount }} / {{ books.length }}권 완독</p>

  <BookInput @add="addBook" />

  <p v-if="books.length === 0">아직 등록한 책이 없어요!</p>
  <ul v-else>
    <BookItem
      v-for="book in books"
      :key="book.id"
      :book="book"
      @toggle="toggleBook"
      @remove="removeBook"
    />
  </ul>
</template>