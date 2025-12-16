// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-08-02',
  ssr: false,
  nitro: {
    // prerender: {
    //   routes: [
    //     '/_ipx/s_480x560/img/shop/murphy.png',
    //     '/_ipx/s_580x580/img/shop/chinese.png',
    //     '/_ipx/s_580x580/img/shop/french.png',
    //     // etc.
    //   ]
    // }
     preset: 'github-pages' // Специальный пресет для GitHub Pages
  },
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