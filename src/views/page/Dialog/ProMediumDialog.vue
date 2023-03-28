<!--
 * @Author: 吴博聪
 * @Date: 2022-07-14 19:41:25
 * @LastEditors: zhulh
 * @LastEditTime: 2023-03-24 14:50:27
 * @Description: 复杂中弹窗
-->
<template>
  <el-card class="pro-dialog">
    <h2>特殊弹窗-中</h2>
    <div>
      <p>查看日志，宽度560px</p>
      <el-button type="primary" @click="handleClick">特殊弹窗-中</el-button>
    </div>
    <el-dialog
      width="560px"
      :title="title"
      :visible="visible"
      :close-on-click-modal="false"
      custom-class="dialog"
      @close="close"
    >
      <template #title>
        <span class="el-dialog__title">{{ title }}</span>
        <div class="pro-dialog__header__buttons">
          <el-button :border="false" square icon="cloud-download" @click="$emit('download')"></el-button>
          <el-button :border="false" square icon="reload" @click="$emit('reload')"></el-button>
          <el-button :border="false" square icon="fullscreen" @click="openFullscreen"></el-button>
        </div>
      </template>
      <pre class="pro-dialog__pre">
        {{ log }}
      </pre>
      <div slot="footer">
        <el-button @click="close">{{ cancelButtonText }}</el-button>
        <el-button type="primary">{{ confirmButtonText }}</el-button>
      </div>
    </el-dialog>
  </el-card>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch, Ref } from 'vue-property-decorator'

@Component({
  name: 'ProMediumDialog',
})
export default class extends Vue {
  @Prop({ default: '取消' }) readonly cancelButtonText: string
  @Prop({ default: '确定' }) readonly confirmButtonText: string
  @Prop({
    default: `
   load jdbc. 'dvds. dvds_ datasource' options and
   driver='com.mysql.jdbc.Driver"
   and url# "jdbc:mysql://10.0.0.11:3306/dvds?use
   and dbtable=" dvds' . 'dvds_ datasource'
   and user= "root"
   and password="123456"
   as step22;
   select 22 as rowKey, 'status' as key,max(status)
   from step22 as fromtable22;save append fromt
   jdbc.' dps. _row. _offset' options and driver= "com
   and url= "jdbc:mysql://10.0.0.11:3306/data_ _plat
   useUnicode=true&characterEncoding=utf-
   8&useSSL=false&zeroDate' TimeBehavior=conv
   eries= true
   load jdbc. 'dvds. dvds_ datasource' options and
   driver='com.mysql.jdbc.Driver"
   and url# "jdbc:mysql://10.0.0.11:3306/dvds?use
   and dbtable=" dvds' . 'dvds_ datasource'
   and user= "root"
   and password="123456"
   as step22;
   select 22 as rowKey, 'status' as key,max(status)
   from step22 as fromtable22;save append fromt
   jdbc.' dps. _row. _offset' options and driver= "com
   and url= "jdbc:mysql://10.0.0.11:3306/data_ _plat
   useUnicode=true&characterEncoding=utf-
   8&useSSL=false&zeroDate' TimeBehavior=conv
   eries= true"load jdbc. 'dvds. dvds_ datasource' options and
   driver='com.mysql.jdbc.Driver"
   and url# "jdbc:mysql://10.0.0.11:3306/dvds?use
   and dbtable=" dvds' . 'dvds_ datasource'
   and user= "root"
   and password="123456"
   as step22;
   select 22 as rowKey, 'status' as key,max(status)
   from step22 as fromtable22;save append fromt
   jdbc.' dps. _row. _offset' options and driver= "com
   and url= "jdbc:mysql://10.0.0.11:3306/data_ _plat
   useUnicode=true&characterEncoding=utf-
   8&useSSL=false&zeroDate' TimeBehavior=conv
   eries= true
   load jdbc. 'dvds. dvds_ datasource' options and
   driver='com.mysql.jdbc.Driver"
   and url# "jdbc:mysql://10.0.0.11:3306/dvds?use
   and dbtable=" dvds' . 'dvds_ datasource'
   and user= "root"
   and password="123456"
   as step22;
   select 22 as rowKey, 'status' as key,max(status)
   from step22 as fromtable22;save append fromt
   jdbc.' dps. _row. _offset' options and driver= "com
   and url= "jdbc:mysql://10.0.0.11:3306/data_ _plat
   useUnicode=true&characterEncoding=utf-
   8&useSSL=false&zeroDate' TimeBehavior=conv
   eries= true"load jdbc. 'dvds. dvds_ datasource' options and
   driver='com.mysql.jdbc.Driver"
   and url# "jdbc:mysql://10.0.0.11:3306/dvds?use
   and dbtable=" dvds' . 'dvds_ datasource'
   and user= "root"
   and password="123456"
   as step22;
   select 22 as rowKey, 'status' as key,max(status)
   from step22 as fromtable22;save append fromt
   jdbc.' dps. _row. _offset' options and driver= "com
   and url= "jdbc:mysql://10.0.0.11:3306/data_ _plat
   useUnicode=true&characterEncoding=utf-
   8&useSSL=false&zeroDate' TimeBehavior=conv
   eries= true
   load jdbc. 'dvds. dvds_ datasource' options and
   driver='com.mysql.jdbc.Driver"
   and url# "jdbc:mysql://10.0.0.11:3306/dvds?use
   and dbtable=" dvds' . 'dvds_ datasource'
   and user= "root"
   and password="123456"
   as step22;
   select 22 as rowKey, 'status' as key,max(status)
   from step22 as fromtable22;save append fromt
   jdbc.' dps. _row. _offset' options and driver= "com
   and url= "jdbc:mysql://10.0.0.11:3306/data_ _plat
   useUnicode=true&characterEncoding=utf-
   8&useSSL=false&zeroDate' TimeBehavior=conv
   eries= true"`,
  })
  readonly log: string
  @Ref('scrollBar') private readonly scrollBar!: Vue & { update: () => void }

  private isFullscreen = false
  private title = '中弹窗(查看日志)'
  private visible = false

  @Watch('visible')
  private async onVisibleChange() {
    await this.$nextTick()
    if (!this.scrollBar.$el.onfullscreenchange)
      this.scrollBar.$el.onfullscreenchange = async event => {
        this.isFullscreen = document.fullscreenElement === event.target
        this.scrollBar.update() // 手动触发滚动条高度更新
      }
  }

  private close() {
    this.visible = false
  }
  private confirm() {
    this.visible = false
  }

  private handleClick() {
    this.visible = true
  }

  private openFullscreen() {
    this.scrollBar.$el.requestFullscreen()
  }
}
</script>
<style lang="scss" scoped>
.pro-dialog {
  ::v-deep .dialog {
    height: 75vh;
  }

  &__header__buttons {
    position: absolute;
    top: $common-space-3x;
    right: $common-space * 14;

    .el-button + .el-button {
      margin: 0;
    }
  }

  &__pre {
    width: 100%;
    margin: 0;
    line-height: $line-height;
    background: $color-neutral-1;
  }
}
</style>
