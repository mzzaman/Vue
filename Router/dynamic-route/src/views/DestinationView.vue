<script>
import sourceData from '@/data.json'
import TheExperience from '../components/TheExperience.vue';
import { RouterLink, RouterView } from 'vue-router';
import GoBack from '../components/GoBack.vue';

export default {
    props: {
        id: { type: Number, require: true },

    },
    computed: {
        destination() {
            return sourceData.destinations.find((destination) => destination.id === parseInt(this.id));
        },
    },
    components: { TheExperience, RouterLink, RouterView, GoBack }
}

</script>

<template>
    <div>
        <section v-if="destination" class="destinaton">
            <h1>{{ destination.name }}</h1>
            <GoBack />
            <div class="destination-details">
                <img :src="`/images/${destination.image}`" :alt="destination.name" />
                <p>{{ destination.description }}</p>
            </div>
        </section>
        <section class="experiences">
            <h2>Top Experience in {{ destination.name }}</h2>
            <div class="cards">
                <RouterLink v-for="experience in destination.experiences" :key="experience.slug"
                    :to="{ name: 'experience.show', params: { experienceSlug: experience.slug } }">
                    <TheExperience :experience="experience" />
                </RouterLink>
            </div>
            <RouterView />
        </section>
    </div>
</template>