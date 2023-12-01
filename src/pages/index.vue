<template>
    <main class="landing">

        <section class="hero container">
            <div class="hero-wrapper grid">
                <div class="hero__info">
                    <h1>{{ data?.fields.heroTitle }}</h1>
                    <p>{{ data?.fields.heroDesc }} </p>
                    <div class="hero__info__button flex">
                        <div class="line"></div>
                        <NuxtLink to="https://ekholmsrekond.bokamera.se/book" target="_blank">
                            <button @click="" class="primary-button-outlined">{{ data?.fields.heroButton }} </button>
                        </NuxtLink>
                    </div>
                </div>
                <Scroller :data="data?.fields.heroCarousel"/>
            </div> 
        </section>

        <section class="feature">
            <div class="container flex">
                <p>
                    <span>{{ data?.fields.featureText }}</span>
                </p>
                <NuxtLink to="https://ekholmsrekond.bokamera.se/book" target="_blank"><button @click="" class="primary-button">{{ data?.fields.featureButton }}</button></NuxtLink>
            </div>
        </section>

        <section class="landing-service container">
            <h2>{{ data?.fields.serviceTitle }}</h2>
            <div class="card-container flex">
                <ServiceCard :data="data?.fields.services"/>
            </div>
            <div class="landing-services-button">
                <NuxtLink to="/services"><button type="button" class="primary-button">Utforska våra tjänster</button></NuxtLink>
            </div>
        </section>

    </main>
    <Footer />
</template>

<script setup lang="ts">
    import type { HomePageType } from "~/plugin/contentful";
    import { getData } from "~/plugin/contentful";

    const entry = await getData<HomePageType>("homepage")
    .then(res => res.items.map(item => {
        if(item.fields.singletonId === 1) {
            return item;
        }
    }));

    const data = entry.find((i: any) => i.fields.singletonId === 1 );

    function book() {
        window.open("https://ekholmsrekond.bokamera.se/book")
    }
</script>

<style>
    .hero {
        min-height: 100svh; 
    }
    
    .hero-wrapper {
        --gap: 125px;

        grid-template-columns: 0.9fr 1fr;
        margin: auto 0 auto;
        padding: 230px 32px;

        align-items: center;
    }

    .hero-wrapper .hero__info p {
        margin-top: 16px;
        font-size: var(--fs-70);
    }

    .hero-wrapper .hero__info .hero__info__button {
        --gap: 16px;
        margin-top: 32px;

        justify-content: start;
        align-items: center;
    }

    .hero-wrapper .hero__info .line {
        width: 44px;
        height: 1px;

        background-color: hsl(var(--clr-primary));
    }

    .feature {
        padding: 0 32px;
        background-color: hsl(var(--clr-surface-container));
    }

    .feature .container {
        --gap: 32px;
        flex-direction: column;

        padding: 64px 0;
        margin: 0 auto;
    }

    .feature .container p {
        font-size: var(--fs-l);
    }

    .feature .container button {
        width: 250px;
        padding: 16px;
    }


    .landing-service {
        margin: 5em auto;
        padding: 100px 32px;
    }

    .landing-service .card-container {
        --gap: 32px;
        flex-direction: row;
        margin-top: 5em;
    }

    .landing-services-button {
        text-align: center;
    }

    .landing-services-button a { 
        display: block;
        margin: 80px auto 80px auto;

        width: fit-content;
    }

    .landing-services-button  button {
        padding: 16px;
    }



    @media (max-width: 80rem) {
        .landing-service .card-container {
            flex-direction: column;
        }
    }

    @media (max-width: 62.5rem) {
        .hero-wrapper {
            --gap: 32px;
        }
    }

    @media (max-width: 46rem) {
        .hero-wrapper {
            --gap: 64px;
            grid-template-columns: 1fr;

            margin: 64px auto;
        }

        .feature .container p {
            font-size: var(--fs-100);
        }
    }

    @media (max-width: 35rem) {
        .hero-wrapper {
            padding: 0 16px;
        }

        .feature {
            padding: 0 16px;
        }

        .feature .container button {
            margin: 0 auto;
        }

        .landing-service {
            padding: 0 16px;
        }

        .feature .container p {
            font-size: var(--fs-70);
        }
    }
</style>