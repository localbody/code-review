<template>
    <div class="ticket">
        <div class="ticket__header">
            <div class="ticket__price">
                {{ticket.price}} P
            </div>
            <div class="ticket__company-logo">
                <img src="@/assets/images/logo-s7.png" alt="s7's logo">
            </div>
        </div>
        <div class="ticket__body">
            <div class="ticket__segment segment">
                <div class="segment__cell">
                    <div class="segment__route segment--title">
                        MOW – HKT
                    </div>
                    <div class="segment__timestart-timeend">
                        10:45 – 08:00
                    </div>
                </div>
                <div class="segment__cell">
                    <div class="segment--title">
                        В пути
                    </div>
                    <div class="segment__duration">
                        21ч 15м
                    </div>
                </div>
                <div class="segment__cell">
                    <div class="segment__stops-count segment--title">
                        2 пересадки
                    </div>
                    <div class="segment__stops-list">
                        HKG, JNB
                    </div>
                </div>
            </div>
            <div class="ticket__segment segment">
                <div class="segment__cell">
                    <div class="segment__route segment--title">
                        MOW – HKT
                    </div>
                    <div class="segment__timestart-timeend">
                        10:45 – 08:00
                    </div>
                </div>
                <div class="segment__cell">
                    <div class="segment--title">
                        В пути
                    </div>
                    <div class="segment__duration">
                        21ч 15м
                    </div>
                </div>
                <div class="segment__cell">
                    <div class="segment__stops-count segment--title">
                        2 пересадки
                    </div>
                    <div class="segment__stops-list">
                        HKG, JNB
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            ticket: {
                type: Object,
                require: true,
            },
        },
    }
</script>

<style scoped>
    .ticket {
        background: var(--bg-color-items);
        box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
        border-radius: 5px;
        padding: 20px;
        cursor: pointer;
    }

    .ticket__header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
    }

    .ticket__price {
        font-weight: 600;
        font-size: 2em;
        line-height: 2em;
        color: var(--text-accent-color);
    }

    .ticket__company-logo{
        width: 110px;
        height: 36px;
    }

    .ticket__company-logo img {
        object-fit: contain;
    }

    .ticket__body {
        display: grid;
        gap: 10px;
    }

    .segment {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        color: var(--text-color);
        font-weight: 600;
        font-size: 1.167em;
        line-height: 1.75em;
        text-transform: uppercase;
    }

    .segment--title {
        color: var(--text-gray-color);
        font-size: 1em;
        line-height: 1.5em;
        letter-spacing: 0.0417em;
    }
</style>
