<template>
  <div>
    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'UiSlider'
})
export default class extends Vue {
  public static title = {
    zh: '滑动输入条',
    en: 'Slider'
  }
}
</script>
