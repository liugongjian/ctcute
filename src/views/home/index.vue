<template>
  <div class="home">
    <Header />
    <Banner />
    <Content />
    <Nav />
    <Footer />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import Header from './HomeHeader/index.vue'
import Content from './HomeContent/index.vue'
import Nav from './HomeNav/index.vue'
import Footer from './HomeFooter/index.vue'
import Banner from './HomeBanner/index.vue'
@Component({
  name: 'Home',
  components: {
    Header,
    Content,
    Nav,
    Footer,
    Banner,
  },
})
export default class extends Vue {}
</script>
<style lang="scss" scoped>
.home {
  width: 100%;
  min-height: 100vh;
  background: $color-white;
  font-family: PingFangSC-Medium;
}
</style>
