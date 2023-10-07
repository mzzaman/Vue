<template>
  <div>
    <Events :counter="count" @buttonClicked="increaseBy"></Events>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Events from './components/Events.vue';
const count = ref('Hello World ');
const increaseBy = () => {
  count.value += 'Added by Emit Events';
}

</script>

<style lang="scss" scoped></style>