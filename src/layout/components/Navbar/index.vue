<template>
  <div class="navbar">
    <breadcrumb id="breadcrumb-container" class="breadcrumb-container" />
    <page-description></page-description>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Breadcrumb from '../Breadcrumb/index.vue'
import PageDescription from '../PageDescription/index.vue'

@Component({
  name: 'Navbar',
  components: {
    Breadcrumb,
    PageDescription,
  },
})
export default class extends Vue {}
</script>
