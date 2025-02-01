// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      title: 'Ink.C.Tatts',
      meta: [
        { charset: 'UTF-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
        { name: 'description', content: 'Ink.C.Tatts is a tattoo shop located in the Chicagoland area' },
        { property: 'og:title', content: 'Ink.C.Tatts' },
        { property: 'og:description', content: 'Ink.C.Tatts is a tattoo shop located in the Chicagoland area' },
        { property: 'og:image', content: 'https://ink-c-tatts.netlify.app/logo-white.png' },
        { property: 'og:url', content: 'https://ink-c-tatts.netlify.app/' },
        { property: 'og:type', content: 'website' }
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/logo.png' }
      ]
    }
  },
  modules: ['@nuxtjs/tailwindcss']
})
