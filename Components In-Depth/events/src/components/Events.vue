<template>
    <div>
        <h1>Count: {{ counter }}</h1>
        <button @click="$emit('buttonClicked')">Click</button>
    </div>
</template>

<script setup>
const props = defineProps({
    counter: { type: String, require: true }
});
const emit = defineEmits(['buttonClicked'])
</script>

<style lang="scss" scoped></style>