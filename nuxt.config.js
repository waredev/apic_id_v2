export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'apic-site',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/main.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/v-particles.js', mode: 'client' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    [
      'nuxt-i18n', {
        locales: [
          {
            name: 'Indonesia',
            code: 'id',
            iso: 'id-ID',
            file: 'id-ID.js'
          },
          {
            name: 'English',
            code: 'en',
            iso: 'en-US',
            file: 'en-US.js'
          },
        ],
        langDir: 'lang/',
        defaultLocale: 'id',
        parsePages: false,
        pages: {
          'contact-us': {
            id: '/kontak-kami',
            en: '/contact-us'
          },
          'about/commissioners-profile': {
            id: '/tentang/profil-dewan-komisaris',
            en: '/about/commissioners-profile',
          },
          'about/directors-profile': {
            id: '/tentang/profil-direksi',
            en: '/about/directors-profile',
          }
        }
      }
    ],
    '@nuxtjs/device'
  ],
  server: {     
    port: 3000, // default: 3000     
    host: '0.0.0.0', // default: localhost   
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
    transpile: ['particles-bg-vue']
  },
  generate: {
    fallback: true
  },
  target: 'static'
}
