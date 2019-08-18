export default {
  env: {},
  mode: 'spa',
  head: {
    title: "japan-photo-map",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "Nuxt.js TypeScript project" }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" }
    ]
  },
  loading: { color: "#3B8070" },
  css: ["~/assets/css/reset.css", "~/assets/css/foundation.css", "~/assets/css/main.css"],
  plugins: ['~/plugins/prefectureNameTranslator.ts'],
  build: {},
  modules: [
    '@nuxtjs/pwa',
  ],
  axios: {}
}
