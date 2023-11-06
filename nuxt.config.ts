// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  srcDir: "src/",

  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      htmlAttrs: {
        lang: 'sv',
        
      },
      title: "Rekond Demo",
      meta: [
        { name: "description", content: "Vi på Rekond utför allt från Rekondering till Ozonbehandling" }
      ]
    }
  },
})
