<template>
    <h1>Header Component</h1>
    <div class="header">
        <slot></slot>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.header {
    color: red;
    text-transform: capitalize;
    font-size: 5rem;
}
</style>