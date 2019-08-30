<template>
  <path
    @click="onPrefectureClick(id)"
    :id="id"
    :fill="prefectureColor"
    :stroke="strokeColor"
    stroke-width="1"
    :d="d"
  />
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";

@Component
export default class Prefecture extends Vue {
  private initialColor: string = "white";
  private goneColor: string = "skyblue";
  private strokeColor: string = "black";

  @Prop()
  id!: string;
  @Prop({ default: false })
  gone!: boolean;
  @Prop()
  d!: string;

  private onPrefectureClick(id: string): void {
    this.$emit("onPrefectureClick", { prefecture: id });
  }

  get prefectureColor(): string {
    return this.gone ? this.goneColor : this.initialColor;
  }
}
</script>

<style>
  path {
    cursor: pointer;
  }
</style>
