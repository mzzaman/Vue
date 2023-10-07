<script setup>
import { ref } from 'vue';
const message = ref('');
</script>
<template>
    <h1>The Text</h1>
    <p>Show Message: {{ message }}</p>
    <input type="text" v-model="message" placeholder="edit me">
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