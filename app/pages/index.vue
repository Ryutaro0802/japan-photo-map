<template>
  <section>
    <div v-if="loggedIn && mapInitialized">
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
  @Getter("japan/initialized") mapInitialized!: boolean;
  @Mutation("setUser") setUser: any;
  @Mutation("setLoaded") setLoaded: any;
  @Action("callAuth") callAuth: any;
  @Action("signOut") signOut: any;
  @Action("japan/bindJapanRef") bindJapanRef!: () => Promise<void>;
  @Action("japan/initializeJapan") initializeJapan: any;

  async created() {
    let user: any = null;
    this.setLoaded({ loaded: false });
    if (!this.loggedIn) {
      user = await auth();
      this.setUser({ user });
      return;
    }
    if (!this.mapInitialized) {
      await this.bindJapanRef();
      await this.initializeJapan();
    }
    this.setLoaded({ loaded: true });
  }
}
</script>

<style scoped>
.header {
  color: white;
}
</style>
