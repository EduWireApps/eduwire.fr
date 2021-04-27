import { NuxtConfig } from "@nuxt/types";

const config: NuxtConfig = {
  head: {
    title: "nuxt-typescript-tailwindcss-template",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  plugins: [],
  // components: true,
  components: [{ path: "~/components", pathPrefix: false }],
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    "@nuxt/typescript-build",
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts"
  ],
  modules: [],
  tailwindcss: {
    exposeConfig: true,
    jit: true,
    viewer: false
  },
  googleFonts: {
    families: {
      "Nunito Sans": [100, 200, 300, 400, 500, 600, 700, 800, 900],
      "Josefin Sans": [100, 200, 300, 400, 500, 600, 700, 800, 900]
    }
  }
};

export default config;
