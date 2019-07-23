<template>
  <section>
    <h1 class="heading">北海道</h1>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator"
import { State } from "vuex-class"

@Component({
  components: {}
})
export default class extends Vue {

  async created() {
  }
}
</script>

<style scoped>
.heading {
  color: white;
}

</style>
