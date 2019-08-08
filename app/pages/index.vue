<template>
  <section>
    <div v-if="loggedIn">
      <JapanMap prefectureColor="#ffffff" />
    </div>
    <div v-else>
      <button type="button" @click="callAuth">login</button>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import { State, Action, Getter, Mutation, namespace } from "vuex-class";
import { Person } from "~/types";
import JapanMap from "~/components/JapanMap.vue";
import auth from "~/plugins/auth";
import * as japan from "~/store/japan";

const Japan = namespace(japan.name);

@Component({
  components: {
    JapanMap
  }
})
export default class IndexPage extends Vue {
  @Getter loggedIn!: boolean;
  @Mutation setUser: any;
  @Action callAuth: any;
  @Japan.Action bindJapanRef: any;
  @Action("signOut") signOut: any;

  async created() {
    this.bindJapanRef()
    let user: any = null;
    if (!this.loggedIn) {
      user = await auth();
      this.setUser({ user });
    }
  }
}
</script>

<style scoped>
.header {
  color: white;
}
</style>
