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
                            <div class="filter__item">
                                <input class="filter__check" type="checkbox" name="stops" id="var1" >
                                <label class="filter__label filter__label--checkbox" for="var1">Без пересадок</label>
                            </div>
                            <div class="filter__item">
                                <input class="filter__check" type="checkbox" name="stops" id="var2" >
                                <label class="filter__label filter__label--checkbox" for="var2">1 пересадка</label>
                            </div>
                            <div class="filter__item">
                                <input class="filter__check" type="checkbox" name="stops" id="var3">
                                <label class="filter__label filter__label--checkbox" for="var3">2 пересадки</label>
                            </div>
                            <div class="filter__item">
                                <input class="filter__check" type="checkbox" name="stops" id="var4">
                                <label class="filter__label filter__label--checkbox" for="var4">3 пересадки</label>
                            </div>
                        </div>
                    </div>
                    <div class="filter">
                        <h4 class="filter__title">Компания</h4>
                        <div class="filter__items">
                            <div class="filter__item">
                                <input class="filter__check" type="radio" name="company" id="all" checked>
                                <label class="filter__label filter__label--radio" for="all">Все</label>
                            </div>
                            <div class="filter__item">
                                <input class="filter__check" type="radio" name="company" id="s7">
                                <label class="filter__label filter__label--radio" for="s7">S7 Airlines</label>
                            </div>
                            <div class="filter__item">
                                <input class="filter__check" type="radio" name="company" id="xiamenair">
                                <label class="filter__label filter__label--radio" for="xa">XiamenAir</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="body">
                <tickets-tabs
                    :tabsItems="tabsItems"
                />

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
import TicketsTabs from '@/components/TicketsTabs.vue'

export default {
    components: {
        TicketsList,
        TicketsTabs,
    },
    data() {
        return {
            jsonCompanies,
            jsonTickets,
            jsonSegments,
            tickets: [],
            limitTickets: 5,
            filterCompanyName: 'all',
            filterStops: [0],
            orderBy: 'none',

            tabsItems: [
                { value: 'price', title: 'Самый дешевый' },
                { value: 'duration', title: 'Самый быстрый' },
                { value: 'optimal', title: 'Оптимальный' },
            ]
        }
    },
    created() {
        this.tickets =
            jsonTickets.map((ticket) => {
                let segm
                let segments = []

                ticket.segments.forEach( ticketSegment => {
                    segments.push( jsonSegments.find( segment => segment.id === ticketSegment) )
                })

                return {
                    'id': ticket.id,
                    'price': ticket.price,
                    'company': {
                        'name': jsonCompanies.find( company => company.id === ticket.companyId ).name,
                        'logo': jsonCompanies.find( company => company.id === ticket.companyId ).logo
                    },
                    'segments': segments
                }
            })
    },
    methods: {
        showMore() {
            this.limitTickets = this.limitTickets + 5
        },
        onClick() {
            console.log('click');
        }
    },
    computed: {
        ticketsFilterAndSorted() {
            return this.tickets.slice(0, this.limitTickets)
        }
    },
    watch: {

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
