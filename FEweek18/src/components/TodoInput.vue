<script setup>
import { ref } from 'vue'

const emit = defineEmits(['add'])
const text = ref('')

function submit() {
    if (!text.value.trim()) return
    emit('add', text.value)
    text.value = ''
}

</script>

<template>
    <input v-model="text" @keyup.enter="submit" placeholder="할 일을 입력하세요">
    <button @click="submit">추가</button>
</template>