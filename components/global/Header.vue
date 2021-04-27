<template>
  <div class="sticky top-0 bg-white shadow-md">
    <div class="flex items-center justify-between px-5 py-3">
      <nuxt-link to="/">
        <div
          class="w-10 h-10 rounded-lg bg-gradient-to-r from-primary-400 to-secondary-500 shadow"
        ></div>
      </nuxt-link>
      <div class="flex items-center space-x-2">
        <div>test</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";

@Component
export default class Header extends Vue {}
</script>

<style></style>
