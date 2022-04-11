<template>
    <main>
        <div class="header">
            <div class="logo">
                <img src="@/assets/images/logo.png" alt="Aviasales's logo">
            </div>
        </div>

        <div class="content">
            <div class="sidebar">
                <div class="filters">
                    <div class="filter">
                        <h4 class="filter__title">Количество пересадок</h4>
                        <div class="filter__items">
                            <div
                                class="filter__item"
                                v-for="item of filterStops"
                                :key="item.value"
                            >
                                <input
                                    class="filter__check"
                                    type="checkbox"
                                    name="stops"
                                    :id="item.value"
                                    :value="item.count"
                                    v-model="activeFilterStops"
                                >
                                <label
                                    class="filter__label filter__label--checkbox"
                                    :for="item.value"
                                >
                                    {{item.title}}
                                </label>
                            </div>
                        </div>
                    </div>
                    <div class="filter">
                        <h4 class="filter__title">Компания</h4>
                        <div class="filter__items">
                            <div
                                class="filter__item"
                                v-for="item of filterCompanies"
                                :key="item.id"
                            >
                                <input
                                    class="filter__check"
                                    type="radio"
                                    name="company"
                                    :id="item.id"
                                    :value="item.id"
                                    v-model="activeFilterCompanies"
                                >
                                <label
                                    class="filter__label filter__label--radio"
                                    :for="item.id"
                                >
                                    {{item.name}}
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="body">
                    <div class="tabs">
                        <div class="tabs__items">
                            <div
                                class="tabs__item"
                                v-for="item of tabsItems"
                                :key="item.value"
                            >
                                <input
                                    class="tabs__check"
                                    :id="item.value"
                                    type="radio"
                                    name="tabs"
                                    :value="item.value"
                                    v-model="activeTab"
                                />
                                <label
                                    class="tabs__label"
                                    :for="item.value"
                                >
                                    {{item.title}}
                                </label>
                            </div>
                        </div>
                    </div>


                <tickets-list
                    :tickets="ticketsFilterAndSorted"
                />
                <button
                    class="button--show-more"
                    @click="showMore"
                >
                    Показать еще 5 билетов!</button>
            </div>
        </div>

    </main>
</template>

<script>

import jsonCompanies from '@/assets/json/companies.json'
import jsonTickets from '@/assets/json/tickets.json'
import jsonSegments from '@/assets/json/segments.json'

import TicketsList from '@/components/TicketsList.vue'

export default {
    components: {
        TicketsList,
    },
    data() {
        return {
            jsonCompanies,
            jsonTickets,
            jsonSegments,
            tickets: [],
            limitTickets: 5,
            filterCompanies: [],
            activeFilterCompanies: 0,
            filterStops: [
                {title: 'Без пересадок', value: 'withoutStops', count: 0},
                {title: '1 пересадкa', value: 'oneStops', count: 1},
                {title: '2 пересадки', value: 'twoStops', count: 2},
                {title: '3 пересадки', value: 'threeStops', count: 3},
            ],
            activeFilterStops: [],
            orderBy: 'none',

            tabsItems: [
                { value: 'price', title: 'Самый дешевый' },
                { value: 'duration', title: 'Самый быстрый' },
                { value: 'optimal', title: 'Оптимальный' },
            ],
            activeTab: null,
        }
    },
    created() {
        this.filterCompanies = jsonCompanies.map( item => {
            return {
                'name': item.name,
                'id': item.id,
            }})
        this.filterCompanies.unshift({name: 'Все', id: 0})
        this.tickets =
            jsonTickets.map( ticket => {
                let segments = []
                let duration = 0
                let stops = 0
                let stopsList = []

                ticket.segments.forEach( ticketSegment => {
                    let segment = jsonSegments.find( segment => segment.id === ticketSegment);
                    segments.push( segment )
                    duration = duration + segment.duration
                    stops = stops + segment.stops.length
                    stopsList.push(segment.stops.length)
                })

                return {
                    'id': ticket.id,
                    'price': ticket.price,
                    'companyId': ticket.companyId,
                    'company': {
                        'name': jsonCompanies.find( company => company.id === ticket.companyId ).name,
                        'logo': jsonCompanies.find( company => company.id === ticket.companyId ).logo
                    },
                    'segments': segments,
                    'duration': duration,
                    'stopsList': stopsList,
                    'stops': stops,
                }
            })
    },
    methods: {
        showMore() {
            this.limitTickets = this.limitTickets + 5
        },
    },
    computed: {
        ticketsFilterAndSorted() {
            let sortedTickets = [...this.tickets]

            if (this.activeFilterCompanies !== 0 ) {
                // фильтруем по компании
                sortedTickets = sortedTickets.filter(item => item.companyId === this.activeFilterCompanies)
            }

            if (this.activeFilterStops.length) {
                // фильтруем по пересадкам
            }

            if (this.activeTab === 'duration') {
                // сортируем по продолжительности
                sortedTickets = sortedTickets.sort( (a, b) => a.duration - b.duration )
            }
            if (this.activeTab === 'price') {
                // сортируем по цене
                sortedTickets = sortedTickets.sort( (a, b) => a.price - b.price )
            }
            if (this.activeTab === 'optimal') {
                // сортируем по пересадкам
                sortedTickets = sortedTickets.sort( (a, b) => a.stops - b.stops )
            }

            return sortedTickets.slice(0, this.limitTickets)
        },

    },
}

</script>

<style>
    @import "@/assets/css/reset.css";
    @import "@/assets/css/styles.css";

    .logo {
        width: 82px;
        height: 89px;
        margin: 0px auto 50px auto;
    }

    .logo img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }

    .content {
        display: grid;
        justify-content: center;
        align-items: flex-start;
        grid-template-columns: 232px 502px;
        gap: 20px;
    }

    @media (max-width: 770px) {
        .content {
            grid-template-columns: 1fr;
        }
    }

    .filters {
        display: grid;
        grid-template-columns: 1fr;
        gap: 20px;
    }

    @media (max-width: 770px) {
        .filters {
            grid-template-columns: 1fr 1fr;
        }
    }

    @media (max-width: 500px) {
        .filters {
            grid-template-columns: 1fr;
        }
    }

    .body {
        display: grid;
        grid-template-columns: 1fr;
        gap: 20px;
    }

    .tickets {
        display: grid;
        gap: 20px;
    }

    .button--show-more {
        width: 100%;
        height: 50px;
        border: none;
        border-radius: 5px;
        background-color: var(--bg-selected-color);
        color: white;
        font-weight: 600;
        font-size: 1em;
        line-height: 1.667em;
        letter-spacing: 0.0417em;
        text-transform: uppercase;
        cursor: pointer;
    }

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
