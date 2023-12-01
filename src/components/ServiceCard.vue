<template>
    <div v-for="(item, index) in props.data" class="service-card flex">
        <div class="block-info flex">
            <h3>{{ item.fields.title }}</h3>
            <p>
                <span>{{ item.fields.description }}</span>
            </p>
        </div>
        <div class="block-img">
            <img id="serviceCardImage" :src="item.fields.file.url">
        </div>
    </div> 
</template>

<script setup>
    const props = defineProps({
        data: Object
    })
</script>

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