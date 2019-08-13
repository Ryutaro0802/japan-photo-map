<template>
  <div id="loader"></div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";

@Component
export default class Loader extends Vue {}
</script>

<style scoped>
#loader {
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -10vmin;
  margin-top: -10vmin;
  height: 20vmin;
  width: 20vmin;
  border-radius: 50%;
  border: 1vmin solid #576ca8;
  border-top-color: #274690;
  animation: spin .8s infinite linear;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
