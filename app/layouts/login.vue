<template>
  <div>
    <div v-if="!loaded">
      <Loader />
    </div>
    <div v-show="loaded">
      <nuxt />
    </div>
  </div>
</template>

<script lang="ts">
import { Getter } from "vuex-class";
import { Component, Prop, Vue } from "nuxt-property-decorator";
import Loader from "~/components/loader/Loader.vue";

@Component({
  components: {
    Loader
  }
})
export default class Default extends Vue {
  @Getter("loaded") loaded!: boolean;
}
</script>

<style scoped></style>
