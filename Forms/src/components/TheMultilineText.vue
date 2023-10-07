<script setup>
import { ref } from 'vue';

const message = ref('')
</script>
<template>
    <h1>The Multiline Text</h1>
    <p>Show Text: {{ message }}</p>
    <textarea v-model="message" placeholder="add multiple lines"></textarea>
</template>
<style scoped>
p {
    background-color: red;
    padding: 20px;
    width: 40%;
    height: 20%;
    text-align: center;
    text-transform: capitalize;
    font-weight: bold;
    color: white;
}
</style>