import { VueReCaptcha } from 'vue-recaptcha-v3'
import { useRuntimeConfig, defineNuxtPlugin } from '#app'

export default defineNuxtPlugin((nuxtApp) => {
	const {
		public: { googleRecaptchaSiteKey },
	} = useRuntimeConfig()

	nuxtApp.vueApp.use(VueReCaptcha, {
		siteKey: googleRecaptchaSiteKey,
		loaderOptions: {
			useRecaptchaNet: true,
			autoHideBadge: true,
		},
	})
})