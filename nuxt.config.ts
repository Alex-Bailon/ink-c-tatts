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
        { name: 'theme-color', content: '#000000' },
        { name: 'description', content: 'Ink.C.Tatts is a tattoo shop located in the Chicagoland area' },
        { property: 'og:title', content: 'Ink.C.Tatts' },
        { property: 'og:description', content: 'Ink.C.Tatts is a tattoo shop located in the Chicagoland area' },
        { property: 'og:image', content: 'https://ink-c-tatts.netlify.app/logo.webp' },
        { property: 'og:url', content: 'https://ink-c-tatts.netlify.app/' },
        { property: 'og:type', content: 'website' }
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/logo.webp' }
      ]
    },
    pageTransition: {
      name: 'page',
      mode: 'out-in'
    }    
  },
  modules: ['@nuxtjs/tailwindcss'],
  runtimeConfig: {
    public: {
      firebase: {
        apiKey: process.env.FIREBASE_API_KEY,
        projectId: process.env.FIREBASE_PROJECT_ID,
        messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
        appId: process.env.FIREBASE_APP_ID,
        measurementId: process.env.FIREBASE_MEASUREMENT_ID
      },
      googleRecaptchaSiteKey: process.env.GOOGLE_RECAPTCHA_SITE_KEY
    }
  }
})
