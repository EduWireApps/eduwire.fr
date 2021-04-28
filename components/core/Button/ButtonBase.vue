<template>
  <component
    :is="link ? (external ? 'a' : 'nuxt-link') : 'button'"
    @click="!link ? $emit('click') : null"
    :to="link ? url : null"
    :href="link && external ? url : undefined"
    :target="external && link ? '_blank' : null"
    :rel="external && link ? 'noopener noreferrer' : null"
    class="focus:outline-none"
  >
    <slot />
  </component>
</template>

<script lang="ts">
import { Component } from "nuxt-property-decorator";
import ButtonMixin from "./mixin";

@Component
export default class ButtonBase extends ButtonMixin {}
</script>
