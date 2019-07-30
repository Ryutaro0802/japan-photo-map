<template>
  <div class="file">
    <label class="file-label">
      <input
        class="file-input"
        type="file"
        name="resume"
        @change="'change', $event"
      />
      <span class="file-cta">
        <span class="file-icon">
          <i class="fas fa-upload" />
        </span>
        <span class="file-label">ファイルを選択してください</span>
      </span>
    </label>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";

@Component({})
export default class InputFile extends Vue {}
</script>

<style scoped></style>
