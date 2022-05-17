<template>
  <div><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /></div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator"

@Component({
  name: "UiTree",
})
export default class extends Vue {
  public static title = {
    zh: "树形菜单",
    en: "Tree",
  }
}
</script>