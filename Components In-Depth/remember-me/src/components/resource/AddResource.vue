<template>
    <BaseCard>
        <form @submit="submitData">
            <div class="form-control">
                <label for="title">Title</label>
                <input type="text" name="title" id="title" ref="titleInput">
            </div>
            <div class="form-control">
                <label for="description">Description</label>
                <textarea name="description" id="description" ref="descInput"></textarea>
            </div>
            <div class="form-control">
                <label for="link">Url</label>
                <input type="url" name="link" id="link" ref="linkInput">
            </div>
            <div>
                <BaseButton type="submit">Add Resource</BaseButton>
            </div>
        </form>
    </BaseCard>
</template>

<script>
import BaseButton from '../ui/BaseButton.vue';
import BaseCard from '../ui/BaseCard.vue';

export default {
    components: { BaseCard, BaseButton },
    inject: ['newinfo'],
    methods: {
        submitData() {
            const enteredTitle = this.$refs.titleInput.value;
            const enteredDescription = this.$refs.descInput.value;
            const enteredUrl = this.$refs.linkInput.value;
            this.newinfo(enteredTitle, enteredDescription, enteredUrl)
        }

    }
}
</script>

<style scoped>
label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
}

input,
textarea {
    display: block;
    width: 100%;
    font: inherit;
    padding: 1rem;
    border: 1px solid #ccc;
}

input:focus,
textarea:focus {
    outline: none;
    border-color: #3a0061;
    background-color: #f7ebff;
}

.form-control {
    margin: 1rem 0;
}
</style>