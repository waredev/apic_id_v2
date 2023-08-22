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
    { src: '~/plugins/v-particles.js', mode: 'client' },
    { src: '~/plugins/auth.js' }
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
          },
          'about/organization-structure': {
            id: '/tentang/struktur-organisasi',
            en: '/about/organization-structure',
          },
          'about/company-information': {
            id: '/tentang/informasi-perusahaan-dan-entitas-anak',
            en: '/about/company-and-subsidiary-entity-information',
          },
          'about/vision-and-mission': {
            id: '/tentang/visi-dan-misi',
            en: '/about/vision-and-mission',
          },
          'about/supporting-professional-institution': {
            id: '/tentang/lembaga-profesi-penunjang',
            en: '/about/supporting-professional-institution',
          },
          'about/award': {
            id: '/tentang/penghargaan',
            en: '/about/award',
          },
          'about/ownership-structure': {
            id: '/tentang/struktur-kepemilikan',
            en: '/about/ownership-structure',
          },


          // gcg
          'gcg/annual-report': {
            id: '/gcg/laporan-tahunan',
            en: '/gcg/annual-report',
          }
        }
      }
    ],
    '@nuxtjs/device',
    '@nuxtjs/axios'
  ],
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: 'http://192.168.8.116:1337',
  },

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
