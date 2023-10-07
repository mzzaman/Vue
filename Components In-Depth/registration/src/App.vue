<script setup>
import { computed, ref } from 'vue';
import HelloWorld from './components/HelloWorld.vue';
const posts = ref([
  { id: 1, title: 'My Journey with Vue' },
  { id: 2, title: 'Blogging with Vue' },
  { id: 3, title: 'Why Vue is so fun' }
]);

// const checkClicked = computed(() => {
//   console.log('Clicked ');
// })
function checkClicked() {
  console.log('Clicked ');
}


</script>


<template>
  <div>
    <h1>Data passing Child component</h1>
    <HelloWorld v-for="post in posts" :key="post.id" :title="post.title" @check-clicked="checkClicked" />
  </div>
</template>