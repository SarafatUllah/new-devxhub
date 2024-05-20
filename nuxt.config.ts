// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "Software Development Company",
      titleTemplate: "%s | DEVxHUB",
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'keywords', content: process.env.META_KEYWORDS },
        {
          name: "theme-color",
          content: "#FDB21D",
        },
        {
          name: 'description',
          content:
            'DEVxHUB is one of the best Software, Web, and Mobile Application Development Outsourcing Companies in Asia, Bangladesh leading globally. We help to transform your idea into a digital business.',
        },
        // {
        //   key: "og:title",
        //   property: "og:title",
        //   content: "Developer Experience Hub",
        // },
        // {
        //   key: "og:description",
        //   property: "og:description",
        //   content:
        //     "DEVxHUB is one of the best Software, Web, and Mobile Application Development Outsourcing Companies in Asia, Bangladesh leading globally. We help to transform your idea into a digital business.",
        // },
        // {
        //   key: "og:url",
        //   property: "og:url",
        //   content: process.env.NUXT_PUBLIC_SITE_URL,
        // },
        {
          key: "og:image",
          property: "og:image",
          content: `${process.env.NUXT_PUBLIC_SITE_URL}/new-logo.png`,
        },
        // { key: "og:type", property: "og:type", content: "website" },
        // Twitter Card meta tags
        // { key: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
        // { key: 'twitter:site', name: 'twitter:site', content: '@devxhub' },
        // { key: 'twitter:title', name: 'twitter:title', content: 'Software Development Company' },
        // { key: 'twitter:description', name: 'twitter:description', content: 'DEVxHUB is one of the best Software, Web, and Mobile Application Development Outsourcing Companies in Asia, Bangladesh leading globally. We help to transform your idea into a digital business.' },
        // { key: 'twitter:image', name: 'twitter:image', content: `${process.env.NUXT_PUBLIC_SITE_URL}/new-logo.png` },
        { "http-equiv": "cache-control", content: "no-cache" },
        { "http-equiv": "expires", content: "0" },
        { "http-equiv": "pragma", content: "no-cache" },
      ],
      link: [
        {
          rel: "icon",
          type: "image/ico",
          href: "/favicon.ico",
        },
        // {
        //   rel: "apple-touch-icon",
        //   href: "/apple-touch-icon.png",
        //   sizes: "180x180",
        // },
        // {
        //   rel: "mask-icon",
        //   href: "/maskable-icon-512x512.png",
        //   color: "#FDB21D",
        // },
        // {
        //   key: "canonical",
        //   rel: "canonical",
        //   href: process.env.NUXT_PUBLIC_SITE_URL,
        // },
      ],
    },
    pageTransition: { name: "page", mode: "out-in" },
  },
  runtimeConfig: {
    apiUrl: process.env.NUXT_API_URL,

    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL,
      apiUrl: process.env.NUXT_PUBLIC_API_URL,
      sentryDns: process.env.NUXT_PUBLIC_SENTRY_DSN,
      workflow: process.env.NUXT_PUBLIC_WORKFLOW,
    },
  },
  devtools: { enabled: true },

  css: [
    "@/assets/css/tailwind.css",
    "@fortawesome/fontawesome-svg-core/styles.css",
  ],

  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts",
    // "@nuxtjs/robots",
    "@pinia/nuxt",
    "@vueuse/nuxt",
    "nuxt-gtag",
    // "@vite-pwa/nuxt",
    // "nuxt-simple-sitemap",
    "@nuxtjs/seo",
  ],

  gtag: {
    id: process.env.NUXT_PUBLIC_GTAG_ID,
  },

  // routeRules: {
  //   "**": {
  //     swr: 60 * 60,
  //     cache: {
  //       base: 'redis'
  //     }
  //   },
  // },

  nitro: {
    // preset: process.env.NITRO_PRESET || "node-cluster",
    storage: {
      cache: {
        driver: "redis",
        url: process.env.NUXT_PUBLIC_REDIS_URL,
      },
    },
    devStorage: {
      cache: {
        driver: "fs",
        base: "./data/cache",
      },
    },
  },

  googleFonts: {
    families: {
      Roboto: true,
    },
  },

  // pwa: {
  //   registerType: "autoUpdate",
  //   includeAssets: [
  //     "favicon.ico",
  //     "apple-touch-icon.png",
  //     "maskable-icon-512x512.png",
  //   ],
  //   manifest: {
  //     name: "Developer Experience Hub",
  //     short_name: "DEVxHUB",
  //     description:
  //       "A top-tier web design, and development company in the world",
  //     theme_color: "#FDB21D",
  //     icons: [
  //       {
  //         src: "pwa-192x192.png",
  //         sizes: "192x192",
  //         type: "image/png",
  //       },
  //       {
  //         src: "pwa-512x512.png",
  //         sizes: "512x512",
  //         type: "image/png",
  //       },
  //       {
  //         src: "pwa-512x512.png",
  //         sizes: "512x512",
  //         type: "image/png",
  //         purpose: "any",
  //       },
  //       {
  //         src: "maskable-icon-512x512.png",
  //         sizes: "512x512",
  //         type: "image/png",
  //         purpose: "maskable",
  //       },
  //     ],
  //   },
  //   workbox: {
  //     navigateFallback: "/",
  //     globPatterns: ["**/*.{js,css,html,png,svg,ico}"],
  //   },
  //   devOptions: {
  //     enabled: process.env.NUXT_PUBLIC_PWA_ENABLED ? true : false,
  //     suppressWarnings: true,
  //     navigateFallbackAllowlist: [/^\/$/],
  //     type: "module",
  //   },
  // },
});