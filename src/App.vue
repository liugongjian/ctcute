<template>
  <div ref="container">
    <div id="app">
      <router-view />
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { initCas } from '@/models/Cas'

@Component({
  name: 'App'
})
export default class extends Vue {
  private async mounted() {
    initCas(this.$refs.container)
  }
}
</script>
