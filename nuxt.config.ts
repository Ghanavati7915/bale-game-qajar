// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    // baseURL:'/testGame/',
    head: {
      title: 'روزی روزگاری ایران - قاجار',
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      link: [
        { rel: "icon", type: "image/png", href: "/favicon.ico" },
        { rel: "apple-touch-icon", href: "/favicon.ico" },
        { rel: "apple-touch-startup-image", href: "/favicon.ico" },
      ],
      meta: [
        { name: 'description', content: 'روزی روزگاری ایران - قاجار' },
        { hid: "version", name: "version", content: "0.1" },
        { name: "HandheldFriendly", content: "true" },
      ],
      script: [
        {
          src: 'https://tapi.bale.ai/miniapp.js?1',
        }
      ],
    },
    pageTransition: { name: "page", mode: "out-in" },
    layoutTransition: { name: "layout", mode: "out-in" },
  },
  css: [
    '@/public/css/font.css',
    '@/public/css/main.css',
  ],
  plugins: ['~/plugins/bootstrap.ts'],
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  ssr: false, // حالت SPA برای GitHub Pages
  modules: ['@nuxtjs/tailwindcss'],
});
