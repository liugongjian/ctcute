<template>
  <div>
    <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'UiPagination'
})
export default class extends Vue {
  public static title = {
    zh: '分页器',
    en: 'Pagination'
  }
}
</script>
