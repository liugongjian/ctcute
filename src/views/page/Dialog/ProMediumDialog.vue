<template>
  <el-card>
    <h2>特殊弹窗-中</h2>
    <div>
      <p>查看日志，宽度560px</p>
      <el-button type="primary" @click="handleClick">特殊弹窗-中</el-button>
    </div>
    <el-dialog
      class="log-dialog"
      :title="title"
      :visible="visible"
      :close-on-click-modal="false"
      @close="close"
    >
      <template #title>
        <span class="el-dialog__title">{{ title }}</span>
        <div style="position: absolute; right: 40px; top: 20px">
          <el-button type="text" @click="$emit('download')"
            ><svg-icon name="cloud-download" width="14" height="14"
          /></el-button>
          <el-button type="text" @click="$emit('reload')"
            ><svg-icon name="reload" width="14" height="14"
          /></el-button>
          <el-button type="text" @click="openFullscreen"
            ><svg-icon name="fullscreen" width="14" height="14"
          /></el-button>
        </div>
      </template>
      <el-scrollbar
        ref="scrollBar"
        class="log-dialog--content"
        :wrap-style="{ maxHeight: isFullscreen ? '100%' : '70vh', width: '100%' }"
      >
        <slot name="content">
          <pre class="log-dialog--pre">
            {{
              log ||
              `load jdbc. 'dvds. dvds_ datasource' options and
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
eries= true"`
            }}
          </pre>
        </slot>
      </el-scrollbar>
      <div class="log-dialog--footer">
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
  @Prop({ default: '' }) readonly log: string
  @Ref('scrollBar') private readonly scrollBar!: Vue & { update: () => void }

  private isFullscreen = false
  private title = '特殊弹窗-中示例'
  private visible = false

  @Watch('visible')
  async onVisibleChange() {
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
