<template>
  <section>
    <h1>Japan Photo Map</h1>
    <button type="button" @click="callAuth">login</button>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import { State, Action, Getter, Mutation, namespace } from "vuex-class";
import auth from "~/plugins/auth";

@Component({
  layout: 'login',
})
export default class LoginPage extends Vue {
  @Action("callAuth") callAuth: any;
  @Mutation("setUser") setUser: any;
  @Mutation("setLoaded") setLoaded: any;

  async created() {
    let user: any = null;
    user = await auth();
    if (user) {
      this.setUser({ user });
      this.$router.push('/')
    }
    this.setLoaded({ loaded: true });
  }
}
</script>

<style scoped></style>
