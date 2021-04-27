<template>
  <ButtonBase
    :link="link"
    :url="url"
    :external="external"
    v-on:click="$emit('click')"
    :class="
      `${variantClasses} ${sizeClasses} ${
        noShadow ? '' : 'hover:shadow-lg shadow'
      } ${
        noBorder ? '' : 'border'
      } inline-flex items-center justify-center font-titlet border-transparent transition-all tracking-wide space-x-1.5`
    "
    ><slot
  /></ButtonBase>
</template>

<script lang="ts">
import { Component, Prop } from "nuxt-property-decorator";
import ButtonMixin from "./mixin";

const variants: Array<String> = ["primary", "secondary", "tertiary", "custom"];
const sizes: Array<String> = ["large", "medium", "small", "custom"];

@Component
export default class Button extends ButtonMixin {
  @Prop({
    type: String,
    default: variants[0],
    validator: v => variants.includes(v)
  })
  readonly variant!: string;
  @Prop({ type: String, default: sizes[1] }) readonly size!: string;
  @Prop({ type: Boolean, default: false }) readonly noShadow!: boolean;
  @Prop({ type: Boolean, default: false }) readonly noBorder!: boolean;

  variants = variants;
  sizes = sizes;

  get variantClasses() {
    return {
      primary: "bg-primary-500 hover:bg-primary-400 text-white text-shadow-sm",
      secondary:
        "bg-secondary-500 hover:bg-secondary-400 text-white text-shadow-sm",
      tertiary: "bg-white text-gray-700 border-gray-100 hover:text-gray-600",
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
