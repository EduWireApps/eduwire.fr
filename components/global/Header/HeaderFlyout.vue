<template>
  <div
    class="absolute top-[66px] left-0 right-0 bg-white border-t border-gray-300 shadow-md px-10 py-6"
  >
    <Container>
      <div class="flex px-6">
        <div class="flex-1 mr-12">
          <div class="mb-6 text-2xl font-bold text-gray-900 font-title">
            Applications
          </div>
          <div class="grid gap-8">
            <nuxt-link
              v-for="(e, i) in apps"
              :key="i"
              :to="e.url"
              @mouseover.native="hovered = e"
              class="flex items-center p-2 -m-3 transition duration-150 ease-in-out border border-transparent rounded-lg hover:bg-gray-50 hover:border-gray-100 focus:outline-none"
            >
              <!-- @mouseleave.native="hovered = null" -->
              <div
                class="flex items-center justify-center flex-shrink-0 w-10 h-10 text-white sm:h-12 sm:w-12"
              >
                <div>
                  <img
                    :src="require(`~/assets/images${e.image}`)"
                    :alt="e.alt"
                    class="rounded-md"
                  />
                </div>
              </div>
              <div class="ml-4">
                <p class="text-base font-semibold text-gray-900">
                  {{ e.title }}
                </p>
                <p class="text-sm text-gray-500">
                  {{ e.description }}
                </p>
              </div>
            </nuxt-link>
          </div>
        </div>
        <transition
          enter-active-class="transition transform ease-out duration-200"
          enter-class="opacity-0 translate-x-1"
          enter-to-class="opacity-100 translate-x-0"
          leave-active-class="transition transform ease-in duration-150"
          leave-class="opacity-100 translate-x-0"
          leave-to-class="opacity-0 translate-x-1"
        >
          <div
            class="flex border-l border-gray-200 pl-4 py-2 rounded-lg"
            v-if="hovered !== null"
          >
            <div class="flex flex-col">
              <div
                class="font-bold mb-1 tracking-wide text-gray-900 uppercase font-title"
              >
                Télécharger
              </div>
              <div class="grid gap-2">
                <a
                  :href="hovered.stores.google"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center px-5 py-3 pr-12 transition-all bg-gray-600 rounded-lg shadow focus:outline-none whitespace-nowrap text-gray-50 hover:shadow-xl hover:text-white hover:bg-gray-800"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 512 512"
                    class="w-6 h-6"
                  >
                    <path
                      d="M99.617 8.057a50.191 50.191 0 00-38.815-6.713l230.932 230.933 74.846-74.846L99.617 8.057zM32.139 20.116c-6.441 8.563-10.148 19.077-10.148 30.199v411.358c0 11.123 3.708 21.636 10.148 30.199l235.877-235.877L32.139 20.116zM464.261 212.087l-67.266-37.637-81.544 81.544 81.548 81.548 67.273-37.64c16.117-9.03 25.738-25.442 25.738-43.908s-9.621-34.877-25.749-43.907zM291.733 279.711L60.815 510.629c3.786.891 7.639 1.371 11.492 1.371a50.275 50.275 0 0027.31-8.07l266.965-149.372-74.849-74.847z"
                    ></path>
                  </svg>
                  <span class="flex flex-col items-start ml-4 leading-none"
                    ><span class="mb-1 text-xs font-title">Disponible sur</span>
                    <span class="font-medium">Google Play</span></span
                  ></a
                >
                <a
                  :href="hovered.stores.apple"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center px-5 py-3 pr-12 transition-all bg-gray-600 rounded-lg shadow focus:outline-none whitespace-nowrap text-gray-50 hover:shadow-xl hover:text-white hover:bg-gray-800"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 305 305"
                    class="w-6 h-6"
                  >
                    <path
                      d="M40.74 112.12c-25.79 44.74-9.4 112.65 19.12 153.82C74.09 286.52 88.5 305 108.24 305c.37 0 .74 0 1.13-.02 9.27-.37 15.97-3.23 22.45-5.99 7.27-3.1 14.8-6.3 26.6-6.3 11.22 0 18.39 3.1 25.31 6.1 6.83 2.95 13.87 6 24.26 5.81 22.23-.41 35.88-20.35 47.92-37.94a168.18 168.18 0 0021-43l.09-.28a2.5 2.5 0 00-1.33-3.06l-.18-.08c-3.92-1.6-38.26-16.84-38.62-58.36-.34-33.74 25.76-51.6 31-54.84l.24-.15a2.5 2.5 0 00.7-3.51c-18-26.37-45.62-30.34-56.73-30.82a50.04 50.04 0 00-4.95-.24c-13.06 0-25.56 4.93-35.61 8.9-6.94 2.73-12.93 5.09-17.06 5.09-4.64 0-10.67-2.4-17.65-5.16-9.33-3.7-19.9-7.9-31.1-7.9l-.79.01c-26.03.38-50.62 15.27-64.18 38.86z"
                    ></path>
                    <path
                      d="M212.1 0c-15.76.64-34.67 10.35-45.97 23.58-9.6 11.13-19 29.68-16.52 48.38a2.5 2.5 0 002.29 2.17c1.06.08 2.15.12 3.23.12 15.41 0 32.04-8.52 43.4-22.25 11.94-14.5 17.99-33.1 16.16-49.77A2.52 2.52 0 00212.1 0z"
                    ></path>
                  </svg>
                  <span class="flex flex-col items-start ml-4 leading-none"
                    ><span class="mb-1 text-xs font-title">Disponible sur</span>
                    <span class="font-medium">App Store</span></span
                  >
                </a>
              </div>
            </div>
          </div>
        </transition>
      </div>
    </Container>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";

@Component
export default class HeaderFlyout extends Vue {
  apps = [
    {
      url: "/apps/ynotes",
      title: "yNotes",
      description: "lorem ipsum",
      image: "/ynotes/logo.png",
      alt: "Logo d'yNotes",
      stores: {
        google: "https://play.google.com/store/apps/details?id=fr.ynotes",
        apple: "https://apps.apple.com/fr/app/ynotes/id1563624059"
      }
    },
    {
      url: "/apps/pronote-notifications",
      title: "Pronote notifications",
      description: "lorem ispum",
      image: "/pronote-notifications/logo.png",
      alt: "Logo de Pronote notifications",
      stores: {
        google: "https://play.google.com/store/apps/details?id=fr.ynotes",
        apple: "https://apps.apple.com/fr/app/ynotes/id1563624059"
      }
    }
  ];
  hovered = null;
}
</script>
