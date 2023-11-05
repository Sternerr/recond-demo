<template>
    <div class="landing">
        <div class="hero container">
            <div class="hero-wrapper grid">
                <div class="hero__info">
                    <h1>Ge din bil ett nytt leende</h1>
                    <p>
                        Här på recond återställer vi inte bara utseendet; vi skapar en upplevelse. 
                        Vi ger ditt fordon den perfekta vården. 
                        Boka din tid redan idag och upplev känslan av ett fordon i perfektion.
                    </p>
                    <div class="hero__info__button flex">
                        <div class="line"></div>
                        <button class="primary-button-outlined">Boka Här</button>
                    </div>
                </div>
                <Scroller />
            </div>  
        </div>
    </div>
</template>


<style>
    .hero {
        padding: 0 32px;
    }

    .hero-wrapper {

        --gap: 125px;

        grid-template-columns: 0.9fr 1fr;

        max-width: 1280px;
        margin: 180px auto;

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

    @media (max-width: 62.5rem) {
        .hero-wrapper {
            --gap: 32px;
        }
    }

    @media (max-width: 46rem) {
        .hero-wrapper {
            --gap: 64px;
            grid-template-columns: 1fr;
        }
    }
</style>