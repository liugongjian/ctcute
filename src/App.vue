<template>
  <div ref="container">
    <div id="app">
      <router-view />
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
// import '@/assets/icon/iconfont.css'
@Component({
  name: 'App'
})
export default class extends Vue {}
</script>
