<!--
 * @Author: 赵昕
 * @Date: 2022-07-21 14:18:32
 * @LastEditors: XinZhao
 * @LastEditTime: 2022-10-31 09:40:48
 * @Description: 分离式折叠面板（展开后内容不包括在面板里）
-->
<template>
  <div class="collapse-demo">
    <p>分离式折叠面板（展开后内容不包括在面板里）</p>
    <el-collapse v-model="activeNames1" seperate>
      <el-collapse-item title="小标题" name="1">
        <el-table
          ref="table1"
          :data="smallTable"
          :row-style="{ height: '42px' }"
          :cell-style="{ padding: 0 }"
        >
          <el-table-column prop="id" label="商品编码"></el-table-column>
          <el-table-column prop="name" label="商品名称"></el-table-column>
          <el-table-column prop="code" label="商品条码"></el-table-column>
          <el-table-column prop="price" label="单价"></el-table-column>
          <el-table-column prop="count" label="数量"></el-table-column>
          <el-table-column prop="total" label="总价"></el-table-column>
        </el-table>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Watch } from 'vue-property-decorator'
@Component({
  name: 'Demo1',
})
export default class extends Vue {
  private activeNames1 = ['1']
  private smallTable = [
    {
      id: '17282823',
      name: '菌小宝幼儿奶粉 500ml',
      code: '27382399299377',
      price: '200.00',
      count: '2',
      total: '400.00',
    },
    {
      id: '17282823',
      name: '英式婴儿米饼',
      code: '27382399299378',
      price: '20.00',
      count: '3',
      total: '60.00',
    },
    {
      id: '17282823',
      name: '精粹婴幼儿奶粉 550ml',
      code: '27382399299379',
      price: '329.00',
      count: '1',
      total: '329.00',
    },
  ]
  // 取消table的高度计算监听
  // 防止collapse下嵌套table 打开collapse时会出现瞬间的高度抖动情况
  @Watch('activeNames1')
  private handleCollapseChange() {
    const table1: any = this.$refs.table1
    table1.$ready = false
  }
}
</script>
<style lang="scss" scoped></style>
