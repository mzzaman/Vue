<script setup>
import { useStore } from '../stores/counter'
const stores = useStore();
const { count, name, isAdmin, items, hashChange } = stores;

</script>
<template>
    <h1>Pinia Defining a State</h1>
    <p>Count: {{ count }}</p>
    <p>Name: {{ name }}</p>
    <h3>Admin: {{ isAdmin }}</h3>
    <h1>item: {{ items }}</h1>
    <p>Change: {{ hashChange }}</p>
</template>