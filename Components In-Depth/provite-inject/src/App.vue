<script setup>
import { provide, ref } from 'vue';
import PropDrilling from './components/PropDrilling.vue';

const posts = ref([
  {
    id: 1,
    title: "One"
  },
  {
    id: 2,
    title: "Two"
  }
])
provide('post', posts)
</script>

<template>
  <h1>Hello World</h1>
  <PropDrilling v-for="post in posts" :id="post.id" :title="post.title" />
</template>

<style scoped></style>
