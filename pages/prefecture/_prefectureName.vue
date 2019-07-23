<template>
  <section>
    <h2 class="heading">{{ prefectureKanaName }}</h2>
    <button @click.prevent="photoUpload">Upload</button>

    <Column>
      <ColumnItem>
        <img src="https://dummyimage.com/200x200/adadad/fff" alt />
      </ColumnItem>
      <ColumnItem>
        <img src="https://dummyimage.com/200x200/adadad/fff" alt />
      </ColumnItem>
    </Column>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import { State } from "vuex-class";
import Column from "~/components/column/Column.vue";
import ColumnItem from "~/components/column/ColumnItem.vue";

@Component({
  components: {
    Column,
    ColumnItem
  }
})
export default class extends Vue {
  validate({ params }: { params: any }): boolean {
    return /^\w+$/.test(params.prefectureName);
  }

  get prefectureKanaName(): string {
    const prefectureRomaName = this.$route.params.prefectureName;
    switch (prefectureRomaName) {
      case "hokkaido":
        return "北海道";
        break;
      case "aomori":
        return "青森県";
        break;
      default:
        return "";
    }
  }

  photoUpload() {
    console.log("upload");
  }
}
</script>

<style scoped>
.heading {
  color: white;
}
</style>
