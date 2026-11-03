<script setup>
import { ref } from 'vue'

const emit = defineEmits(['add'])
const title = ref('')

function submit() {
  if (!title.value.trim()) return
  emit('add', title.value)
  title.value = ''
}
</script>

<template>
  <input v-model="title" @keyup.enter="submit" placeholder="책 제목을 입력하세요" />
  <button @click="submit">추가</button>
</template>