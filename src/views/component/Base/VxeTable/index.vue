<!--
 * @Author: fanzhengle
 * @Date: 2022-12-03 11:18:32
 * @LastEditors: 朱玉豆
 * @LastEditTime: 2023-04-25 09:43:03
 * @Description:
-->
<template>
  <div>
    <!-- 多个DEMO请复制此段 -->
    <div class="component__container">
      <h1>VxeTable / 复杂表格</h1>
      <p>
        复杂表格的的诞生,是为了应对项目中需要对具体应用提供表格的复杂功能的场景.
        其中封装了若干表格和数据编辑的逻辑或行为，依托于复杂表格的能力, 其具有多种不同的形态, 以下将进行展示
      </p>

      <h4>何时使用</h4>
      <p>当你的表格需要与服务端进行交互或者需要多种单元格样式时, 复杂表格是不二选择.</p>

      <h3>高亮行/列</h3>
      <p>
        点击高亮当前行或者列,鼠标悬浮时提示当前行(整行)或者列(列表头)
        行数较多需要,查阅时候需要着重强调,或者方便查阅的时候使用
      </p>
      <h3>复杂列设置</h3>
      <component-demo path="@/views/component/Base/VxeTable/EditTableDemo7.vue">
        <demo8></demo8>
      </component-demo>
      <h3>高亮列</h3>
      <component-demo path="@/views/component/Base/VxeTable/Demo2.vue">
        <demo2></demo2>
      </component-demo>
      <h3>高亮行</h3>
      <component-demo path="@/views/component/Base/VxeTable/Demo3.vue">
        <demo3></demo3>
      </component-demo>

      <h3>单选表格</h3>
      <p>
        供行单选,并且可以配置能否选择具体行,能否取消选择 可配合工具架中的其他功能使用,
        递交选择的表单,或者是进行批量操作等
      </p>
      <component-demo path="@/views/component/Base/VxeTable/Demo4.vue">
        <demo4></demo4>
      </component-demo>

      <h3>冻结单元格</h3>
      <p>
        提供固定冻结单元格,实现如汇总计算等表格特性, 可能出现于行首\行尾\列首\列尾的若干单元格
        使用中类似excel"冻结单元格"功能
      </p>
      <component-demo path="@/views/component/Base/VxeTable/Demo5.vue">
        <demo5></demo5>
      </component-demo>

      <h3>合并行&合并列</h3>
      <p>提供合并单元格的呈现效果</p>
      <component-demo path="@/views/component/Base/VxeTable/Demo6.vue">
        <demo6></demo6>
      </component-demo>

      <h3>树形表格</h3>
      <p>提供折叠部份表格, 扩展行与行之间父子关系的功能</p>
      <component-demo path="@/views/component/Base/VxeTable/Demo7.vue">
        <demo7></demo7>
      </component-demo>

      <h3>可编辑表格</h3>
      <p>可以使用若干方式对表格进行编辑,视不同需求, 对使用者的侵入程度会有差异</p>
      <h3>弹框编辑</h3>
      <p>点击编辑操作后,在弹窗中修改对应行中的内容, 侵入程度最强,提示最强烈</p>
      <component-demo path="@/views/component/Base/VxeTable/EditTableDemo1.vue">
        <edit-table-demo1></edit-table-demo1>
      </component-demo>
      <h3>手动编辑</h3>
      <p>点击编辑操作后, 进入可编辑状态,将单元格激活为输入框或选择框. 侵入程度中等,提示较明显</p>
      <component-demo path="@/views/component/Base/VxeTable/EditTableDemo2.vue">
        <edit-table-demo2></edit-table-demo2>
      </component-demo>
      <h3>单击编辑</h3>
      <p>
        单击单元格可直接激活输入框,可以在列中标注可编辑icon来进行视觉提示, 侵入程度低,提示不太明显,
        一般仅在需要连续输入数据的场景使用
      </p>
      <p>
        可编辑表格的不同编辑样式均可适配下拉选单和数字拨盘, 适配输入框默认占位符,
        同时可以对行进行校验,如权限,字符范围,可以禁用部分单元格,同时进行鼠标悬浮提示和或示警
      </p>
      <component-demo path="@/views/component/Base/VxeTable/EditTableDemo3.vue">
        <edit-table-demo3></edit-table-demo3>
      </component-demo>
      <h3>编辑表格-单元格占位</h3>
      <component-demo path="@/views/component/Base/VxeTable/EditTableDemo5.vue">
        <edit-table-demo4></edit-table-demo4>
      </component-demo>
      <h3>编辑表格-禁用编辑行</h3>
      <p>何时使用：设置 edit-config 的 activeMethod 方法判断单元格是否禁用，例如：限制第一行不允许编辑</p>
      <component-demo path="@/views/component/Base/VxeTable/EditTableDemo5.vue">
        <edit-table-demo5></edit-table-demo5>
      </component-demo>
      <h3>编辑表格-禁用编辑单元格</h3>
      <p>何时使用：配合 edit-actived 事件，使用组件方式禁用编辑</p>
      <component-demo path="@/views/component/Base/VxeTable/EditTableDemo6.vue">
        <edit-table-demo6></edit-table-demo6>
      </component-demo>
      <h3>编辑表格-展开行</h3>
      <component-demo path="@/views/component/Base/VxeTable/EditTableDemo7.vue">
        <edit-table-demo7></edit-table-demo7>
      </component-demo>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import ComponentDemo from '@/layout/components/ComponentDemo/index.vue'
import Demo2 from './Demo2.vue'
import Demo3 from './Demo3.vue'
import Demo4 from './Demo4.vue'
import Demo5 from './Demo5.vue'
import Demo6 from './Demo6.vue'
import Demo7 from './Demo7.vue'
import Demo8 from './Demo8.vue'
import EditTableDemo1 from './EditTableDemo1.vue'
import EditTableDemo2 from './EditTableDemo2.vue'
import EditTableDemo3 from './EditTableDemo3.vue'
import EditTableDemo4 from './EditTableDemo4.vue'
import EditTableDemo5 from './EditTableDemo5.vue'
import EditTableDemo6 from './EditTableDemo6.vue'
import EditTableDemo7 from './EditTableDemo7.vue'

@Component({
  name: 'CuteVxeTable',
  components: {
    EditTableDemo7,
    EditTableDemo6,
    EditTableDemo5,
    EditTableDemo4,
    EditTableDemo3,
    EditTableDemo2,
    EditTableDemo1,
    Demo8,
    Demo7,
    Demo6,
    Demo5,
    Demo4,
    Demo3,
    Demo2,
    ComponentDemo,
  },
})
export default class extends Vue {}
</script>
<style lang="scss" scoped></style>
