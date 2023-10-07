<template>
    <h1>Body Component</h1>
    <div class="body">
        <slot></slot>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.body {
    color: blue;
    font-size: 3rem;
}
</style>