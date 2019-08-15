<template>
  <div>
    <h1 class="header">
      <nuxt-link to="/">Photo Map</nuxt-link>
    </h1>
    <div v-if="!loaded">
      <Loader />
    </div>
    <div v-show="loaded">
      <button v-if="loggedIn" type="button" @click="onSignOut">logout</button>
      <nuxt />
    </div>
  </div>
</template>

<script lang="ts">
import { Action, Getter } from "vuex-class";
import { Component, Prop, Vue, Mutation } from "nuxt-property-decorator";
import auth from "~/plugins/auth";
import Loader from "~/components/loader/Loader.vue";

@Component({
  middleware: "authenticated",
  components: {
    Loader
  }
})
export default class Default extends Vue {
  @Getter("loaded") loaded!: boolean;
  @Getter("loggedIn") loggedIn!: boolean;
  @Action("signOut") signOut: any;
  @Mutation("setLoaded") setLoaded: any;
  @Mutation("setUser") setUser: any;
  @Action("japan/bindJapanRef") bindJapanRef: any;
  @Action("japan/initializeJapan") initializeJapan: any;

  async created() {
    let user: any = null;
    this.setLoaded({ loaded: false });
    if (!this.loggedIn) {
      user = await auth();
      this.setUser({ user });
      return;
    }
    await this.bindJapanRef();
    await this.initializeJapan();
    this.setLoaded({ loaded: true });
  }

  private onSignOut() {
    this.signOut();
    this.$router.push("/login");
  }
}
</script>

<style scoped>
h1 a {
  color: white;
}
</style>
