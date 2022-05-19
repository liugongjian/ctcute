<template>
  <div class="sub-tree">
    <el-row>
      <el-col :span="5">
        <h3>四层树状菜单标题</h3>
        <el-tree :data="data.threeFour" node-key="key" draggable :default-expanded-keys="[2]"> </el-tree>
      </el-col>
      <el-col :span="5">
        <h3>三层树状菜单标题</h3>
        <el-tree :data="data.threeTree" draggable node-key="key" :default-expanded-keys="[3]"> </el-tree>
      </el-col>
      <el-col :span="5">
        <h3>两层树状菜单标题</h3>
        <el-tree :data="data.twoTree" node-key="key" :default-expanded-keys="[4]"> </el-tree>
      </el-col>
      <el-col :span="5">
        <h3>三层树状菜单加icon</h3>
        <el-tree :data="data.threeTree" node-key="key" icon-class="el-icon-edit" :default-expanded-keys="[3]">
        </el-tree>
      </el-col>
    </el-row>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Data from '@/utils/mock'
@Component({
  name: 'UiTree'
})
export default class extends Vue {
  public static title = {
    zh: '树形菜单',
    en: 'Tree'
  }

  public data = Data
}
</script>

<style lang="scss" scoped>
.el-col {
  border-right: 1px solid #f1f1f1;
}
.el-col:not(:first-child) {
  margin-left: 81px;
}
.sub-class {
  width: 1200px;
}
</style>
