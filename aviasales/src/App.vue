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
                    <ticket-filter />
                </div>
            </div>
            <div class="body">
                <ticket-tabs />
                <ticket-list
                    :tickets="tickets"
                />
                <button class="button--show-more">Показать еще 5 билетов!</button>
            </div>
        </div>

    </main>
</template>

<script>

import companies from '@/assets/json/companies.json';
import tickets from '@/assets/json/tickets.json';
import segments from '@/assets/json/segments.json';

import TicketTabs from '@/components/TicketTabs.vue';
import TicketFilter from '@/components/TicketFilter.vue';
import TicketList from './components/TicketList.vue';

export default {
    components: {
        TicketTabs,
        TicketFilter,
        TicketList,
    },

    data() {
        return {
            companies,
            tickets,
            segments,
        }
    }
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
</style>
