<template>
    <div class="tickets">
        <ticket-item
            v-for="ticket of tickets"
            :ticket="ticket"
            :key="ticket.id"
        />
    </div>

</template>

<script>
    import TicketItem from '@/components/TicketItem.vue';

    export default {
        components: {
            TicketItem,
        },
        props: {
            tickets: {
                type: Object,
                require: true,
            }
        }
    }
</script>

<style scoped>

</style>
