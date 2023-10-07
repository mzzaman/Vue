<script setup>
import { ref } from 'vue';

const picked = ref('one')
</script>
<template>
    <section>
        <h1>The Radio Button </h1>
        <div>Picked: {{ picked }}</div>
        <input type="radio" id="one" value="one" v-model="picked">
        <label for="one">One</label>
        <input type="radio" id="two" value="two" v-model="picked">
        <label for="two">Two</label>
    </section>
</template>

<style scoped>
section {
    margin-top: 10px;
    width: 40%;
    height: 20%;
    text-align: center;
    background-color: teal;
    padding: 3%;
}

label {
    font-size: 1.5rem;
}

div {
    color: red;
    font-size: 2rem;
    padding: 10px;
    text-transform: capitalize;
}
</style>