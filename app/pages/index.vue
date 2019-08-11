<template>
  <section>
    <div v-if="loggedIn">
      <button @click.prevent="test">test</button>
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
import { Japan } from "~/types";
import JapanMap from "~/components/JapanMap.vue";
import auth from "~/plugins/auth";

@Component({
  components: {
    JapanMap
  }
})
export default class IndexPage extends Vue {
  @Getter('loggedIn') loggedIn!: boolean;
  @Getter('japan/japan') japan!: Japan | null;
  @Mutation('setUser') setUser: any;
  @Action("callAuth") callAuth: any;
  @Action("signOut") signOut: any;
  @Action('japan/bindJapanRef') bindJapanRef: any;
  @Action('japan/test') test: any;

  async created() {
    let user: any = null;
    if (!this.loggedIn) {
      user = await auth();
      this.setUser({ user });
    }
    this.bindJapanRef();
  }

  updateTest() {
    this.test()
  }
}
</script>

<style scoped>
.header {
  color: white;
}
</style>
