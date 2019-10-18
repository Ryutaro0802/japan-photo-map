<template>
  <component class="button" :is="tagName" @click="$emit('click', $event)">
    <slot />
  </component>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "nuxt-property-decorator";

@Component
export default class Button extends Vue {
  @Prop({ default: "button" })
  tagName!: "button" | "a" | "input" | "nuxt-link";
  @Prop()
  type!: string;
  @Prop()
  loading!: boolean;
}
</script>

<style scoped>
.button {
  background-color: #325994;
  white-space: nowrap;
  padding: calc(.375em - 1px) .75em;
  border-radius: 3px;
  color: white;
  justify-content: center;
}
</style>
