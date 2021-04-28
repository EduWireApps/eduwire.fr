<template>
  <div
    class="bg-gradient-to-br from-secondary-400 to-secondary-500 px-5 py-2 text-white font-semibold text-shadow-sm flex items-center justify-center"
  >
    <div class="flex items-center space-x-2">
      <div>{{ text }}</div>
      <nuxt-link
        :to="link"
        class="bg-secondary-600 rounded-full px-3 py-1 inline-flex items-center transition-colors hover:bg-secondary-700 space-x-1"
        ><span>En savoir plus</span
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 5l7 7-7 7"
          /></svg
      ></nuxt-link>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "nuxt-property-decorator";

@Component
export default class New extends Vue {
  @Prop() readonly text!: string;
  @Prop() readonly link!: string;
}
</script>
