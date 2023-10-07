<template>
    <div id="nav">
        <RouterLink id="logo" to="/">Router</RouterLink>
        <RouterLink v-for="destination in destinations" :key="destination.id"
            :to="{ name: 'destination.show', params: { id: destination.id, slug: destination.slug } }">
            {{ destination.name }}

        </RouterLink>
    </div>
    <div class="container">
        <RouterView v-slot="{ Component }">
            <Transition name="moveUp">
                <Component :is="Component" :key="$route.path"></Component>
            </Transition>
        </RouterView>

    </div>
</template>

<script>
import sourceData from '@/data.json'

export default {
    setup() {
        return {
            destinations: sourceData.destinations
        }
    }
}
</script>

<style lang="css" scoped>
.moveUp-enter-active {
    animation: fadeIn 1s ease-in;
}

@keyframes fadeIn {
    0% {
        opacity: 0;
    }

    50% {
        opacity: 0.5;
    }

    100% {
        opacity: 1;
    }
}

.moveUp-leave-active {
    animation: moveUp 0.3s ease-in;
}

@keyframes moveUp {
    0% {
        transform: translateY(0);
    }

    100% {
        transform: translateY(-400px);
    }
}
</style>