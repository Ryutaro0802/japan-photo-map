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
      <ColumnItem>
        <img src="https://dummyimage.com/200x200/adadad/fff" alt />
      </ColumnItem>
      <ColumnItem>
        <img src="https://dummyimage.com/200x200/adadad/fff" alt />
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

  setImage(e: any) {
    const file = e.target.files;
    this.fileName = file[0].name;
    this.uploadFile = new Blob(file, { type: "image/jpeg" });
  }

  async fileSubmit() {
    const prefectureName = this.prefectureRomaName;
    const uid = this.user.uid;
    const storageRef = storage
      .ref(`${uid}/images/${prefectureName}/`)
      .child(this.fileName);
    try {
      await storageRef.put(this.uploadFile);
      const metadata = {
        customMetadata: {
          prefectureName: prefectureName
        }
      };
      await storageRef.updateMetadata(metadata);
      const url = await storageRef.getDownloadURL();
      const photo: Photo = { id: "aa", url };
      this.addPhoto({ prefectureName, photo });
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
