<template>
    <div v-for="segment of segments" :key="segment.id">
        <tickets-segment :segment="segment"/>
    </div>
</template>

<script>
    import TicketsSegment from '@/components/TicketsSegment.vue'

    export default {
        components: {
            TicketsSegment,
        },
        props: {
            segments: {
                type: Object,
                require: true,
            }
        }
    }
</script>

<style scoped>

</style>
