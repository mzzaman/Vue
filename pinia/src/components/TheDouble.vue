<script setup>
import { useDouble } from '@/stores/double'
const store = useDouble()
</script>
<template>
    <h1>Actions with pinia</h1>
    <p>Count: {{ store.countNumber }}</p>
    <button @click="store.increment">Add</button>
    <button @click="store.subs">Substrac</button>

    <button @click="store.randomCount">Random</button>
</template>