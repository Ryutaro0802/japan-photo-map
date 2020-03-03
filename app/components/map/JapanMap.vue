<template>
  <div class="map-wrapper">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="1000 0 2900 6172.106"
      class="map-root"
    >
      <title>A Blank Map of Japan</title>
      <template v-for="prefecture in prefectures">
        <svg v-if="prefecture.name === 'okinawa'" :key="prefecture.name" x="300" y="-500">
          <Prefecture
            :key="prefecture.name"
            :id="prefecture.name"
            :gone="japan[prefecture.name].gone"
            @onPrefectureClick="onPrefectureClick"
            :d="prefecture.d"
          />
        </svg>
        <Prefecture
          v-else
          :key="prefecture.name"
          :id="prefecture.name"
          :gone="japan[prefecture.name].gone"
          @onPrefectureClick="onPrefectureClick"
          :d="prefecture.d"
        />
      </template>
    </svg>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";
import Prefecture from "~/components/map/Prefecture.vue";
import { Japan } from "~/types";
import prefectures from "~/static/prefectures.json";

@Component({
  components: {
    Prefecture
  }
})
export default class JapanMap extends Vue {
  prefectures = prefectures;

  @Prop()
  japan!: Japan;

  private onPrefectureClick({ prefecture }: any): void {
    this.$router.push(`/prefecture/${prefecture}`);
  }
}
</script>

<style>
.map-wrapper {
  text-align: center;
}
.map-root {
  max-width: 800px;
}
</style>