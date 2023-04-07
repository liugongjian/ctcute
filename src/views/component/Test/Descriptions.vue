<!--
 * @Author: 刘功坚
 * @Date: 2023-03-17 13:45:09
 * @LastEditors: liugongjian
 * @LastEditTime: 2023-04-07 09:52:14
 * @Description: Descriptions
-->
<template>
  <div>
    <h1>Descriptions</h1>
    <div>
      <h3>基础用法</h3>
      <el-descriptions title="用户信息">
        <el-descriptions-item label="用户名">kooriookami</el-descriptions-item>
        <el-descriptions-item label="手机号">18100000000</el-descriptions-item>
        <el-descriptions-item label="居住地">苏州市</el-descriptions-item>
        <el-descriptions-item label="备注">
          <el-tag size="small">学校</el-tag>
        </el-descriptions-item>
        <el-descriptions-item label="联系地址">江苏省苏州市吴中区吴中大道 1188 号</el-descriptions-item>
      </el-descriptions>
    </div>
    <div>
      <h3>带边框列表</h3>
      <el-descriptions class="margin-top" title="用户信息" :column="1" :size="size" border>
        <el-descriptions-item label="用户名">kooriookami</el-descriptions-item>
        <el-descriptions-item label="手机号">18100000000</el-descriptions-item>
        <el-descriptions-item label="居住地">苏州市</el-descriptions-item>
        <el-descriptions-item label="备注">
          <el-tag size="small">学校</el-tag>
        </el-descriptions-item>
        <el-descriptions-item label="联系地址">江苏省苏州市吴中区吴中大道 1188 号</el-descriptions-item>
      </el-descriptions>
    </div>
    <div>
      <h3>详细页基本信息展示列表</h3>
      <el-descriptions class="margin-top" title="" :column="3" :size="size" border>
        <el-descriptions-item label="内部标识符">DE34237632363</el-descriptions-item>
        <el-descriptions-item label="标识符">GMSFZ</el-descriptions-item>
        <el-descriptions-item label="标识符">GMSFZ</el-descriptions-item>
        <el-descriptions-item label="中文名称">公民身份证</el-descriptions-item>
        <el-descriptions-item label="英文名称">gong-min-shen-fen-zheng</el-descriptions-item>
        <el-descriptions-item label="英文名称">gong-min-shen-fen-zheng</el-descriptions-item>
        <el-descriptions-item label="语境">天翼云公司</el-descriptions-item>
        <el-descriptions-item label="版本">1.0</el-descriptions-item>
        <el-descriptions-item label="版本">1.0</el-descriptions-item>
        <el-descriptions-item label="同义词名称">BB</el-descriptions-item>
      </el-descriptions>
      <br />
      <el-descriptions class="margin-top" title="" :column="2" :size="size" border>
        <el-descriptions-item label="内部标识符">DE34237632363</el-descriptions-item>
        <el-descriptions-item label="标识符">GMSFZ</el-descriptions-item>
        <el-descriptions-item label="中文名称">公民身份证</el-descriptions-item>
        <el-descriptions-item label="英文名称">gong-min-shen-fen-zheng</el-descriptions-item>
        <el-descriptions-item label="语境">天翼云公司</el-descriptions-item>
        <el-descriptions-item label="版本">1.0</el-descriptions-item>
        <el-descriptions-item label="同义词名称">BB</el-descriptions-item>
      </el-descriptions>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import TreeDemo from '@/views/ui/components/Tree.vue'

@Component({
  name: 'Link',
  components: {
    TreeDemo,
  },
})
export default class extends Vue {
  private size = ''
}
</script>
