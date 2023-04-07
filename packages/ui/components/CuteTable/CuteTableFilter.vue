<template>
  <div class="table-filter">
    <el-tag v-for="(v, i) in data" :key="i" type="info" size="large" closable @close="handleClose(v, i)">
      {{ v.content }}
    </el-tag>
    <div class="table-filter-dropdown">
      <el-tag type="newtag" size="large" @click="visible = true"> + 新增过滤</el-tag>
      <div v-if="visible" class="table-filter_content">
        <div class="table-filter_top">
          <el-form>
            <el-form-item v-for="(v, i) in formData" :key="i" :label="v.label">
              <el-select v-model="formSelect[i]" placeholder="请选择">
                <el-option
                  v-for="(item, ind) in v.options"
                  :key="ind"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
              <el-input v-model="formInput[i]" placeholder="请输入" />
              <span>{{ v.unit }}</span>
            </el-form-item>
          </el-form>
        </div>
        <div class="table-filter_foot">
          <el-button @click="visible = false">取 消</el-button>
          <el-button type="primary" @click="openDropdown">确 定</el-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component({
  name: 'CuteTableFilter',
})
export default class extends Vue {
  @Prop({ type: Array, default: [] }) formData: [] // 表单数据
  private formInput = {}
  private formSelect = {}
  private data = []
  private visible = false

  //添加条件标签
  private openDropdown() {
    const data = []
    this.formData.forEach((item: any, i) => {
      if (this.formInput[i] && this.formSelect[i]) {
        data.push({
          content: item.label + this.formSelect[i] + this.formInput[i] + item.unit,
        })
      }
    })
    this.data = data
    this.visible = false
  }

  //删除标签
  private handleClose(value, i) {
    this.data.splice(this.data.indexOf(value), 1)
    //清空删除标签input值
    Object.keys(this.formInput).forEach((item, index) => {
      if (i === index) {
        delete this.formInput[item]
      }
    })
    //清空删除标签select值
    Object.keys(this.formSelect).forEach((item, index) => {
      if (i === index) {
        delete this.formSelect[item]
      }
    })
  }
}
</script>
