<template>
    <div class="ticket">
        <div class="ticket__header">
            <div class="ticket__price">
                {{formatPrice}}
            </div>
            <div class="ticket__company-logo">
                <!-- не осилил как забиндить путь до картинки вида "@/assets/images/" - vue ругался на пробел в названии картинки-->
                <img :src="ticket.company.logo" :alt="ticket.company.name">
            </div>
        </div>
        <div class="ticket__body">
            <tickets-segments :segments="ticket.segments"/>
        </div>
    </div>
</template>

<script>
import TicketsSegments from './TicketsSegments.vue'

    export default {
        components: {
            TicketsSegments,
        },

        props: {
            ticket: {
                type: Object,
                require: true,
            },
        },
        computed: {
            formatPrice() {
                return new Intl.NumberFormat('ru-RU').format(this.ticket.price) + ' Р'
            }
        }
    }
</script>

<style scoped>
    .ticket {
        display: grid;
        grid-template-columns: 1fr;
        gap: 20px;
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
</style>
