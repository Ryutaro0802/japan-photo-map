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
import { State, Action, Getter, Mutation } from "vuex-class";
import { Person } from "~/types";
import JapanMap from "~/components/JapanMap.vue";
import auth from "~/plugins/auth";

@Component({
  components: {
    JapanMap
  }
})
export default class IndexPage extends Vue {
  @Getter loggedIn!: boolean;
  @Mutation setUser: any;
  @Action callAuth: any;
  @Action("signOut") signOut: any;

  async created() {
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
