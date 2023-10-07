<script setup>
const props = defineProps({
    id: { type: Number, },
    title: { type: String, required: true },

})
const emits = defineEmits('check-clicked')
</script>

<template>
    <div>
        <h1>{{ title }}</h1>
        <button @click="$emit('check-clicked')">Enlarge text</button>
    </div>
</template>



