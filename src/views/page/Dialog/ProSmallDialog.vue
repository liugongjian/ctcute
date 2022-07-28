<!--
 * @Author: 吴博聪
 * @Date: 2022-07-14 19:41:25
 * @LastEditors: 吴博聪
 * @LastEditTime: 2022-07-18 13:54:59
 * @Description: 复杂小弹窗
-->
<template>
  <el-card>
    <h2>特殊弹窗-小</h2>
    <div>
      <p>查看信息，宽度480px</p>
      <el-button type="primary" @click="handleClick">特殊弹窗-小</el-button>
    </div>
    <el-dialog
      class="info-dialog"
      :title="title"
      :visible="visible"
      :close-on-click-modal="false"
      @close="close"
    >
      <el-scrollbar class="info-dialog--content" :wrap-style="{ maxHeight: '483px', width: '100%' }">
        <slot name="content">
          <pre class="info-dialog--pre">
            {{ log }}
          </pre>
        </slot>
      </el-scrollbar>
      <div class="info-dialog--footer">
        <el-button @click="close">{{ cancelButtonText }}</el-button>
        <el-button type="primary">{{ confirmButtonText }}</el-button>
      </div>
    </el-dialog>
  </el-card>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component({
  name: 'ProSmallDialog',
})
export default class extends Vue {
  @Prop({ default: '取消' }) readonly cancelButtonText: string
  @Prop({ default: '确定' }) readonly confirmButtonText: string
  @Prop({
    default: `load jdbc. 'dvds. dvds_ datasource' options and
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

  private title = '特殊弹窗-小 示例'
  private visible = false

  private close() {
    this.visible = false
  }
  private confirm() {
    this.visible = false
  }

  private handleClick() {
    this.visible = true
  }
}
</script>
