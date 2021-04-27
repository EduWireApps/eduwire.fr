<template>
  <ButtonBase :link="link" :url="url" :external="external" class="px-3 py-1.5 text-lg font-semibold inline-flex items-center space-x-2 bg-white hover:bg-gray-50 rounded-xl"
    ><slot
  /></ButtonBase>
</template>

<script lang="ts">
import { Component } from "nuxt-property-decorator";
import ButtonMixin from "~/components/core/Button/mixin";

@Component
export default class HeaderButton extends ButtonMixin {}
</script>
