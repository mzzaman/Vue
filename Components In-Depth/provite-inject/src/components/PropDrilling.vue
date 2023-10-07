<template>
    <h1>{{ title }}</h1>
</template>

<script setup>
import { inject } from 'vue';

// const props = defineProps({ id: { type: Number }, title: { type: String } })

const title = inject('post')

</script>

<style lang="scss" scoped></style>