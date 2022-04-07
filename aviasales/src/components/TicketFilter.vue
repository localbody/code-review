<template>
    <div class="filter">
        <h4 class="filter__title">Количество пересадок</h4>
        <div class="filter__items">
            <div class="filter__item">
                <input class="filter__check" type="checkbox" name="" id="var1" >
                <label class="filter__label filter__label--checkbox" for="var1">Без пересадок</label>
            </div>
            <div class="filter__item">
                <input class="filter__check" type="checkbox" name="" id="var2" >
                <label class="filter__label filter__label--checkbox" for="var2">1 пересадка</label>
            </div>
            <div class="filter__item">
                <input class="filter__check" type="checkbox" name="" id="var3">
                <label class="filter__label filter__label--checkbox" for="var3">2 пересадки</label>
            </div>
            <div class="filter__item">
                <input class="filter__check" type="checkbox" name="" id="var4">
                <label class="filter__label filter__label--checkbox" for="var4">3 пересадки</label>
            </div>
        </div>
    </div>
    <div class="filter">
        <h4 class="filter__title">Компания</h4>
        <div class="filter__items">
            <div class="filter__item">
                <input class="filter__check" type="radio" name="radio" id="radio1" checked>
                <label class="filter__label filter__label--radio" for="radio1">Все</label>
            </div>
            <div class="filter__item">
                <input class="filter__check" type="radio" name="radio" id="radio2">
                <label class="filter__label filter__label--radio" for="radio2">S7 Airlines</label>
            </div>
            <div class="filter__item">
                <input class="filter__check" type="radio" name="radio" id="radio3">
                <label class="filter__label filter__label--radio" for="radio3">XiamenAir</label>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
    }
</script>

<style scoped>
    .filter {
        background: var(--bg-color-items);
        box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
        border-radius: 5px;
        color: var(--text-color);
        padding-bottom: 15px;
    }

    @media (max-width: 770px) {
        .filter {
            align-self: flex-start;
        }
    }

    .filter__title {
        font-weight: 600;
        font-size: 1em;
        line-height: 1em;
        text-transform: uppercase;
        letter-spacing: 0.0417em;
        padding: 20px;
    }

    .filter__check:checked+.filter__label--checkbox::before,
    .filter__check:checked+.filter__label--radio::before {
        background-size: 12px;
        background-position: center;
        background-repeat: no-repeat;
        border-color: var(--bg-selected-color);
    }

    .filter__check:checked+.filter__label--checkbox::before {
        background-image: url(@/assets/images/check.svg);
    }

    .filter__check:checked+.filter__label--radio::before {
        background-image: url(@/assets/images/radio.svg);
    }

    .filter__label {
        display: flex;
        align-items: center;
    }

    .filter__label::before {
        content: "";
        display: block;
        width: 20px;
        height: 20px;
        margin-right: 10px;
        border: 1px solid var(--border-nochecked);
        border-radius: 2px;
    }

    .filter__label--checkbox::before {
        border-radius: 2px;
    }

    .filter__label--radio::before {
        border-radius: 100%;
    }

    .filter__items {
        font-weight: 400;
        font-size: 1.084em;
        line-height: 1.667em;
    }

    .filter__item {
        height: 40px;
        padding: 10px 20px;
        display: flex;
    }

    .filter__item:hover {
        background-color: var(--bg-hover-color);
    }

    .filter__item:hover .filter__label::before {
        border-color: var(--bg-selected-color);
    }
</style>
