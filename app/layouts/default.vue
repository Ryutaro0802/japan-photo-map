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
import { Component, Prop, Vue } from "nuxt-property-decorator";
import Loader from "~/components/loader/Loader.vue";

@Component({
  middleware: 'authenticated',
  components: {
    Loader
  }
})
export default class Default extends Vue {
  @Getter("loaded") loaded!: boolean;
  @Getter("loggedIn") loggedIn!: boolean;
  @Action("signOut") signOut: any;

  private onSignOut () {
    this.signOut();
    this.$router.push('/login')
  }
}
</script>

<style scoped>
h1 a {
  color: white;
}
</style>
