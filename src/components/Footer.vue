<template>
    <footer class="default-footer">
        <div class="container flex">
            <div class="default-footer-info">
                <NuxtLink to="/"><img class="logo" :src="data?.fields.logotype.fields.file.url" alt="Logotyp" /></NuxtLink>
                <div class="contact">
                    <a>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 22.621l-3.521-6.795c-.008.004-1.974.97-2.064 1.011-2.24 1.086-6.799-7.82-4.609-8.994l2.083-1.026-3.493-6.817-2.106 1.039c-7.202 3.755 4.233 25.982 11.6 22.615.121-.055 2.102-1.029 2.11-1.033z"/></svg>
                        {{ data?.fields.phonenumber }}
                    </a>
                    <a>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z"/></svg>
                        {{ data?.fields.email }}

                    </a>
                    <NuxtLink :to="data?.fields.googleMapLocation" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 14c-3.314 0-6-2.686-6-6s2.686-6 6-6 6 2.686 6 6-2.686 6-6 6z"/></svg>
                        {{ data?.fields.address }}

                    </NuxtLink>
                    <a style="cursor: default;">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm7 14h-8v-9h2v7h6v2z"/></svg>
                        {{ data?.fields.timeOpen }}
                    </a>
                </div>
                <div class="default-footer-socialmedia">
                    <div class="flex">
                        <NuxtLink :to="data?.fields.facebook" target="_blank"><img src="~/assets/img/icon/facebook.png" alt="facebook"></NuxtLink>
                        <NuxtLink :to="data?.fields.instagram" target="_blank"><img src="~/assets/img/icon/instagram.png" alt="instagram"></NuxtLink>
                    </div>
                </div>
            </div>
            <div class="map">
                <iframe width="350" height="200" style="border:0; border-radius: 15px;" loading="lazy" allowfullscreen
                src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJFxQouCj7WUYRUunvJ8ekoAA&key=AIzaSyBdYU-_GH0crB5ube-EjjEYx404dDpSntc&zoom=13" title="google maps"></iframe>
            </div>
        </div>
    </footer>
</template>


<script setup lang="ts">
  import type { FooterType } from "~/plugin/contentful";
  import { getData } from "~/plugin/contentful";

  const entry = await getData<FooterType>("footer")
  .then(res => res.items.map(item => {
        if(item.fields.singletonID === 1) {
            return item;
        }
  }));

  const data = entry.find((i: any) => i.fields.singletonID === 1);

</script>

<style>
    .default-footer {
        position: relative;
        display: flex;
        flex-direction: row;

        color: hsl(var(--clr-neutral-50));
        background-color: hsl(var(--clr-surface-container));


        padding: 2em 0;
    }
    .default-footer a { width: 100px; }
    .default-footer a .logo { width: 100px;}
    
    .default-footer .container {
        flex-direction: row;
        justify-content: space-between;

        padding: 0 32px;

        width: 100%;
        margin: 0 auto;
    }

    .default-footer .container > .default-footer-info  {
        display: flex;
        flex-direction: column;
        gap: 20px;

        width: 100%;
    }

    .default-footer .container .default-footer-socialmedia a {
        display: block;
        width: 42px;
    }
    .default-footer .container > .default-footer-info > a > img { width: 100%; }
    
    .default-footer .container > .default-footer-info > .contact {
        position: relative;
        display: flex;
        flex-direction: column;
        gap: 20px;
        padding: 1em 0;
    }

    .default-footer .container > .default-footer-info > .logo { cursor: default; }

    .default-footer .container > .default-footer-info > .contact > a {
        display: flex;
        gap: 25px;
        width: fit-content;
        font-size: var(--fs-400);
        cursor: pointer;
        
        align-items: center;
    }

    .default-footer .container > .default-footer-info > .contact > a > svg {
        width: 20px;
        fill: hsl(var(--clr-primary));
    }

    .default-footer .container > .default-footer-info > .contact > a {
        text-decoration: none;
        color: hsl(var(--clr-surface-on));
    }

    .default-footer .container > .default-footer-info > .contact > a:nth-child(1):hover, 
    .default-footer .container > .default-footer-info > .contact > a:nth-child(2):hover,
    .default-footer .container > .default-footer-info > .contact > a:nth-child(3):hover {
        color: var(--clr-primary-60);
    }

    .default-footer .container > .default-footer-info > .default-footer-socialmedia {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 1em;
        min-width: 100%;
    }

    .default-footer .container > .default-footer-info > .default-footer-socialmedia > div > img {
        width: 30px;
        cursor: pointer;
    }

    .default-footer .container > .default-footer-info > .default-footer-socialmedia > span {
        width: fit-content;
        padding-right: 32px;
    } 

    .default-footer .container > .default-footer-info > .default-footer-socialmedia > span > a{
        color: hsl(var(--clr-primary));
    } 

    @media screen and (max-width: 1280px) {
        .default-footer {
            padding: 40px 50px;
        }
    }

    @media screen and (max-width: 1000px) { 
        .default-footer {
            padding: 40px 50px;
        } 
    }

    @media screen and (max-width: 730px) {
        .default-footer  .container {
            flex-direction: column;
            align-items: center;
            
            gap: 40px;
        }

        .default-footer > .map {
            display: flex;
            
            justify-content: center;
            width: 70%;
        }
    }


    @media screen and (max-width: 540px) { 
        .default-footer {
            padding: 40px 0px;
        } 

        iframe {
            max-width: 100%;
            width: 100%;
        }
    }
</style>