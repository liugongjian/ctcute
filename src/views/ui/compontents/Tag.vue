<template>
  <div class="sub-tag">
    <h3>默认标签</h3>
    <el-tag type="info">标签</el-tag>
    <el-tag v-if="isShow" type="info" closable :disable-transitions="false" @close="closeTag">标签</el-tag>
    <el-tag
      v-for="tag in dynamicTags"
      :key="tag"
      type="info"
      closable
      :disable-transitions="false"
      @close="handleClose(tag)"
    >
      {{ tag }}
    </el-tag>
    <el-input
      v-if="inputVisible"
      ref="saveTagInput"
      v-model="inputValue"
      size="small"
      class="input-new-tag"
      @keyup.enter.native="handleInputConfirm"
      @blur="handleInputConfirm"
    >
    </el-input>
    <el-tag v-else type="newtag" :disable-transitions="true" @click="showInput">+ 标签</el-tag>
    <h3>大标签</h3>
    <el-tag type="info" size="large">CPU使用量>=2</el-tag>
    <el-tag v-if="isLargeShow" type="info" size="large" closable @close="isLargeShow = false">
      CPU使用量>=3
    </el-tag>
    <el-tag
      v-for="tag in dynamicFilterTags"
      :key="tag"
      type="info"
      size="large"
      closable
      :disable-transitions="false"
      @close="handleFilterClose(tag)"
    >
      {{ tag }}
    </el-tag>
    <el-input
      v-if="inputFilterVisible"
      ref="saveFilterTagInput"
      v-model="inputFilterValue"
      size="small"
      class="input-filter-tag"
      @keyup.enter.native="handleFilterInputConfirm"
      @blur="handleFilterInputConfirm"
    >
    </el-input>
    <el-tag v-else type="newtag" :disable-transitions="true" size="large" @click="showFilterInput"
      >+ 新增过滤</el-tag
    >
    <h3>彩色标签</h3>
    <el-tag type="danger">红色</el-tag>
    <el-tag type="success">绿色</el-tag>
    <el-tag type="">蓝色</el-tag>
    <el-tag type="warning">黄色</el-tag>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'UiTag',
})
export default class extends Vue {
  public static title = {
    zh: '标签',
    en: 'Tag',
  }

  private dynamicTags = []
  private isShow = true
  private isLargeShow = true
  private inputVisible = false
  private inputValue = ''
  private dynamicFilterTags = []
  private isFilterShow = true
  private inputFilterVisible = false
  private inputFilterValue = ''

  private closeTag() {
    this.isShow = false
  }

  private handleInputConfirm() {
    const inputValue = this.inputValue
    if (inputValue) {
      this.dynamicTags.push(inputValue)
    }
    this.inputVisible = false
    this.inputValue = ''
  }

  private showInput() {
    this.inputVisible = true
    this.$nextTick(() => {
      const saveTagInput: any = this.$refs.saveTagInput
      const saveTagInputRefs: any = saveTagInput.$refs
      saveTagInputRefs.input.focus()
    })
  }

  private handleClose(tag) {
    this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1)
  }

  private showFilterInput() {
    this.inputFilterVisible = true
    this.$nextTick(() => {
      const saveFilterTagInput: any = this.$refs.saveFilterTagInput
      const saveFilterTagInputRefs: any = saveFilterTagInput.$refs
      saveFilterTagInputRefs.input.focus()
    })
  }

  private handleFilterInputConfirm() {
    const inputFilterValue = this.inputFilterValue
    if (inputFilterValue) {
      this.dynamicFilterTags.push(inputFilterValue)
    }
    this.inputFilterVisible = false
    this.inputFilterValue = ''
  }

  private handleFilterClose(tag) {
    this.dynamicFilterTags.splice(this.dynamicFilterTags.indexOf(tag), 1)
  }
}
</script>

<style lang="scss" scoped>
.sub-tag {
  margin-top: 24px;
}

.el-tag {
  margin-right: 10px;
}

.input-new-tag {
  width: 60px;
  margin-left: 10px;
  vertical-align: bottom;

  ::v-deep.el-input__inner {
    height: 22px;
    line-height: 20px;
  }
}

.input-filter-tag {
  width: 83px;
  margin-left: 10px;
  vertical-align: bottom;

  ::v-deep.el-input__inner {
    height: 28px;
    line-height: 20px;
  }
}
</style>
