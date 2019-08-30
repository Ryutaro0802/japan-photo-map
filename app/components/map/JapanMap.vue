<template>
  <div>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="1000 0 2900 6172.106"
    >
      <title>A Blank Map of Japan</title>

      <!--  Example 1: the standard meridian of Japan -->
      <!--
   <line x1="135" y1="20" x2="135" y2="50"
         stroke="#000000" stroke-width="0.01"
         transform="matrix( 156.3775, 0, 0, -193.6681,
                             -19002.869, 8981.693 )" />
      -->

      <!--  Example 2: plot Nagoya City with a text string -->
      <!--
      <defs>
           <text id="Nagoya_City"
            font-size="0.1" x="0" y="0"
            transform="matrix(1.238421,0,0,-1,0,0)">
           Nagoya
           </text>
      </defs>

      <use xlink:href="#Nagoya_City"
           x="136.906689" y="35.180342"
           transform="matrix( 156.3775, 0, 0, -193.6681,
                             -19002.869, 8981.693 )" />
      -->
      <template v-for="prefecture in prefectures">
        <template v-if="prefecture.name === 'okinawa'">
          <svg :key="prefecture.name" x="300" y="-500">
            <Prefecture
              :key="prefecture.name"
              :id="prefecture.name"
              :gone="japan[prefecture.name].gone"
              @onPrefectureClick="onPrefectureClick"
              :d="prefecture.d"
            />
          </svg>
        </template>
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
import prefectures from "~/static/prefectures.json"

@Component({
  components: {
    Prefecture
  }
})
export default class JapanMap extends Vue {
  private prefectures: any = prefectures

  @Prop()
  japan!: Japan;

  private onPrefectureClick({ prefecture }: any): void {
    this.$router.push(`/prefecture/${prefecture}`);
  }
}
</script>

