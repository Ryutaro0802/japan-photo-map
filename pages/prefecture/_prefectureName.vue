<template>
  <section>
    <h1 class="heading">
      {{ prefectureKanaName }}
    </h1>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator"
import { State } from "vuex-class"

@Component({
  components: {}
})
export default class extends Vue {
  validate({ params }: { params: any }): boolean {
    return /^\w+$/.test(params.prefectureName)
  }
  // created() {
    // console.log(this.$route.params.prefectureName)
  // }
  get prefectureKanaName(): string {
    switch (this.$route.params.prefectureName) {
      case "hokkaido":
        return "北海道"
        break
      default:
        return ""
    }
  }
}
</script>

<style scoped>
.heading {
  color: white;
}
</style>
