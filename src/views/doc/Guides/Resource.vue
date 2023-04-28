<!--
 * @Author: 胡佳婷
 * @Date: 2022-10-04 17:01:49
 * @LastEditors: 胡佳婷
 * @LastEditTime: 2022-10-09 11:18:01
 * @Description:
-->
<template>
  <cute-md-preview :content="content" />
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import CuteMdPreview from '../components/CuteMdPreview.vue'

@Component({
  name: 'Resource',
  components: {
    CuteMdPreview,
  },
})
export default class extends Vue {
  private content = `
## 资源

### [产品原型](https://cloud.ctcdn.cn/s/LPtSGxCiHAcibEe)
### [UI规范light-橙](https://cloud.ctcdn.cn/s/fR3YnW3BBXxrcH5)
### [UI规范dark-橙](https://cloud.ctcdn.cn/s/ApXTsFTAkTWmjNo)
### [ts-demo视频](https://cloud.ctcdn.cn/s/ScmnidegjSCYx8Y)
### [ts使用指南](https://cloud.ctcdn.cn/s/TRTf2mY4s8dQYKS)
`
}
</script>
