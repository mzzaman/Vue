<template>
    <BaseCard>
        <BaseButton @click="setSelectdTab('StoreResources')" :mode="storedResButtonMode">Store
            Resources
        </BaseButton>
        <BaseButton @click="setSelectdTab('AddResource')" :mode="addResButtonMode">Add Resources</BaseButton>
    </BaseCard>
    <component :is="selectedTab"></component>
</template>

<script>
import BaseButton from '../ui/BaseButton.vue';
import BaseCard from '../ui/BaseCard.vue';
import StoreResources from './StoreResources.vue';
import AddResource from './AddResource.vue';

export default {
    components: { BaseCard, BaseButton, StoreResources, AddResource },
    data() {
        return {
            selectedTab: 'StoreResources',
            storeInfos: [
                {
                    id: '1',
                    title: 'Official Documentation',
                    descritption: 'The Official Vue Js Documentiation Guide',
                    link: 'https://vuejs.org'
                },
                {
                    id: '2',
                    title: 'Official Documentation',
                    descritption: 'The Official Laravel Documentiation Guide',
                    link: 'https://laravel.org'
                }
            ]
        }
    },
    provide() {
        return {
            resources: this.storeInfos,
            newinfo: this.addInfos
        }
    },
    computed: {
        storedResButtonMode() {
            return this.selectedTab === 'StoreResources' ? null : 'flat';
        },
        addResButtonMode() {
            return this.selectedTab === 'AddResource' ? null : 'flat';
        }
    },
    methods: {
        setSelectdTab(tab) {
            this.selectedTab = tab;
        },
        addInfos(title, description, url) {
            const addResource = {
                id: new Date().toISOString(),
                title: title,
                description: description,
                link: url
            };
            this.storeInfos.push(addResource);
            this.setSelectdTab = 'StoreResources';
        }
    }
}
</script>

<style scoped></style>