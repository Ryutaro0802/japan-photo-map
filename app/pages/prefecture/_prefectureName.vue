<template>
  <section>
    <h2 class="heading">{{ prefectureKanaName }}</h2>
    <button @click.prevent="gonePrefecture" :disabled="prefectureGoneState">行った</button>
    <form @submit.prevent="fileSubmit">
      <input type="file" @change="setImage" />
      <!-- <InputFile @change="fileUpload" /> -->
      <button>Upload</button>
    </form>
    <Column>
      <ColumnItem v-for="photo in photos" :key="photo.id">
        <img :src="photo.url" alt />
      </ColumnItem>
    </Column>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import { State, Getter, Action, namespace } from "vuex-class";
import Column from "~/components/column/Column.vue";
import ColumnItem from "~/components/column/ColumnItem.vue";
import InputFile from "~/components/button/InputFile.vue";
import firebase from "~/plugins/firebase";
import { Photo } from "~/types";
import fileUpload from "~/plugins/fileUpload";

const storage = firebase.storage();

@Component({
  components: {
    Column,
    ColumnItem,
    InputFile
  }
})
export default class PrefectureNamePage extends Vue {
  @Getter("user") user: any;
  @Getter("japan/japan") japan: any;
  @Action("japan/sendGonePrefecture") sendGonePrefecture: any;
  @Action("japan/addPhoto") addPhoto: any;

  private uploadFile: any = null;
  private fileName: string = "";

  validate({ params }: { params: any }): boolean {
    return /^\w+$/.test(params.prefectureName);
  }

  get prefectureRomaName(): string {
    return this.$route.params.prefectureName;
  }

  get prefectureGoneState(): boolean {
    return this.japan[this.prefectureRomaName].gone;
  }

  get prefectureKanaName(): string {
    return `${this.$prefectureNameTranslator(this.prefectureRomaName)}県`;
  }

  get photos(): { id: string; url: string }[] {
    return this.japan[this.prefectureRomaName].photos;
  }

  setImage(e: any) {
    const file = e.target.files;
    this.fileName = file[0].name;
    this.uploadFile = new Blob(file, { type: "image/jpeg" });
  }

  async fileSubmit() {
    const prefectureName = this.prefectureRomaName;
    const uid = this.user.uid;
    const storageRef: any = storage
      .ref(`${uid}/images/${prefectureName}/`)
      .child(this.fileName);
    try {
      const uploadedPhotoInfo = await fileUpload({
        storageRef,
        uploadFile: this.uploadFile,
        metaObject: {}
      });
      this.addPhoto({ prefectureName, photo: uploadedPhotoInfo });
      // this.gonePrefecture();
    } catch (error) {
      console.error(error);
    }
  }

  gonePrefecture() {
    this.sendGonePrefecture({ prefectureName: this.prefectureRomaName });
  }
}
</script>

<style scoped>
.heading {
  color: white;
}
</style>
