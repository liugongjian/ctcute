<!--
 * @Author: 赵昕
 * @Date: 2022-07-18 13:11:31
 * @LastEditors: liugj
 * @LastEditTime: 2023-05-22 10:04:10
 * @Description: 复杂详情1
-->
<template>
  <el-card class="pro-detail1">
    <div class="detail-header">
      <div class="detail-header__left">
        <span class="tags-title">这是一个名称</span>
        <cute-tag :dynamic-tags.sync="dynamicTags" tag-name="+ 新标签"></cute-tag>
      </div>
      <div class="detail-header__right">
        <div class="combination-button">
          <el-button>操作一</el-button>
          <el-button>操作二</el-button>
          <el-dropdown size="medium" @command="handleCommand">
            <el-button size="medium">...</el-button>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>操作四</el-dropdown-item>
              <el-dropdown-item>操作五</el-dropdown-item>
              <el-dropdown-item>操作六</el-dropdown-item>
              <el-dropdown-item>操作七</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <el-button size="medium" type="primary">主操作</el-button>
        </div>
      </div>
    </div>
    <el-tabs v-model="activeName">
      <el-tab-pane name="a" label="选项一">
        <cute-titled-block title="灰度发布升级策略">
          <template #content
            ><div class="sub-table-horizon">
              <el-descriptions class="margin-top" :column="2" border>
                <el-descriptions-item>
                  <template slot="label">内部标识符</template>
                  {{ ProDetail1Info && ProDetail1Info.basic && ProDetail1Info.basic.innerIdentity }}
                </el-descriptions-item>
                <el-descriptions-item>
                  <template slot="label">标识符</template>
                  {{ ProDetail1Info && ProDetail1Info.basic && ProDetail1Info.basic.showIdentity }}
                </el-descriptions-item>
                <el-descriptions-item>
                  <template slot="label">中文名称</template>
                  {{ ProDetail1Info && ProDetail1Info.basic && ProDetail1Info.basic.chineseName }}
                </el-descriptions-item>
                <el-descriptions-item>
                  <template slot="label">英文名称</template>
                  {{ ProDetail1Info && ProDetail1Info.basic && ProDetail1Info.basic.englishName }}
                </el-descriptions-item>
                <el-descriptions-item>
                  <template slot="label">语境</template>
                  {{ ProDetail1Info && ProDetail1Info.basic && ProDetail1Info.basic.context }}
                </el-descriptions-item>
                <el-descriptions-item>
                  <template slot="label">版本</template>
                  {{ ProDetail1Info && ProDetail1Info.basic && ProDetail1Info.basic.version }}
                </el-descriptions-item>
                <el-descriptions-item :span="2">
                  <template slot="label">同义名称</template>
                  {{ ProDetail1Info && ProDetail1Info.basic && ProDetail1Info.basic.synonyms }}
                </el-descriptions-item>
              </el-descriptions>
            </div></template
          >
        </cute-titled-block>
        <el-card class="operate-card" shadow="never">
          <div slot="header">分批管理</div>
          <div class="operate-card__left">
            <cute-titled-block title="第一批次">
              <template #content>
                <el-table
                  v-if="activeName === 'a'"
                  :data="ProDetail1Info && ProDetail1Info.batches && ProDetail1Info.batches.firstBatch"
                  class="table"
                >
                  <el-table-column prop="area" label="可用区"></el-table-column>
                  <el-table-column prop="date" label="编辑下发事件"></el-table-column>
                  <el-table-column prop="status" label="状态">
                    <template slot-scope="{ row }">
                      <span class="status">
                        <span class="status-dot" :class="`status-dot--${row.status}`" />{{
                          STATUS[row.status]
                        }}
                      </span>
                    </template>
                  </el-table-column>
                </el-table>
              </template>
            </cute-titled-block>
            <cute-titled-block title="手动第二批次">
              <template #content>
                <el-table
                  v-if="activeName === 'a'"
                  :data="ProDetail1Info && ProDetail1Info.batches && ProDetail1Info.batches.secondBatch"
                  class="table"
                >
                  <el-table-column prop="area" label="可用区"></el-table-column>
                  <el-table-column prop="date" label="编辑下发事件"></el-table-column>
                  <el-table-column prop="status" label="状态">
                    <template slot-scope="{ row }">
                      <span class="status">
                        <span class="status-dot" :class="`status-dot--${row.status}`" />{{
                          STATUS[row.status]
                        }}
                      </span>
                    </template>
                  </el-table-column>
                </el-table>
              </template>
            </cute-titled-block>
            <div class="operate-btn">
              <el-button type="primary">手动执行升级</el-button>
              <el-button>版本回退</el-button>
            </div>
          </div>
          <div class="operate-card__right sub-timeline">
            <cute-titled-block title="升级策略展览">
              <template #content>
                <div class="timeline-content sub-complex">
                  <el-timeline>
                    <el-timeline-item
                      v-for="(item, index) in ProDetail1Info && ProDetail1Info.updateList"
                      :key="index"
                      :timestamp="item.title"
                      placement="top"
                    >
                      <h4 v-if="item.message" class="status">
                        {{ item.message }}
                        <span class="status-dot" :class="`status-dot--${item.status}`" />
                        {{ RESULT[item.status] }}
                      </h4>
                      <p v-if="item.time">{{ item.time }}</p>
                      <el-table v-if="item.list && activeName === 'a'" :data="item.list" class="table">
                        <el-table-column prop="id" label="序号"></el-table-column>
                        <el-table-column prop="name" label="集群名称"></el-table-column>
                        <el-table-column prop="status" label="状态">
                          <template slot-scope="{ row }">
                            <span class="status">
                              <span class="status-dot" :class="`status-dot--${row.status}`" />{{
                                STATUS[row.status]
                              }}
                            </span>
                          </template>
                        </el-table-column>
                        <el-table-column prop="running" label="运行中"></el-table-column>
                        <el-table-column prop="start" label="启动中"></el-table-column>
                        <el-table-column prop="fail" label="失败"></el-table-column>
                        <el-table-column prop="sale" label="销售中"></el-table-column>
                        <el-table-column prop="unavailable" label="不可用"></el-table-column>
                        <el-table-column prop="unknown" label="未知"></el-table-column>
                      </el-table>
                    </el-timeline-item>
                  </el-timeline>
                </div>
              </template>
            </cute-titled-block>
          </div>
        </el-card>
      </el-tab-pane>
      <el-tab-pane label="禁用项" disabled>禁用项</el-tab-pane>
      <el-tab-pane name="b" label="默认项">默认项</el-tab-pane>
    </el-tabs>
  </el-card>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import * as ProDetail1 from '@/types/ProDetail1'
import { CuteButtonGroup, CuteTitledBlock } from '@cutedesign/ui'
import { getProDetail1 } from '@/api/proDetail1'
import { STATUS, RESULT } from '@/dics/proDetail1'
@Component({
  name: 'ProDetail1',
  components: { CuteButtonGroup, CuteTitledBlock },
})
export default class extends Vue {
  // 下发状态字典
  private STATUS = STATUS
  // 发布结果字典
  private RESULT = RESULT
  // 加载状态
  private loading = false
  // 详情数据
  private ProDetail1Info: ProDetail1.ProDetailInfo = null
  // 动态标签
  private dynamicTags = ['标签1', '标签2', '标签3']
  // 按钮组名称
  private buttonData = [
    { label: '操作一', name: 'op1' },
    { label: '操作二', name: 'op2' },
    { label: '操作三', name: 'op3' },
    { label: '主操作', name: 'op--main' },
  ]

  private activeName = 'a'

  /**
   * 页面Mounted
   */
  private mounted() {
    this.getData()
  }

  /**
   * 获取详情数据
   */
  private async getData() {
    try {
      this.loading = true
      // 一般是从路由里拿id
      const params = {
        id: this.$route.params.id,
      }
      const res = await getProDetail1(params)
      this.ProDetail1Info = res.data
    } catch (e) {
      console.error(e)
    } finally {
      this.loading = false
    }
  }
}
</script>
