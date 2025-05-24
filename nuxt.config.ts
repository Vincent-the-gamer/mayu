export default defineNuxtConfig({
  nitro: {
    prerender: {
      autoSubfolderIndex: false,
    },
    externals: {
        inline: ['puppeteer-core']
    }
  },
  runtimeConfig: {
    /**
     * production: "prod"
     * deploy on vercel: "cloudflare"
     */
    env: 'cloudflare',
    baseUrl: 'your_api_deploy_location',
  },
  app: {
    head: {
      title: 'Mayu',
      viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
      charset: 'utf-8',
    },
  },
  css: [
    '~/assets/css/main.scss',
  ],
  modules: [
    '@unocss/nuxt',
    '@nuxtjs/color-mode',
    '@pinia/nuxt',
    'nuxt-shiki',
  ],
  pinia: {
    storesDirs: ['./store/**'],
  },
  compatibilityDate: '2024-11-16',
  logLevel: 'info',
  devServer: {
    port: 8080,
  },
  devtools: {
    enabled: true,
  },
  // Cross Origin
  routeRules: {
    '/**': {
      cors: true,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Request-Method': 'PUT,POST,GET,DELETE,OPTIONS',
      },
    },
  },
})
