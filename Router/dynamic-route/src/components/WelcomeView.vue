<template>
    <div class="home">
        <h1>All Destinations</h1>
        <RouterLink v-for="destination in destinations" :key="destination.id" :to="destination.slug" />
    </div>
</template>

<script setup>
import { useDestinationsStore } from '@/stores/homeData'
const destinationsStore = useDestinationsStore()
const { destinations } = destinationsStore
</script>

<style  scoped></style>