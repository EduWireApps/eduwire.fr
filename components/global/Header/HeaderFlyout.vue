<template>
  <div
    class="absolute top-[66px] left-0 right-0 bg-white border-t border-gray-300 shadow-md px-10 py-6"
  >
    <Container>
      <div class="flex">
        <div class="mb-6 mr-6 text-2xl font-bold text-gray-900 font-title">
          Applications
        </div>
        <div class="grid grid-cols-4 gap-8 ml-auto">
          <nuxt-link
            v-for="(e, i) in apps"
            :key="i"
            :to="e.url"
            class="flex items-center p-1 transition duration-150 ease-in-out border border-transparent rounded-lg hover:bg-gray-50 hover:border-gray-100 focus:outline-none"
          >
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
      alt: "Logo d'yNotes"
    },
    {
      url: "/apps/pronote-notifications",
      title: "Pronote notifications",
      description: "lorem ispum",
      image: "/pronote-notifications/logo.png",
      alt: "Logo de Pronote notifications"
    }
  ];
  hovered = null;
}
</script>
