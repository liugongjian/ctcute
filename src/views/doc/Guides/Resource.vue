<!--
 * @Author: 胡佳婷
 * @Date: 2022-10-04 17:01:49
 * @LastEditors: 胡佳婷
 * @LastEditTime: 2022-10-09 11:18:01
 * @Description:
-->
<template>
  <cute-mavon-editor :content="content"></cute-mavon-editor>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import CuteMavonEditor from '../components/CuteMavonEditor.vue'

@Component({
  name: 'Resource',
  components: {
    CuteMavonEditor,
  },
})
export default class extends Vue {
  private content = `
## 资源
### [产品原型](https://cloud.ctcdn.cn/s/LPtSGxCiHAcibEe)
### [UI规范](https://cloud.ctcdn.cn/s/3p5eTTn9J8FaRC3)
### [ts-demo视频](https://cloud.ctcdn.cn/s/ScmnidegjSCYx8Y)
### [ts使用指南](https://cloud.ctcdn.cn/s/TRTf2mY4s8dQYKS)
`
}
</script>
