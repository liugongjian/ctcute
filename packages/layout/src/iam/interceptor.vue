<template>
  <section class="ct-section-wrap">
    你需要输入更多的信息才能进入页面

    <div class="ct-box">
      <h3 v-if="!loading">
        <template v-if="workspaceList.length > 0"> 请选择一个工作区进入 </template>
        <template v-else>
          暂无工作区，请前往
          <a href="https://vip.ctcdn.cn/h5/iam/index.html#/profile/workspace/index">IAM个人中心</a> 进行操作
        </template>
      </h3>

      <el-table
        v-if="workspaceList.length > 0"
        v-loading="loading"
        :data="workspaceList"
        stripe
        :show-header="false"
      >
        <el-table-column min-width="225px">
          <template slot-scope="scope">
            <div class="brief">
              <img v-if="scope.row.iconPath" :src="scope.row.iconPath" />
              <i v-else class="el-icon-user" />
              <div class="brief-left">
                <p class="brief-name">{{ scope.row.name }}</p>
                <p v-if="scope.row.ucode" class="brief-descr">{{ scope.row.ucode }}</p>
              </div>
            </div>
          </template>
        </el-table-column>
        <el-table-column min-width="180px">
          <template slot-scope="scope">
            <el-tag class="w-tag" type="primary">{{ scope.row.userType }}</el-tag>
            <el-tag v-if="scope.row.userState === 'black'" class="w-tag" type="info" title="您已被拉入黑名单">
              黑名单
            </el-tag>
            <el-tag v-if="scope.row.state === 'frozen'" class="w-tag" type="info" title="工作区已冻结">
              冻结
            </el-tag>
          </template>
        </el-table-column>
        <el-table-column min-width="250px">
          <template slot-scope="{ row }">
            <el-button type="success" size="small" @click="goInside(row)">进入</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

interface WorkspaceItem {
  name: string
  ucode: string
  userState: string
  workspaceId: string
  iconPath: string
}

@Component({
  name: 'interceptor',
})
export default class extends Vue {
  private loading = false
  private workspaceList: WorkspaceItem[] = []

  private created() {
    this.getMyWorkspaceId()
  }

  private async getMyWorkspaceId() {
    this.loading = true
    const { list = [] }: { list: WorkspaceItem[] } = await this.$ctFetch('/iam/gw/self/workspace/List', {
      data: {
        offset: 0,
        limit: 999,
      },
      cache: true,
    })

    this.workspaceList = list.filter(item => ['member', 'manager', 'owner'].indexOf(item.userState) >= 0)

    // 仅有一个工作区的用户（包括子账户）给与主动跳转
    if (this.workspaceList.length === 1) {
      this.goInside(this.workspaceList[0])
    }
  }
  goInside(row: WorkspaceItem) {
    // 不允许通过浏览器后退重新进入这个页面
    this.$router.replace({
      path: '/',
      query: {
        workspaceId: row.workspaceId,
      },
    })
  }
}
</script>

<style lang="scss" scoped>
.ct-section-wrap {
  height: 100%; // 定高，出现滚动条
  display: flex;
  flex-direction: column;

  ::v-deep .el-scrollbar {
    margin: 10px 0; // 上下留白
    flex: 1; // 自适应高度
  }
  ::v-deep .el-scrollbar__wrap {
    .el-scrollbar__view {
      padding: 0 10px; // 内容区固定一个间距出来
      height: 100%;
    }
    overflow-x: hidden;
  }
}

.ct-box {
  padding: 16px;
  width: 100%;
  // 注意：不要给 ct-box hight:100% 小屏下展示会有一定的问题，交给自适应
  min-height: 100%; // 为了各页面内容区都能铺满页面，多个 ct-box 一起使用时局部定义
  background-color: $g-color-white;
  box-shadow: 2px 1px 1px rgba(39, 35, 35, 0.13);
  transition: all ease 0.4s;
}

.chooser-block {
  margin-top: 20px;
}
.redirect-button {
  margin-left: 20px;
}

::v-deep {
  .el-table td {
    padding: 12px 0;
  }
}

.brief {
  display: table;
  & > img {
    width: 50px;
    height: 50px;
    min-width: 50px;
    border-radius: 50%;
    display: table-cell;
    border: none;
    vertical-align: middle;
  }
  .el-icon-user {
    font-size: 50px;
    display: table-cell;
    vertical-align: middle;
  }
  .brief-left {
    padding-left: 20px;
    display: table-cell;
    vertical-align: middle;
  }
  .brief-descr {
    margin-top: 2px;
  }
}
</style>
