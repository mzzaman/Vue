<script setup>
import { useGetters } from '../stores/getters';
const getters = useGetters()
const { count, doubleCount } = getters

</script>
<template>
    <h1>Pinia Defining a Getters</h1>
    <p>Count : {{ count }}</p>
    <p>Double count is {{ doubleCount }}</p>
</template>