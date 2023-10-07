<script>
import HelloWorld from './components/HelloWorld.vue';

export default {
  components: { HelloWorld },
  data() {
    return {
      posts: [
        {
          id: 1,
          title: "Post Title One"
        },
        {
          id: 2,
          title: "Post Title Two"
        },
        {
          id: 3,
          title: "Post Title Three"
        },
      ]
    }
  }
}

</script>

<template>
  <HelloWorld :key="post.id" :title="post.title" v-for="post in posts"></HelloWorld>
</template>

<style scoped></style>
