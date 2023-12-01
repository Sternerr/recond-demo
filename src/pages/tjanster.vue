<template>
    <div class="service-container container">
        <div class="top">
            <h2>Tjänster</h2>
        </div>

        <div class="card-container flex">
            <div v-for="(item, index) in entries" class="card flex">
                <div class="card-info flex">
                    <h4>{{ item.fields.title }}</h4>  
                    <p>{{ item.fields.description }}</p>
                </div>
                <div class="block flex">
                    <p>{{ item.fields.price }} kr</p>
                    <!-- <button class="primary-button">Boka</button> -->
                </div>
            </div>
        </div>
    </div>
    <Footer absolute="true" />
</template>

<script setup lang="ts">
    import type { ServiceType } from "~/plugin/contentful";
    import { getData } from "~/plugin/contentful";

    const entries = await getData<ServiceType>("services")
    .then(res => res.items.map(item => {
        return item;
    }));

    console.log(entries[0].fields)
</script>

<style>
    .service-container {
        max-width: 1280px;
        margin: 124px auto;
        padding: 32px;

        width: 100%;
    }

    .service-container .card-container {
        --gap: 32px;
        flex-direction: column;
        margin: 2.5em 0 5em 0;   
    }

    .service-container .card {
        --gap: 0;
        position: relative;
        flex-direction: row;
        justify-content: space-between;

        padding-right: 1em;
    }

    .service-container .card::after {
        content: "";
        position: absolute;

        bottom: -1.5em;
        left: 0;

        width: 100%;
        height: 1px;

        background: var(--clr-neutral-50);
    }

    .service-container .card-info {
        --gap: 1em;
        flex-direction: column;
        width: 50%;
    }

    .service-container .card-info > p {
        opacity: 0.5;
        margin: 0;
    }

    .service-container .block {
        --gap: 16px;

        flex-direction: column;
        align-items: end;
    }

    .service-container .block p {
        margin-top: 0.5em;
    }

    .service-container .block button {
        width: 100%;
    }


    @media (max-width: 35em) {
        .service-container .card {
            --gap: 16px;
            flex-direction: column;
        }

        .service-container .card-info {
            width: 100%;
        }

        .service-container .block { 
            flex-direction: column;  
            align-items: start;
        }
    }
</style>