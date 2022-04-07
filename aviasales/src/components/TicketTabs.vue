<template>
    <div class="tabs">
        <div class="tabs__items">
            <div class="tabs__item">
                <input class="tabs__check" type="radio" name="tabs" id="lowprice">
                <label class="tabs__label" for="lowprice">Самый дешевый</label>
            </div>
            <div class="tabs__item">
                <input class="tabs__check" type="radio" name="tabs" id="fast">
                <label class="tabs__label" for="fast">Самый быстрый</label>
            </div>
            <div class="tabs__item">
                <input class="tabs__check" type="radio" name="tabs" id="optimal">
                <label class="tabs__label" for="optimal">Оптимальный</label>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
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
