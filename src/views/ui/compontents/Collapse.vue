<template>
  <div class="sub-collapse">
    <h3>折叠面板</h3>
    <el-collapse v-model="activeNames">
      <el-collapse-item title="标题" name="1">
        <div>
          我是内容我是内容我是内容，我是内容我是内容我是内容我是。内容我是内容我是内，容我是内容我是内容我是内容我。我是内容我是内容我是内容我是内容我是内容，我是内容我是内容我是内容。我是内容我是内容我是内容，我是内容我是内容我是内容，我是内容我是内容我是内容我是。内容我是内容
        </div>
      </el-collapse-item>
      <el-collapse-item title="标题" name="2">
        <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
        <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
      </el-collapse-item>
      <el-collapse-item title="失效标题" name="3" disabled>
        <div>简化流程：设计简洁直观的操作流程；</div>
        <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
        <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
      </el-collapse-item>
    </el-collapse>
    <h3>折叠标题（展开后内容不包括在面板里）</h3>
    <div class="collapse-notcontent">
      <el-collapse v-model="activeNames1">
        <el-collapse-item title="小标题" name="1">
          <el-table :data="smallTable" :row-style="{ 'height': '42px', 'line-height': '42px' }" :cell-style="{ 'padding': 0 }">
            <el-table-column prop="id" label="商品编码">
              <template slot-scope="scope">
                <span class="table-key">{{ scope.row.id }}</span>
              </template>
            </el-table-column>
            <el-table-column prop="name" label="商品名称"></el-table-column>
            <el-table-column prop="code" label="商品条码"> </el-table-column>
            <el-table-column prop="price" label="单价"></el-table-column>
            <el-table-column prop="count" label="数量"></el-table-column>
            <el-table-column prop="total" label="总价"></el-table-column>
          </el-table>
        </el-collapse-item>
        <el-collapse-item title="小标题" name="2">
          <el-table :data="smallTable" :row-style="{ 'height': '42px', 'line-height': '42px' }" :cell-style="{ 'padding': 0 }">
            <el-table-column prop="id" label="商品编码">
              <template slot-scope="scope">
                <span class="table-key">{{ scope.row.id }}</span>
              </template>
            </el-table-column>
            <el-table-column prop="name" label="商品名称"></el-table-column>
            <el-table-column prop="code" label="商品条码"> </el-table-column>
            <el-table-column prop="price" label="单价"></el-table-column>
            <el-table-column prop="count" label="数量"></el-table-column>
            <el-table-column prop="total" label="总价"></el-table-column>
          </el-table>
        </el-collapse-item>
        <el-collapse-item title="失效标题" name="3" disabled>
          <div>简化流程：设计简洁直观的操作流程；</div>
          <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
          <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
        </el-collapse-item>
      </el-collapse>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'UiCollapse'
})
export default class extends Vue {
  public static title = {
    zh: '折叠',
    en: 'Collapse'
  }

  private activeNames = ['1']
  private activeNames1 = ['1']

  private smallTable = [{
    id: '17282823',
    name: '菌小宝幼儿奶粉 500ml',
    code: '27382399299377',
    price: '200.00',
    count: '2',
    total: '400.00'
  },
  {
    id: '17282823',
    name: '英式婴儿米饼',
    code: '27382399299378',
    price: '20.00',
    count: '3',
    total: '60.00'
  },
  {
    id: '17282823',
    name: '精粹婴幼儿奶粉 1段550ml',
    code: '27382399299379',
    price: '329.00',
    count: '1',
    total: '329.00'
  }]
}
</script>

<style lang="scss" scoped>
.sub-collapse {
  .el-collapse {
    width: 638px;

    .table-key {
      cursor: pointer;
      color: $color-master-1;
    }

    .el-table {
      overflow-y: auto;
      margin: 0 !important;
    }
  }

  .collapse-notcontent {
    ::v-deep.el-collapse-item__header {
      background-color: $color-grey-8;
      border: none;
      height: 32px;
    }

    ::v-deep.el-collapse-item__content {
      margin-top: 16px;
      border: none;
      padding: 0;
    }

    ::v-deep.el-collapse-item__wrap {
      border: none;
    }
  }
}
</style>
