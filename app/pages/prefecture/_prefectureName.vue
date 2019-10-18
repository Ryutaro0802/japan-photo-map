<template>
  <section>
    <h2 class="heading">{{ prefectureKanaName }}</h2>
    <div>
      <Button v-if="!prefectureGoneState" type="button" @click="gonePrefecture">行った</Button>
      <Button v-else type="button" @click="gonePrefecture">行った済</Button>
    </div>
    <div v-if="photos.length">
      <Button type="button" @click="deleteModeStateChange">削除する</Button>
    </div>

    <form @submit.prevent="fileSubmit">
      <input type="file" @change="setImage" />
      <Button>
        Upload
      </Button>
    </form>

    <Column v-if="photos.length" class="photos">
      <ColumnItem v-for="photo in photos" :key="photo.id">
        <div class="photo">
          <input v-if="deleteMode" v-model="checkedPhotos" type="checkbox" :value="photo.id" />
          <img :src="photo.url" alt />
        </div>
      </ColumnItem>
    </Column>

    <p v-else>No Photos</p>

    <button v-if="deleteMode" type="button" @click="onDelete">OK</button>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import { Getter, Action } from "vuex-class";
import Column from "~/components/column/Column.vue";
import ColumnItem from "~/components/column/ColumnItem.vue";
import Button from "~/components/button/Button.vue";
import firebase from "~/plugins/firebase";
import { Photo, Japan } from "~/types";
import fileUpload from "~/plugins/fileUpload";

const storage = firebase.storage();

@Component({
  components: {
    Column,
    ColumnItem,
    Button
  }
})
export default class PrefectureNamePage extends Vue {
  @Getter("user") user!: any;
  @Getter("japan/japan") japan!: any;
  @Action("japan/sendGonePrefecture") sendGonePrefecture: any;
  @Action("japan/addPhoto") addPhoto: any;
  @Action("japan/deletePhoto") deletePhoto: any;

  private uploadFile: Blob | Uint8Array | ArrayBuffer | null = null;
  private fileName: string = "";
  private deleteMode: boolean = false;
  private checkedPhotos: string[] = [];

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
    return `${
      this.$prefectureNameTranslator(this.prefectureRomaName)
        .prefectureAddUnitName
    }`;
  }

  get photos(): { id: string; url: string }[] {
    return this.japan[this.prefectureRomaName].photos;
  }

  private setImage(e: any) {
    const file = e.target.files;
    this.fileName = file[0].name;
    this.uploadFile = new Blob(file, { type: "image/jpeg" });
  }

  private async fileSubmit() {
    if (!this.uploadFile) {
      return;
    }
    const prefectureName = this.prefectureRomaName;
    const uid = this.user.uid;
    const storageRef = storage
      .ref(`${uid}/images/${prefectureName}/`)
      .child(this.fileName);
    try {
      const uploadedPhotoInfo = await fileUpload({
        storageRef,
        uploadFile: this.uploadFile,
        metaObject: {}
      });
      this.addPhoto({ prefectureName, photo: uploadedPhotoInfo });
    } catch (error) {
      console.error(error);
    }
  }

  private async onDelete() {
    const prefectureName = this.prefectureRomaName;
    await this.deletePhoto({ prefectureName, photoIds: this.checkedPhotos });
    this.deleteMode = false;
  }

  private deleteModeStateChange() {
    // 写真が一枚もなかったら削除モードにしない
    if (!this.photos.length) {
      return;
    }
    if (this.deleteMode) {
      this.deleteMode = false;
    } else {
      this.deleteMode = true;
    }
  }

  private gonePrefecture() {
    console.log('asdf')
    if (this.prefectureGoneState) {
      // 写真があったらreturn
      if (this.photos.length) {
        return;
      }
      this.sendGonePrefecture({
        prefectureName: this.prefectureRomaName,
        goneState: false
      });
    } else {
      this.sendGonePrefecture({
        prefectureName: this.prefectureRomaName,
        goneState: true
      });
    }
  }
}
</script>

<style scoped>
.heading {
  color: white;
}
.photo {
  width: 200px;
  position: relative;
}
.photo > img {
  width: 100%;
}
.photo > input {
  position: absolute;
  right: 0;
  top: 0;
}
</style>
