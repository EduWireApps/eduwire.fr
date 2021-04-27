import { Component, Vue, Prop } from "nuxt-property-decorator";

@Component
export default class ButtonMixin extends Vue {
  @Prop({ type: Boolean, default: false }) readonly link!: boolean;
  @Prop({ type: String, default: "" }) readonly url!: string;
  @Prop({ type: Boolean, default: false }) readonly external!: boolean;
}
