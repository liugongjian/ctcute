<template>
  <div class="navbar">
    <breadcrumb id="breadcrumb-container" class="breadcrumb-container" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Breadcrumb from '../Breadcrumb/index.vue'

@Component({
  name: 'Navbar',
  components: {
    Breadcrumb,
  },
})
export default class extends Vue {}
</script>
