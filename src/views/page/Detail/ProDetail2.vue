<!--
 * @Author: 朱玉豆
 * @Date: 2022-07-14 19:41:25
 * @LastEditors: 胡佳婷
 * @LastEditTime: 2022-08-08 14:25:23
 * @Description: 复杂详情2
-->
<template>
  <el-card class="pro-detail2">
    <div class="detail-header">
      <div class="detail-header__left">
        <span class="tags-title">这是一个名称</span>
        <cute-tag tag-name="+ 新标签" :dynamic-tags="dynamicTags"></cute-tag>
      </div>
      <div class="detail-header__right">
        <cute-button-group :data="buttonData" :max="2" />
      </div>
    </div>
    <el-tabs>
      <el-tab-pane label="选项一">
        <div class="container">
          <div class="container__left">
            <span class="tree-title">这是一个标题</span>
            <el-tree
              :data="proDetail2 && proDetail2.folders"
              node-key="key"
              draggable
              :default-expanded-keys="['1', '2', '3', '21']"
              :indent="10"
              style="margin-top: 9px"
            >
              <span slot-scope="{ node, data }" class="node-content">
                <span class="node-icon">
                  <svg-icon v-if="!node.isLeaf" name="folder" width="17" height="17" />
                  <svg-icon v-if="!node.isLeaf" name="folder-open" width="17" height="17" />
                </span>
                <span :class="node.isLeaf ? 'icon-leaf-label' : ''">{{ node.label }}</span>
                <div class="handler-menu">
                  <el-button slot="reference" type="text">
                    <svg-icon
                      v-if="!node.isLeaf"
                      name="plus-square"
                      class="handler-icon"
                      @click.stop="() => {}"
                    />
                  </el-button>
                  <div class="hover-wrapper">
                    <el-button type="text">
                      <svg-icon
                        v-if="data.key !== 1"
                        name="ellipsis-square"
                        class="handler-icon"
                        @click.stop
                      />
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
            <cute-titled-block title="标识">
              <template #content>
                <div class="sub-table-horizon">
                  <el-descriptions class="margin-top" :column="2" border>
                    <el-descriptions-item>
                      <template slot="label"> 内部标识符 </template>
                      {{ proDetail2 && proDetail2.basic && proDetail2.basic.innerIdentity }}
                    </el-descriptions-item>
                    <el-descriptions-item>
                      <template slot="label"> 标识符 </template>
                      {{ proDetail2 && proDetail2.basic && proDetail2.basic.showIdentity }}
                    </el-descriptions-item>
                    <el-descriptions-item>
                      <template slot="label"> 中文名称 </template>
                      {{ proDetail2 && proDetail2.basic && proDetail2.basic.chineseName }}
                    </el-descriptions-item>
                    <el-descriptions-item>
                      <template slot="label"> 英文名称 </template>
                      {{ proDetail2 && proDetail2.basic && proDetail2.basic.englishName }}
                    </el-descriptions-item>
                    <el-descriptions-item>
                      <template slot="label"> 语境</template>
                      {{ proDetail2 && proDetail2.basic && proDetail2.basic.context }}
                    </el-descriptions-item>
                    <el-descriptions-item>
                      <template slot="label"> 版本 </template>
                      {{ proDetail2 && proDetail2.basic && proDetail2.basic.version }}
                    </el-descriptions-item>
                    <el-descriptions-item :span="2">
                      <template slot="label"> 同义名称 </template>
                      {{ proDetail2 && proDetail2.basic && proDetail2.basic.synonyms }}
                    </el-descriptions-item>
                  </el-descriptions>
                </div>
              </template>
            </cute-titled-block>
            <cute-titled-block title="分区字段信息">
              <template #content>
                <el-table :data="proDetail2 && proDetail2.zoonsInfo1">
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
              </template>
            </cute-titled-block>
            <cute-titled-block title="分区字段信息">
              <template #content>
                <el-table :data="proDetail2 && proDetail2.zoonsInfo2">
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
              </template>
            </cute-titled-block>
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
import { CuteButtonGroup, CuteTitledBlock } from '@cutedesign/ui'
import { getProDetail } from '@/api/proDetail2'
import * as ProDetail2 from '@/types/ProDetail2'
@Component({
  name: 'ProDetail2',
  components: { CuteButtonGroup, CuteTitledBlock },
})
export default class extends Vue {
  // 动态标签
  private dynamicTags = ['标签', '标签', '标签']
  // 按钮组名称
  private buttonData = [
    { label: '操作一', name: 'op1' },
    { label: '操作二', name: 'op2' },
    { label: '操作三', name: 'op3' },
    { label: '主操作', name: 'op--main' },
  ]
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
    } catch (e) {
      this.$message.error(e)
    }
  }
}
</script>
