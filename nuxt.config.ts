export default defineNuxtConfig({
  devtools: { enabled: false },
  telemetry: { enabled: false },
  app: {
    head: {
      htmlAttrs: { lang: "ru" },
      titleTemplate: "MIKU",
      meta: [
        { charset: "utf-8" },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1, user-scalable=no",
        },
        { "http-equiv": "Content-Type", content: "text/html; charset=UTF-8" },
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        { rel: "mask-icon", href: "/favicon.svg" },
      ],
    },
  },
  devServer: {
    host: "0.0.0.0",
    port: 8000,
  },
  experimental: {
    defaults: {
      nuxtLink: {
        trailingSlash: "append",
      },
    },
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "/assets/styles/main.scss" as *;',
        },
      },
    },
  },
  postcss: {
    plugins: {
      autoprefixer: {},
    },
  },
  compatibilityDate: "2025-08-02",
});
