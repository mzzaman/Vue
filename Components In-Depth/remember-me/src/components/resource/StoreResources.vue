<template>
    <div>
        <LearningResources v-for="resource in resources" :key="resource.id" :title="resource.title"
            :description="resource.descritption" :link="resource.link"></LearningResources>
    </div>
</template>

<script>
import LearningResources from './LearningResources.vue';
export default {
    components: { LearningResources },
    inject: ['resources']
}
</script>

<style scoped>
div {
    list-style: none;
    margin: 0;
    padding: 0;
    margin: auto;
    max-width: 40rem;
}
</style>