<template>
    <div class="service-card flex">
        <div class="block-info flex">
            <h3>Rekonditionering</h3>
            <p>
                <span>En komplett fordonsvård som lyfter fram dess skönhet både inuti och utanpå. 
                    Med vår noggranna rengöring, professionella vaxning och polering får du inte bara en skinande glans, 
                    utan du förlänger även bilens livslängd.
                </span>
            </p>
        </div>
        <div class="block-img">
            <img id="serviceCardImage" src="~/assets/img/service/service_img1.jpg" alt="Photo by Olav Tvedt on Unsplash">
        </div>
    </div>
    <div class="service-card flex">
        <div class="block-info flex">
            <h3>Keramiskt Lackskydd</h3>
            <p>
                <span>En komplett fordonsvård som lyfter fram dess skönhet både inuti och utanpå. 
                    Med vår noggranna rengöring, 
                    professionella vaxning och polering får du inte bara en skinande glans, 
                    utan du förlänger även bilens livslängd.
                </span>
            </p>
        </div>
        <div class="block-img">
            <img id="serviceCardImage" src="~/assets/img/service/service_img2.jpg" alt="Photo by Amr Taha™ on Unsplash">
        </div>
    </div> 
    <div class="service-card flex">
        <div class="block-info flex">
            <h3>Ozonbehandling</h3>
            <p>
                <span>Eliminerar dålig lukt, oangenäma dofter samt mikroorgansimer från ditt fordon. 
                    Genom att ta bort mögelsporer och bakterier som 
                    ofta trivs i trånga utrymmen blir ditt fordon luktfritt.
                </span>
            </p>
        </div>
        <div class="block-img">
            <img id="serviceCardImage" src="~/assets/img/service/service_img3.jpg" alt="Photo by Aaron Burden on Unsplash">
        </div>
    </div> 
</template>

<style>
    .service-card {
        --gap: 32px;
        position: relative;
        flex-direction: column-reverse;

        flex-basis: 100%;
        /* flex-grow: 0; */
        background-color: hsl(var(--clr-surface-container));

        justify-content: start;
        align-items: start;
        
        border-radius: 16px;

        padding: 32px;
        box-shadow: 2px 4px 4px hsla(0, 0%, 11%, 0.48);
    }

    .service-card .block-info {
        --gap: 16px;
        flex-direction: column;
    }  

    .service-card .block-info p {
        opacity: 0.8;
    }
    
    .service-card .block-img {
        width: inherit;
        min-height: 600px;
        max-height: 600px;

        border-radius: inherit;
    }

    .block-img img {
        border-radius: inherit;

        height: 100%;
        max-width: 100%;
        object-fit: cover;
    }

    @media (max-width: 1280px) {
        .service-card {
            --gap: 50px;
            flex-direction: row;
        }

        .service-card .block-info {
            flex-basis: 100%;
            align-self: center;
            margin-left: 32px;
        }

        .service-card .block-img {
            width: inherit;
            max-height: inherit;
            min-height: inherit;
            
            border-radius: inherit;
        }

        .block-img img {
            border-radius: inherit;

            height: 100%;
            max-width: 100%;
            object-fit: cover;
        } 
    }

    @media (max-width: 735px) {
        .service-card {
            --gap: 50px;
            flex-direction: column;
        }

        .service-card .block-info {
            flex-basis: 100%;
            align-self: center;
            margin-left: 0;
        }
    }
</style>