<script setup>
import { ref } from 'vue';

const selected = ref('')
</script>
<template>
    <section class="select">
        <h1>Selected Field</h1>
        <div>Selected: {{ selected }}</div>
        <select id="selected" v-model="selected">
            <option value="" disabled>Please select one</option>
            <option>One</option>
            <option>Two</option>
            <option>Three</option>
        </select>

    </section>
</template>
<style scoped>
.select {
    margin-top: 10px;
    width: 40%;
    height: 20%;
    color: teal;
    text-align: center;
    background-color: blueviolet;
    padding: 3%;
}
</style>