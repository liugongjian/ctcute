<template>
  <div ref="container">
    <div id="app">
      <router-view />
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator"

@Component({
  name: "App",
})
export default class extends Vue {}
</script>
