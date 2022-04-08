<template>
    <div class="tickets">
        <tickets-item
            v-for="ticket of tickets"
            :ticket="ticket"
            :companies="companies"
            :key="ticket.id"
        />
    </div>

</template>

<script>
    import TicketsItem from '@/components/TicketsItem.vue';

    export default {
        components: {
            TicketsItem,
        },
        props: {
            tickets: {
                type: Object,
                require: true,
            },
            companies: {
                type: Object,
                require: true,
            }
        }
    }
</script>

<style scoped>

</style>
