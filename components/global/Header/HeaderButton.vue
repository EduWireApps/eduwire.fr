<template>
  <ButtonBase
    :link="link"
    :url="url"
    :external="external"
    v-on:click="$emit('click')"
    class="px-3 py-1.5 text-lg font-semibold inline-flex items-center space-x-1 text-gray-700 hover:text-gray-900 bg-white hover:bg-gray-50 rounded-xl border border-transparent hover:border-gray-100"
    ><slot
  /></ButtonBase>
</template>

<script lang="ts">
import { Component } from "nuxt-property-decorator";
import ButtonMixin from "~/components/core/Button/mixin";

@Component
export default class HeaderButton extends ButtonMixin {}
</script>
