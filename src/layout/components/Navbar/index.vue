<template>
  <div class="navbar">
    <breadcrumb id="breadcrumb-container" class="breadcrumb-container" />
    <description></description>
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
