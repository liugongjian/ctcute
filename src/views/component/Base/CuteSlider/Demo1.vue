<template>
  <div>
    <cute-slider
      :min="0"
      :max="100"
      :initial-min="20"
      :initial-max="80"
      :width="1200"
      :disabled="false"
      :range="true"
    />
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({
  name: 'Demo10',
})
export default class extends Vue {}
</script>
<style lang="scss" scoped></style>
