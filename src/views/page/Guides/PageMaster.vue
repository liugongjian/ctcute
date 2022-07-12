<template>
  <cute-mavon-editor class="component-md-table" :content="content"></cute-mavon-editor>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import CuteMavonEditor from './components/CuteMavonEditor.vue'

@Component({
  name: 'DesignTarget',
  components: {
    CuteMavonEditor,
  },
})
export default class extends Vue {
  private content = `
## 页面维护人
|   页面   |  维护人    |  版本    |
| ---------------------------------------- | :---------: | :---------: |
`
}
</script>
<style lang="scss">
.component-md-table {
  table {
    th:first-of-type {
      width: 30%;
    }

    th:nth-of-type(2) {
      width: 20%;
    }

    th:nth-of-type(3) {
      width: 20%;
    }
  }
}
</style>
