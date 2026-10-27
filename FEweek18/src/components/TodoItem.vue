<script setup>
defineProps({ todo: Object });
const emit = defineEmits([ "toggle", "remove"]);
</script>

<template>
    <li>
        <input
            type="checkbox"
            :checked="todo.done"
            @change="emit('toggle', todo.id)"
        />
        <span :class="{ done: todo.done }">{{ todo.text }}</span>
        <button @click="emit('remove', todo.id)">삭제</button>
    </li>
</template>

<style scoped>
.done {
    text-decoration: line-through;
    color: #999;
}
</style>