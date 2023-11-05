<template>
    <div class="scroller">
        <div class="scroller__wrapper flex">
            <img src="~/assets/img/scroller/scroller_img1.jpg" alt="Photo by Olav Tvedt on Unsplash">
            <img src="~/assets/img/scroller/scroller_img2.jpg" alt="Photo by Oliur on Unsplash">
            <img src="~/assets/img/scroller/scroller_img3.jpg" alt="Photo by Adam Stefanca on Unsplash">
        </div>
        <div class="scroller__navigation-buttons flex">
            <div role="button" data-isVisible="true"></div>
            <div role="button" data-isVisible="false"></div>
            <div role="button" data-isVisible="false"></div>
        </div>
    </div>
</template>

<script setup lang="ts">
    const currentIndex = ref(0);

    const setSlidePosition = (index: number): number => {
        const items = document.querySelectorAll(".scroller__wrapper img");
        const slideWidth = items[0].getBoundingClientRect().width;

        return (slideWidth * index);
    }

    onMounted(() => {
        const buttons = document.querySelectorAll(".scroller__navigation-buttons div");
        const track = document.querySelector(".scroller__wrapper");

        buttons.forEach((button, index) => {
            button.addEventListener("click", (e) => {
                const slideWidth: number = setSlidePosition(index);
                
                track?.scrollTo({
                    left: slideWidth,
                    behavior: "smooth"
                });

                buttons[currentIndex.value].setAttribute("data-isVisible", "false");
                button.setAttribute("data-isVisible", "true");

                currentIndex.value = index;
            }) 
        })
    })
</script>

<style>
    .scroller {
        width: 100%;
        height: 350px;
    }

    .scroller__wrapper {
        gap: 0;
        width: 100%;
        min-width: 100%;
        min-height: 35px;

        overflow-x: scroll;

        scroll-snap-type: inline mandatory;
        scrollbar-width: none;
    }
    
    .scroller__wrapper > * {
        scroll-snap-align: start;
    }

    .scroller__wrapper img {
        min-width: 100%;
        height: 350px;

        border-radius: 15px;

        object-fit: cover;
        /* object-position: 25% 25%;  */
    }

    .scroller .scroller__navigation-buttons {
        --gap: 8px;
        margin-top: 16px;
    }
    
    .scroller .scroller__navigation-buttons div {
        height: 14px;
        width: 100px;

        border-radius: 8px;
        background-color: hsl(var(--clr-surface-on));

        cursor: pointer;
    }

    .scroller .scroller__navigation-buttons div[data-isVisible="false"] {
        opacity: 0.5;
    }


    @media (max-width: 46rem) {
        .scroller__wrapper {
            gap: 16px;
            scrollbar-width: thin;
        } 

        .scroller__wrapper img {
            min-width: 90%;
        }

        .scroller .scroller__navigation-buttons {
            display: none;
        }
    }
</style>