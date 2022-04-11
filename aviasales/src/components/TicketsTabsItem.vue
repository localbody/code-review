<template>
    <div class="tabs__item">
        <input
            :id="item.value"
            class="tabs__check"
            type="radio"
            name="tabs"
            @change="onChange"
        />
        <label
            @click="changeOrder"
            :for="item.value"
            class="tabs__label"
            :title="item.value"
        >
            {{item.title}}
        </label>
    </div>
</template>

<script>
    export default {

        props: {
            item: {
                type: Object
            },
        },
        methods: {
            onChange(event) {
                console.log(event)
            },
            changeOrder(event) {
                this.$emit('changeOrder', event.target.title)
            }
        }
    }
</script>

<style scoped>
    .tabs__item {
        height: 100%;
        display: flex;
    }

    .tabs__label {
        background-color: white;
        display: flex;
        flex-grow: 1;
        align-items: center;
        justify-content: center;
    }

    .tabs__label {
        border-top: 1px solid var(--border-color);
        border-bottom: 1px solid var(--border-color);
    }

    .tabs__item:first-child .tabs__label {
        border-left: 1px solid var(--border-color);
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
    }

    .tabs__item:last-child .tabs__label {
        border-right: 1px solid var(--border-color);
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
    }

    .tabs__label:hover {
        background-color: var(--bg-hover-color);
    }

    .tabs__check:checked + .tabs__label {
        background-color: var(--bg-selected-color);
        border: 1px solid var(--bg-selected-color);
        color: white;
    }
</style>
