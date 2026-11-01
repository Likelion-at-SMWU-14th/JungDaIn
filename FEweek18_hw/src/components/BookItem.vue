<script setup>
defineProps({ book: Object })
const emit = defineEmits(['toggle', 'remove'])
</script>

<template>
  <li>
    <input
      type="checkbox"
      :checked="book.done"
      @change="emit('toggle', book.id)"
    />
    <span :class="{ done: book.done }">{{ book.title }}</span>
    <button @click="emit('remove', book.id)">삭제</button>
  </li>
</template>

<style scoped>
.done {
  text-decoration: line-through;
  color: #999;
}
</style>