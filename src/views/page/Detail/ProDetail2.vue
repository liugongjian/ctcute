<template>
  <el-card class="pro-detail2">
    <div class="detail-header">
      <div class="detail-header__left">
        <span class="tags-title">这是一个名称</span>
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
      </div>
      <div class="detail-header__right">
        <button-group :data="buttonData" :max="2" />
      </div>
    </div>
    <el-tabs>
      <el-tab-pane label="选项一">
        <div class="container">
          <div class="container__left sub-tree">
            <span class="tree-title">这是一个标题</span>
            <el-tree
              :data="proDetail2.folders"
              node-key="key"
              draggable
              :default-expanded-keys="['1', '2']"
              :indent="10"
              style="margin-top: 9px"
            >
              <span slot-scope="{ node, data }" class="node-content">
                <span class="node-icon">
                  <svg-icon v-if="!node.isLeaf" name="folder" width="17" height="17" />
                  <svg-icon v-if="!node.isLeaf" name="folder-open" width="17" height="17" />
                </span>
                {{ node.label }}
                <div class="handler-menu">
                  <el-button slot="reference" type="text">
                    <svg-icon v-if="!node.isLeaf" name="plus" class="handler-icon" @click.stop="() => {}" />
                  </el-button>
                  <div class="hover-wrapper">
                    <el-button type="text" class="dash-icon">
                      <svg-icon v-if="data.key !== 1" name="dash" class="handler-icon" @click.stop />
                    </el-button>
                    <div class="pop-tooltip tree-node-popover el-tooltip__popper">
                      <div class="tooltip-content">
                        <el-button v-if="!node.isLeaf" size="mini" type="text" @click.stop>重命名</el-button>
                        <el-button v-if="!node.isLeaf" size="mini" type="text" @click.stop>删除</el-button>
                        <el-button v-if="node.isLeaf" size="mini" type="text" @click.stop>移动</el-button>
                      </div>
                    </div>
                  </div>
                </div>
              </span>
            </el-tree>
          </div>
          <div class="container__right">
            <titled-block title="标识">
              <div class="sub-table-horizon">
                <el-descriptions class="margin-top" :column="2" :size="size" border>
                  <el-descriptions-item>
                    <template slot="label"> 内部标识符 </template>
                    {{ proDetail2.basic.innerIdentity }}
                  </el-descriptions-item>
                  <el-descriptions-item>
                    <template slot="label"> 标识符 </template>
                    {{ proDetail2.basic.showIdentity }}
                  </el-descriptions-item>
                  <el-descriptions-item>
                    <template slot="label"> 中文名称 </template>
                    {{ proDetail2.basic.chineseName }}
                  </el-descriptions-item>
                  <el-descriptions-item>
                    <template slot="label"> 英文名称 </template>
                    {{ proDetail2.basic.englishName }}
                  </el-descriptions-item>
                  <el-descriptions-item>
                    <template slot="label"> 语境</template>
                    {{ proDetail2.basic.context }}
                  </el-descriptions-item>
                  <el-descriptions-item>
                    <template slot="label"> 版本 </template>
                    {{ proDetail2.basic.version }}
                  </el-descriptions-item>
                  <el-descriptions-item :span="2">
                    <template slot="label"> 同义名称 </template>
                    {{ proDetail2.basic.synonyms }}
                  </el-descriptions-item>
                </el-descriptions>
              </div>
            </titled-block>
            <titled-block title="分区字段信息">
              <el-table :data="proDetail2.zoonsInfo1" border>
                <el-table-column prop="id" label="序号"> </el-table-column>
                <el-table-column prop="name" label="字段名称"> </el-table-column>
                <el-table-column prop="type" label="类型"> </el-table-column>
                <el-table-column prop="description" label="描述" width="150px">
                  <template slot-scope="scope">
                    <el-tooltip class="item" effect="dark" :content="scope.row.description" placement="top">
                      <span class="text-ellipsis">{{ scope.row.description }}</span>
                    </el-tooltip>
                  </template>
                </el-table-column>
                <el-table-column prop="title1" label="标题1"> </el-table-column>
                <el-table-column prop="title2" label="标题2"> </el-table-column>
              </el-table>
            </titled-block>
            <titled-block title="分区字段信息">
              <el-table :data="proDetail2.zoonsInfo2" border>
                <el-table-column prop="id" label="序号"> </el-table-column>
                <el-table-column prop="name" label="字段名称"> </el-table-column>
                <el-table-column prop="type" label="类型"> </el-table-column>
                <el-table-column prop="description" label="描述" width="150px">
                  <template slot-scope="scope">
                    <el-tooltip class="item" effect="dark" :content="scope.row.description" placement="top">
                      <span class="text-ellipsis">{{ scope.row.description }}</span>
                    </el-tooltip>
                  </template>
                </el-table-column>
                <el-table-column prop="title1" label="标题1"> </el-table-column>
                <el-table-column prop="title2" label="标题2"> </el-table-column>
              </el-table>
            </titled-block>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="禁用项" disabled>禁用项</el-tab-pane>
      <el-tab-pane label="默认项">默认项</el-tab-pane>
    </el-tabs>
  </el-card>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import ButtonGroup from '@/components/CombinationButton/ButtonGroup.vue'
import TitledBlock from '@/components/TitiledBlock/index.vue'
import { getProDetail } from '@/api/proDetail2'
import * as ProDetail2 from '@/types/ProDetail2'
@Component({
  name: 'ProDetail2',
  components: { ButtonGroup, TitledBlock },
})
export default class extends Vue {
  // 动态标签
  private dynamicTags = ['标签', '标签', '标签']
  // 按钮组名称
  private buttonData = ['操作一', '操作二', '操作三']
  // 新增标签input框是否可见
  private inputVisible = false
  // 新增标签input框输入值
  private inputValue = ''
  // 复杂详情页2信息
  private proDetail2: ProDetail2.ProDetailInfo2 = null

  /**
   * 页面Mounted
   */
  private mounted() {
    this.getProDetail()
  }

  /**
   * 获取复杂详情页信息
   */
  private async getProDetail() {
    try {
      const res = await getProDetail()
      this.proDetail2 = res.data
      console.log(this.proDetail2.basic)
    } catch (e) {
      this.$message.error(e)
    }
  }

  /**
   * 输入确认后添加标签
   */
  private handleInputConfirm() {
    const inputValue = this.inputValue
    if (inputValue) {
      this.dynamicTags.push(inputValue)
    }
    this.inputVisible = false
    this.inputValue = ''
  }

  /**
   * 点击新增标签 显示输入框
   */
  private showInput() {
    this.inputVisible = true
    this.$nextTick(() => {
      const saveTagInput: any = this.$refs.saveTagInput
      const saveTagInputRefs: any = saveTagInput.$refs
      saveTagInputRefs.input.focus()
    })
  }

  /**
   * 关闭标签
   */
  private handleClose(tag) {
    this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1)
  }
}
</script>
<style lang="scss" scoped>
.node-content {
  margin-left: -0.5em;
  display: flex;
  align-items: center;
  color: $text-color-primary;
}

.node-icon {
  color: $color-grey-5;

  .svg-icon {
    display: none;
    margin-right: 0.5em;

    &:first-child {
      display: inline;
    }
  }
}

.is-expanded > .el-tree-node__content {
  .node-icon {
    color: $color-grey-5;

    .svg-icon {
      display: none;

      &:last-child {
        display: inline;
      }
    }
  }
}

.el-tree-node:focus > .el-tree-node__content {
  .node-content,
  .node-icon,
  .handler-icon {
    color: $color-white;
  }

  .handler-icon {
    border: 1px solid $color-white;
  }
}

::v-deep .el-tree-node__content {
  position: relative;

  .handler-menu {
    position: absolute;
    right: 0.5em;
    display: none;

    .el-button:not(.pop-tooltip .el-button) {
      padding: 0;
      margin: 0.9em 0.3em;
    }

    .handler-icon {
      color: $color-grey-5;
      border: 1.5px solid $color-grey-5;
      font-size: 12.5px !important;
    }
  }

  &:hover {
    .handler-menu {
      display: block;
    }
  }
}

.sub-tree {
  .tree-title {
    font-size: 14px;
    color: #333;
    line-height: 20px;
    font-weight: 500;
    padding-left: 6px;
  }

  ::v-deep .el-tree-node > .el-tree-node__children {
    overflow: initial;
  }

  .hover-wrapper {
    display: inline-block;
    margin-left: -0.4em;

    &:hover {
      .pop-tooltip {
        display: block;
      }
    }
  }

  .pop-tooltip {
    display: none;
    position: absolute;
    z-index: 2019;
    top: 24px;
    right: 0;
    background: $color-white;
  }
}
</style>
