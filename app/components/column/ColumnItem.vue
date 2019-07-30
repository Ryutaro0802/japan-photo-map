<template>
  <div class="columnItem">
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
export default class ColumnItem extends Vue {}
</script>

<style scoped>
.columnItem {
  padding: 5px;
}
</style>
