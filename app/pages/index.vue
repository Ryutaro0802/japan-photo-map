<template>
  <section>
    <div v-if="loggedIn && japan !== null">
      <JapanMap :japan="japan" />
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import { State, Action, Getter, Mutation, namespace } from "vuex-class";
import JapanMap from "~/components/map/JapanMap.vue";
import auth from "~/plugins/auth";
import { Japan } from "~/types";

@Component({
  components: {
    JapanMap
  }
})
export default class IndexPage extends Vue {
  @Getter("loggedIn") loggedIn!: boolean;
  @Getter("japan/japan") japan!: Japan | null;
}
</script>

<style scoped>
.header {
  color: white;
}
</style>
