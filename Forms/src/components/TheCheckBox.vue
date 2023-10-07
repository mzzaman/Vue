<script setup>
import { ref } from 'vue';

const checked = ref(true)

const checkedNames = ref([]);
</script>
<template>
    <div>
        <h1>The Checkbox</h1>
        <input type="checkbox" v-model="checked" id="checkbox">
        <label for="checkbox">{{ checked }}</label>
    </div>
    <div>
        <div>Checked names: {{ checkedNames }}</div>

        <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
        <label for="jack">Jack</label>

        <input type="checkbox" id="john" value="John" v-model="checkedNames">
        <label for="john">John</label>

        <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
        <label for="mike">Mike</label>

    </div>
</template>

<style scoped>
div {
    width: 40%;
    height: 20%;
    background-color: brown;
    text-align: center;
    padding: 2%;
}

input[type=checkbox] {
    color: teal;
    padding: 10px;
    width: 10%;
    height: 10%;
}
</style>