<template>
  <cute-selected-input :data="checkList" :option-data="optionData" @request="request" />
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({
  name: 'Demo2',
})
export default class extends Vue {
  private checkList = ['已选中项']
  private optionData = [
    {
      label: '退订',
      value: '1',
    },
    {
      label: '续订',
      value: '2',
    },
  ]

  private request(data) {
    console.log(data)
  }
}
</script>
