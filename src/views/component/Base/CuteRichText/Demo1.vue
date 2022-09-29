<template>
  <cute-rich-text :img-url="imgUrl" :video-url="videoUrl"></cute-rich-text>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { CuteRichText } from '@cutedesign/rich-text'
@Component({
  name: 'Demo1',
  components: {
    CuteRichText,
  },
})
export default class extends Vue {
  private imgUrl = 'http://localhost:8080/mock/175/upload/images'
  private videoUrl = 'https://localhost:8080/mock/175/upload/videos'
}
</script>
