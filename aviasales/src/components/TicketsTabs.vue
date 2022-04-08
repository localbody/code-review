<template>
    <div class="tabs">
        <div class="tabs__items">
            <tickets-tabs-item
                :changeOrder="changeOrder"
                v-for="item of tabsItems"
                :item="item"
                :key="item.value"
            />
        </div>
    </div>
</template>

<script>
    import TicketsTabsItem from './TicketsTabsItem.vue'
    export default {
        components: { TicketsTabsItem },
        data() {
            return {
            }
        },
        props: {
            tabsItems: Object,
        },
        methods: {
            changeOrder() {
                console.log('changeOrder')
            }
        }
    }
</script>

<style scoped>
    .tabs {
        border-radius: 5px;
        overflow: hidden ;
        background-color: var(--bg-color-items);
        font-weight: 600;
        font-size: 1em;
        line-height: 1.667em;
        letter-spacing: 0.0417em;
        text-transform: uppercase;
        color: var(--text-color);
    }

    .tabs__items {
        display: grid;
        gap: 1px;
        background-color: var(--border-color);
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: 50px;
        justify-content: center;
        align-items: center;
    }

</style>
