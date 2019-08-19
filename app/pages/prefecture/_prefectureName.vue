<template>
  <section>
    <h2 class="heading">{{ prefectureKanaName }}</h2>
    <div>
      <button v-if="!prefectureGoneState" type="button" @click="gonePrefecture">行った</button>
      <button v-else type="button" @click="gonePrefecture">行った済</button>
    </div>
    <div>
      <button type="button" @click="deleteModeStateChange">削除する</button>
    </div>

    <form @submit.prevent="fileSubmit">
      <input type="file" @change="setImage" />
      <button>Upload</button>
    </form>
    <Column v-if="photos.length" class="photos">
      <ColumnItem v-for="photo in photos" :key="photo.id">
      <div class="photo">
        <input v-if="deleteMode" type="checkbox">
        <img :src="photo.url" alt />
      </div>
      </ColumnItem>
    </Column>
    <p v-else>
      No Photos
    </p>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import { Getter, Action } from "vuex-class";
import Column from "~/components/column/Column.vue";
import ColumnItem from "~/components/column/ColumnItem.vue";
import firebase from "~/plugins/firebase";
import { Photo, Japan } from "~/types";
import fileUpload from "~/plugins/fileUpload";

const storage = firebase.storage();

@Component({
  components: {
    Column,
    ColumnItem
  }
})
export default class PrefectureNamePage extends Vue {
  @Getter("user") user!: any;
  @Getter("japan/japan") japan!: any;
  @Action("japan/sendGonePrefecture") sendGonePrefecture: any;
  @Action("japan/addPhoto") addPhoto: any;

  private uploadFile: Blob | Uint8Array | ArrayBuffer | null = null;
  private fileName: string = "";
  private deleteMode: boolean = false;

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
    if (!this.uploadFile) return;
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

  private deleteModeStateChange() {
    if (this.deleteMode) {
      this.deleteMode = false;
    } else {
      this.deleteMode = true;
    }
  }

  private gonePrefecture() {
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
.photos {

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
