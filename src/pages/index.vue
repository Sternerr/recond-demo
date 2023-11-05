<template>
    <div class="landing">
        <div class="hero container">
            <div class="hero-wrapper grid">
                <div class="hero__info">
                    <h1>Ge din bil ett nytt leende</h1>
                    <p>
                        Här på Rekond återställer vi inte bara utseendet; vi skapar en upplevelse. 
                        Vi ger ditt fordon den perfekta vården. 
                        Boka din tid redan idag och upplev känslan av ett fordon i perfektion.
                    </p>
                    <div class="hero__info__button flex">
                        <div class="line"></div>
                        <button @click="alertButton" class="primary-button-outlined">Boka Här</button>
                    </div>
                </div>
                <Scroller />
            </div>  
        </div>
        <div class="feature">
            <div class="container flex">
                <p>
                    <span>Här på Rekond återställer vi inte bara utseendet; vi skapar en upplevelse.
                        Få känslan av ett fordon i perfektion och ett extra leende 
                        - Boka din tid redan idag!
                    </span>
                </p>
                <button @click="alertButton" class="primary-button">Boka här</button>
            </div>
        </div>

        <section class="landing-service container">
            <h2>Vad gör vi?</h2>
            <div class="card-container flex">
                <ServiceCard />
            </div>
            <div class="landing-services-button">
                <NuxtLink to="/services"><button type="button" class="primary-button">Utforska vår tjänster här</button></NuxtLink>
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
    const alertButton = () => {
        alert("Boka här knapparna är inaktiverade då syftet är att de ska omdirigera till ett separat bokningssystem som ej implementerats")
    }
</script>

<style>
    .hero {
        margin-top: 120px;
    }
    
    .hero-wrapper {
        --gap: 125px;

        grid-template-columns: 0.9fr 1fr;
        margin: 128px auto;
        padding: 0 32px;

        align-items: center;
    }

    .hero-wrapper .hero__info p {
        margin-top: 16px;
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
        padding: 0 32px;
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