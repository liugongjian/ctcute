<template>
  <div>
    <el-card class="pro-detail4">
      <cute-titled-block title="模块标题">
        <template #content>
          <el-descriptions :column="2" :colon="false">
            <el-descriptions-item>
              <template slot="label"> 内部标识符 </template>
              {{ proDetail4 && proDetail4.basic && proDetail4.basic.innerIdentity }}
            </el-descriptions-item>
            <el-descriptions-item>
              <template slot="label"> 标识符 </template>
              <span class="content--alert">{{
                proDetail4 && proDetail4.basic && proDetail4.basic.showIdentity
              }}</span>
            </el-descriptions-item>
            <el-descriptions-item>
              <template slot="label"> 中文名称 </template>
              {{ proDetail4 && proDetail4.basic && proDetail4.basic.chineseName }}
            </el-descriptions-item>
            <el-descriptions-item>
              <template slot="label"> 英文名称 </template>
              {{ proDetail4 && proDetail4.basic && proDetail4.basic.englishName }}
            </el-descriptions-item>
            <el-descriptions-item>
              <template slot="label"> 语境</template>
              {{ proDetail4 && proDetail4.basic && proDetail4.basic.context }}
            </el-descriptions-item>
            <el-descriptions-item>
              <template slot="label"> 版本 </template>
              {{ proDetail4 && proDetail4.basic && proDetail4.basic.version }}
            </el-descriptions-item>
          </el-descriptions>
        </template>
      </cute-titled-block>
      <cute-titled-block title="模块标题">
        <template #content>
          <el-descriptions :column="2" :colon="false">
            <el-descriptions-item>
              <template slot="label"> 内部标识符 </template>
              {{ proDetail4 && proDetail4.basic && proDetail4.basic.innerIdentity }}
            </el-descriptions-item>
            <el-descriptions-item>
              <template slot="label"> 标识符 </template>
              <span class="content--alert">{{
                proDetail4 && proDetail4.basic && proDetail4.basic.showIdentity
              }}</span>
            </el-descriptions-item>
            <el-descriptions-item>
              <template slot="label"> 中文名称 </template>
              {{ proDetail4 && proDetail4.basic && proDetail4.basic.chineseName }}
            </el-descriptions-item>
            <el-descriptions-item>
              <template slot="label"> 英文名称 </template>
              {{ proDetail4 && proDetail4.basic && proDetail4.basic.englishName }}
            </el-descriptions-item>
            <el-descriptions-item>
              <template slot="label"> 语境</template>
              {{ proDetail4 && proDetail4.basic && proDetail4.basic.context }}
            </el-descriptions-item>
            <el-descriptions-item>
              <template slot="label"> 版本 </template>
              {{ proDetail4 && proDetail4.basic && proDetail4.basic.version }}
            </el-descriptions-item>
          </el-descriptions>
        </template>
      </cute-titled-block>
    </el-card>
    <el-card class="pro-detail4">
      <cute-titled-block title="模块标题">
        <template #content>
          <el-descriptions :column="2" :colon="false">
            <el-descriptions-item>
              <template slot="label"> 内部标识符 </template>
              {{ proDetail4 && proDetail4.basic && proDetail4.basic.innerIdentity }}
            </el-descriptions-item>
            <el-descriptions-item>
              <template slot="label"> 标识符 </template>
              <span class="content--alert">{{
                proDetail4 && proDetail4.basic && proDetail4.basic.showIdentity
              }}</span>
            </el-descriptions-item>
            <el-descriptions-item>
              <template slot="label"> 中文名称 </template>
              {{ proDetail4 && proDetail4.basic && proDetail4.basic.chineseName }}
            </el-descriptions-item>
            <el-descriptions-item>
              <template slot="label"> 英文名称 </template>
              {{ proDetail4 && proDetail4.basic && proDetail4.basic.englishName }}
            </el-descriptions-item>
            <el-descriptions-item>
              <template slot="label"> 语境</template>
              {{ proDetail4 && proDetail4.basic && proDetail4.basic.context }}
            </el-descriptions-item>
            <el-descriptions-item>
              <template slot="label"> 版本 </template>
              {{ proDetail4 && proDetail4.basic && proDetail4.basic.version }}
            </el-descriptions-item>
            <el-descriptions-item :span="2">
              <template slot="label"> 同义名称 </template>
              {{ proDetail4 && proDetail4.basic && proDetail4.basic.synonyms }}
            </el-descriptions-item>
          </el-descriptions>
        </template>
      </cute-titled-block>
      <cute-titled-block title="模块标题">
        <template #content>
          <el-descriptions :column="2" :colon="false">
            <el-descriptions-item>
              <template slot="label"> 内部标识符 </template>
              {{ proDetail4 && proDetail4.basic && proDetail4.basic.innerIdentity }}
            </el-descriptions-item>
            <el-descriptions-item>
              <template slot="label"> 标识符 </template>
              <span class="content--alert">{{
                proDetail4 && proDetail4.basic && proDetail4.basic.showIdentity
              }}</span>
            </el-descriptions-item>
            <el-descriptions-item>
              <template slot="label"> 中文名称 </template>
              {{ proDetail4 && proDetail4.basic && proDetail4.basic.chineseName }}
            </el-descriptions-item>
            <el-descriptions-item>
              <template slot="label"> 英文名称 </template>
              {{ proDetail4 && proDetail4.basic && proDetail4.basic.englishName }}
            </el-descriptions-item>
            <el-descriptions-item>
              <template slot="label"> 语境</template>
              {{ proDetail4 && proDetail4.basic && proDetail4.basic.context }}
            </el-descriptions-item>
            <el-descriptions-item>
              <template slot="label"> 版本 </template>
              {{ proDetail4 && proDetail4.basic && proDetail4.basic.version }}
            </el-descriptions-item>
            <el-descriptions-item :span="2">
              <template slot="label"> 同义名称 </template>
              {{ proDetail4 && proDetail4.basic && proDetail4.basic.synonyms }}
            </el-descriptions-item>
          </el-descriptions>
        </template>
      </cute-titled-block>
    </el-card>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { getProDetail } from '@/api/proDetail4'
import * as ProDetail4 from '@/types/ProDetail4'

@Component({
  name: 'ProDetail4',
})
export default class extends Vue {
  //跳转携带的name
  private detail = '服务管理'

  // 复杂详情页2信息
  private proDetail4: ProDetail4.ProDetailInfo4 = null

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
      this.proDetail4 = res.data
    } catch (e) {
      this.$message.error(e)
    }
  }
}
</script>
<style lang="scss" scoped>
.status-dot {
  &--1 {
    background: $color-master;
  }

  &--2 {
    background: $color-success;
  }
}
.pro-detail4:nth-child(2) {
  margin-top: 20px;
}
</style>
