<template>
    <div>
        <h1>{{ title }}</h1>
    </div>
</template>

<script>
export default {
    props: {
        id: { type: Number, require: true },
        title: { type: String, require: true, default: "Hello Title?" }
    }
}
</script>

<style lang="scss" scoped></style>