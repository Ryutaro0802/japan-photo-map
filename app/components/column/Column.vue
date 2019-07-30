<template>
  <div class="column">
    <slot />
  </div>
</template>

<script lang="ts">
import {
  Component,
  Prop,
  Vue
} from "nuxt-property-decorator"

@Component({})
export default class Column extends Vue {}
</script>

<style scoped>
.column {
  display: flex;
  flex-wrap: wrap;
  margin: -5px;
}
</style>


