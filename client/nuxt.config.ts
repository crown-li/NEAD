export default defineNuxtConfig({
  modules: [
    '@element-plus/nuxt'
  ],
  runtimeConfig: {
    public: {
      apiBase: 'http://localhost:8000'
    }
  }
})