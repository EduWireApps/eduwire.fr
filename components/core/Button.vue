<template>
  <div class="inline-flex rounded-lg shadow">
    <component
      :is="link ? 'a' : 'button'"
      @click="!link ? $emit('click') : null"
      :class="
        `${kindClasses} inline-flex items-center justify-center px-5 py-2 border border-transparent text-base font-medium rounded-lg text-white transition-colors`
      "
    >
      <slot />
    </component>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "nuxt-property-decorator";

const variants: Array<String> = ["primary", "secondary", "tertiary"];

@Component
export default class Button extends Vue {
  @Prop({ type: Boolean, default: false }) readonly link!: boolean;
  @Prop({
    type: String,
    default: "primary",
    validator: v => variants.includes(v)
  })
  readonly variant!: string;
  variants = variants;

  get kindClasses() {
    return {
      primary: "bg-primary-600 hover:bg-primary-500",
      secondary: "bg-secondary-500 hover:bg-secondary-400"
    }[this.variant];
  }
}
</script>

<style></style>
