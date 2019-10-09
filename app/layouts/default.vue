<template>
  <div class="wrapper">
    <div v-show="loaded">
      <header>
        <div class="header-l">
          <h1>
            <nuxt-link to="/">Japan Photo Map</nuxt-link>
          </h1>
        </div>
        <div class="header-r">
          <!-- <Button tag-name="button">
            Logout
          </Button> -->
          <p v-if="loggedIn">
            <a href="#" @click="onSignOut">Logout</a>
          </p>
        </div>
      </header>
      <main>
        <nuxt />
      </main>
    </div>

    <div v-if="!loaded">
      <Loader />
    </div>
  </div>
</template>

<script lang="ts">
import { Action, Getter } from "vuex-class";
import { Component, Prop, Vue } from "nuxt-property-decorator";
import Loader from "~/components/loader/Loader.vue";
import Button from '~/components/button/Button.vue';

@Component({
  middleware: "authenticated",
  components: {
    Loader,
    Button
  }
})
export default class Default extends Vue {
  @Getter("loaded") loaded!: boolean;
  @Getter("loggedIn") loggedIn!: boolean;
  @Action("signOut") signOut: any;

  private onSignOut() {
    this.signOut();
    this.$router.push("/login");
  }
}
</script>

<style scoped>
.wrapper {
  padding: 15px;
}
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
}
h1 {
  font-size: 25px;
}
h1 a {
  color: white;
}
</style>
