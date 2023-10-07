<template>
    <div>
        <BaseCard>
            <header>
                <h3>{{ title }}</h3>
                <BaseButton mode="flat">
                    Delete
                </BaseButton>
            </header>
            <p>{{ description }}</p>
            <a :href="link">View resource</a>
        </BaseCard>
    </div>
</template>

<script>
import BaseButton from '../ui/BaseButton.vue';
import BaseCard from '../ui/BaseCard.vue';

export default {
    props: ['title', 'description', 'link'],
    components: { BaseCard, BaseButton }
}
</script>

<style scoped>
div {
    margin: auto, 15px;
    max-width: 40rem;
}

header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

h3 {
    font-size: 1.25rem;
    margin: 0.5rem 0;
}

p {
    margin: 0.5rem 0;
}

a {
    text-decoration: none;
    color: #ce5c00;
}

a:hover,
a:active {
    color: #c89300;
}
</style>