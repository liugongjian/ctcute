<template>
  <el-card>
    <Ctyun v-if="casType === 'ctyun'" :user-info="casUserInfo" />
    <Ctcdn v-else-if="casType === 'ctcdn'" :user-info="casUserInfo" />
    <div v-else>
      <el-alert type="info">
        <h3>天翼云单点登录</h3>
        <p>本地需要通过local.ctyun.cn域名访问此页</p>
        <p>请添加本地HOST：127.0.0.1 local.ctyun.cn</p>
      </el-alert>
      <br>
      <el-alert type="info">
        <h3>CDN IAM单点登录</h3>
        <p>本地需要通过local.ctcdn.cn域名访问此页</p>
        <p>请添加本地HOST：127.0.0.1 local.ctcdn.cn</p>
      </el-alert>
    </div>
  </el-card>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { CasModule } from '@/store/modules/cas'
import Ctyun from './Ctyun.vue'
import Ctcdn from './Ctcdn.vue'

@Component({
  name: 'Cas',
  components: {
    Ctcdn,
    Ctyun
  }
})
export default class extends Vue {
  private get casType() {
    return CasModule.cas && CasModule.cas.type
  }

  private get casUserInfo() {
    return CasModule.userInfo && CasModule.userInfo
  }
}
</script>
