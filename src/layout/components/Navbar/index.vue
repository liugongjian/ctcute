<template>
  <div class="navbar desc-nav">
    <breadcrumb id="breadcrumb-container" class="breadcrumb-container" />
    <description class="desc"></description>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Breadcrumb from '../Breadcrumb/index.vue'
import Description from '../Description/index.vue'

@Component({
  name: 'Navbar',
  components: {
    Breadcrumb,
    Description,
  },
})
export default class extends Vue {}
</script>
<style lang="scss" scoped>
.desc-nav {
  .desc {
    margin-left: 10px;
  }
}
</style>
