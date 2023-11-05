<template>
    <header class="primary-header desktop">
        <nav class="container flex">
            <NuxtLink to="/"><span class="logo">Rekond</span></NuxtLink>

            <ul class="primary-navigation flex">
                <li><NuxtLink to="/services">Tjänster</NuxtLink></li>
                <li><button @click="alertButton" class="primary-button">Boka här</button></li>
            </ul>
        </nav>
    </header>
    <header class="primary-header mobile">
        <nav class="container flex">
            <NuxtLink @click="setMenuState('logo')" to="/"><span class="logo">Rekond</span></NuxtLink>

            <div @click="setMenuState()" class="hamburger flex" :aria-expanded="menuState">
                <div></div>
                <div></div>
                <div></div>
            </div>
        </nav>
    </header>
    <ul id="primary-navigation" class="primary-navigation flex mobile">
        <li><NuxtLink to="/services" @click="setMenuState">Tjänster</NuxtLink></li>
        <li><button @click="alertButton" class="primary-button">Boka här</button></li>
    </ul>
</template>

<script setup lang="ts">
    import gsap from "gsap";
    const tl = gsap.timeline({ paused: true, reversed: true, });
    const menuState = ref(false)

    const alertButton = () => {
        alert("Boka här knapparna är inaktiverade då syftet är att de ska omdirigera till ett separat bokningssystem som ej implementerats")
    }

    const toggleMenu = () => {
        const nav = document.querySelector("#primary-navigation");

        tl.to(nav, {
            height: "100%",
            duration: 0.25,
        })
        .to("#primary-navigation li", {
            opacity: 1,
            duration: 0.35,
        }, 0.125)
    }

    const setMenuState = (el: string = "") => {
        if(el === "logo" && menuState.value === false) {
            return
        }

        menuState.value = !menuState.value

        if(tl.reversed()) {
            tl.play();
        } else {
            tl.reverse();
        }
    }

    onMounted(() => toggleMenu())
</script>

<style>
    .primary-header {
        position: fixed;
        top: 0; left: 0;
        width: 100%;
        z-index: 9900;

        background-color: hsl(var(--clr-surface));
    }

    .primary-header::after {
        content: "";
        position: absolute;
        width: 100%;
        height: 4px;

        background-color: hsl(var(--clr-surface-container-light));
    }

    .primary-header .container {
        padding: 16px 32px;

        justify-content: space-between;
        align-items: center;
    }

    .primary-header .container span { font-size: var(--fs-70); }

    .primary-header .container .primary-navigation {
        list-style: none;

        align-items: center;
    }

    .primary-header .container .primary-navigation li a {
       cursor: pointer;
    }

    @media (max-width: 46rem) {
        .primary-header .hamburger {
            --gap: 6px;
            flex-direction: column;

            padding: 6px;
            cursor: pointer;
        }

        .primary-header .container .hamburger div {
            width: 32px;
            height: 2px;

            background-color: hsl(var(--clr-surface-on));
            transition: transform 500ms;
        }

        .primary-header .container .hamburger[aria-expanded="true"] div:nth-child(1) {
            transform: rotate(-45deg) translateY(11px);
        }

        .primary-header .container .hamburger[aria-expanded="true"] div:nth-child(2) {
            opacity: 0;
        }

        .primary-header .container .hamburger[aria-expanded="true"] div:nth-child(3) {
            transform: rotate(45deg) translateY(-12px);
        }

        .primary-navigation {
            position: fixed;
            top: 62px;
            width: 100%;
            height: 0%;

            background-color: hsl(var(--clr-surface-container));

            margin-top: 4px;

            justify-content: center;
            align-items: center; 
            z-index: 9970;
        }

        .primary-navigation li {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-top: 20px;

            opacity: 0;
        }

        .primary-navigation li a {
            padding: 16px;
            cursor: pointer;
        }
    }

</style>