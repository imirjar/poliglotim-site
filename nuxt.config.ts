// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-08-02',
  ssr: false,
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ["nuxt-icon", "@nuxt/image"],
  app: {
    baseURL: '/',
    buildAssetsDir: 'assets', // Изменяем стандартный '_nuxt' на 'assets'
    head: {
      title: 'Полиглотствуем', // Заголовок вкладки
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }
      ],
    },
  },
  
});
