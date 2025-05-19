export default defineNuxtConfig({
  app: {
    head: {
      title: 'Mayu',
      viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
      charset: 'utf-8',
    },
  },
  imports: {
    dirs: [
      '~/types/**',
    ],
  },
  css: [
    '~/assets/css/main.scss',
  ],
  modules: [
    '@unocss/nuxt',
    '@nuxtjs/color-mode',
    '@pinia/nuxt',
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
