// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: { lang: "pt-BR" },
      title: "Doguia",
      link: [
        { rel: "icon", href: "./favicon.ico" },
        {
          rel: "apple-touch-icon",
          href: "./apple-touch-icon.png",
          sizes: "180x180"
        }
      ],
      meta: [
        {
          "http-equiv": "Content-Security-Policy",
          content: "upgrade-insecure-requests"
        },
        {
          name: "description",
          content: "Doguia é um guia de características sobre raças de cães."
        },
        { name: "theme-color", content: "#1C1917" }
      ]
    }
  },

  runtimeConfig: {
    public: {
      apiKey: process.env.API_KEY
    }
  },

  devtools: { enabled: true },

  modules: [
    "@vueuse/nuxt",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts",
    "@nuxt/image",
    "@nuxt/devtools",
    "nuxt-icon",
    "@vite-pwa/nuxt"
  ],

  pwa: {
    injectRegister: "auto",
    registerType: "autoUpdate",
    devOptions: { enabled: true },
    workbox: {
      globPatterns: ["**/*.{js,css,html,ico,png,svg}"]
    },
    manifest: {
      name: "Doguia",
      short_name: "Doguia",
      description: "Doguia é um guia de características sobre raças de cães.",
      theme_color: "#1C1917",
      icons: [
        {
          src: "./pwa-192x192.png",
          sizes: "192x192",
          type: "image/png"
        },
        {
          src: "./pwa-384x384.png",
          sizes: "384x384",
          type: "image/png"
        }
      ]
    }
  },

  googleFonts: {
    prefetch: true,
    preconnect: true,
    preload: true,
    families: {
      Inter: {
        wght: [400, 500, 600]
      }
    }
  }
});
