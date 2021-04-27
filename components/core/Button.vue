<template>
  <component
    :is="link ? (external ? 'a' : 'nuxt-link') : 'button'"
    @click="!link ? $emit('click') : null"
    :to="link ? url : null"
    :href="link || external ? url : null"
    :target="external || link ? '_blank' : null"
    :rel="external || link ? 'noopener noreferrer' : null"
    :class="
      `${variantClasses} ${sizeClasses} inline-flex items-center justify-center font-title border border-transparent transition-all tracking-wide focus:outline-none hover:shadow-lg shadow`
    "
  >
    <slot />
  </component>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "nuxt-property-decorator";

const variants: Array<String> = ["primary", "secondary", "tertiary", "custom"];
const sizes: Array<String> = ["large", "medium", "small", "custom"];

@Component
export default class Button extends Vue {
  @Prop({ type: Boolean, default: false }) readonly link!: boolean;
  @Prop({
    type: String,
    default: variants[0],
    validator: v => variants.includes(v)
  })
  readonly variant!: string;
  @Prop({ type: String, default: "" }) readonly url!: string;
  @Prop({ type: String, default: sizes[1] }) readonly size!: string;
  @Prop({ type: Boolean, default: false }) readonly external!: boolean;

  variants = variants;
  sizes = sizes;

  get variantClasses() {
    return {
      primary: "bg-primary-500 hover:bg-primary-400 text-white text-shadow-sm",
      secondary:
        "bg-secondary-500 hover:bg-secondary-400 text-white text-shadow-sm",
      tertiary: "bg-white text-gray-700 border-gray-100",
      custom: ""
    }[this.variant];
  }

  get sizeClasses() {
    return {
      large: "px-6 py-2 text-xl font-bold rounded-xl",
      medium: "px-5 py-1.5 text-lg font-semibold rounded-xl",
      small: "px-3 py-1 text-base font-medium rounded-md",
      custom: ""
    }[this.size];
  }
}
</script>

<style></style>
