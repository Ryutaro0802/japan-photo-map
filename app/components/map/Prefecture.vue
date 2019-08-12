<template>
  <path
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
  private initialColor: string = 'white'
  private goneColor: string = 'red'
  private strokeColor: string = 'black'

  @Prop()
  id!: string;
  @Prop()
  gone!: boolean;
  @Prop()
  d!: string;

  get prefectureColor(): string {
      return this.gone ? this.goneColor : this.initialColor
  }
}
</script>
