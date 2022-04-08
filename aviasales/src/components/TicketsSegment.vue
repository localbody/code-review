<template>
    <div class="ticket__segment segment">
        <div class="segment__cell">
            <div class="segment__route segment--title">
                {{segment.origin}}-{{segment.destination}}
            </div>
            <div class="segment__timestart-timeend">
                {{timeStartEnd}}
            </div>
        </div>
        <div class="segment__cell">
            <div class="segment--title">
                В пути
            </div>
            <div class="segment__duration">
                {{durationFormatted}}
            </div>
        </div>
        <div class="segment__cell">
            <div class="segment__stops-count segment--title">
                {{stops}}
            </div>
            <div class="segment__stops-list">
                {{segmentStops}}
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            segment: {
                type: Object,
                require: true,
            }
        },
        computed: {
            stops() {
                if (this.segment.stops.length === 0)
                    return 'без пересадок'

                return this.segment.stops.length + (this.segment.stops.length === 1 ? ' пересадка' : ' пересадки')
            },
            segmentStops() {
                return this.segment.stops.join(', ')
            },
            durationFormatted() {
                let minutes = Math.floor((this.segment.duration / (1000 * 60)) % 60)
                let hours = Math.floor((this.segment.duration / (1000 * 60 * 60)) % 24)
                return hours + 'Ч ' + minutes + 'М'
            },
            timeStartEnd() {
                let timeStartHourMinutes = new Date(this.segment.dateStart).toTimeString().split(':');
                let timeEndHourMinutes = new Date(this.segment.dateEnd).toTimeString().split(':');
                return timeStartHourMinutes[0] + ':' + timeStartHourMinutes[1] + ' – ' + timeEndHourMinutes[0] + ':' + timeEndHourMinutes[1];
            },
        },
    }
</script>

<style scoped>
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
