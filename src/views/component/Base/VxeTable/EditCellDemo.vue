<!--
 * @Author: 朱玉豆
 * @Date: 2023-05-18 14:27:50
 * @LastEditors: 朱玉豆
 * @LastEditTime: 2023-05-29 17:35:48
 * @Description:
-->
<template>
  <div class="edit-cell-demo">
    <cell-tools
      id="celltools"
      :style="{ display: 'none' }"
      :cell-config="selectCell"
      @update="updateTableData"
    />
    <cell-remarks-pop id="cellremarks" :style="{ display: 'none' }" :cell-config="hoverCell" />
    <el-button class="operate" @click="handleSaveTable">保存表格</el-button>
    <vxe-table
      ref="xTable"
      border
      resizable
      align="center"
      :print-config="{}"
      :column-config="{ width: 90 }"
      :data="tableData"
      :cell-style="setCellStyle"
      :cell-class-name="setCellClassName"
      @cell-mouseenter="handleCellMouseenterEvent"
      @cell-mouseleave="handleCellMouseenterLeave"
      @cell-click="handleCellClick"
    >
      <vxe-column field="a" title="分类">
        <template #default="{ row }">{{ row.a.value }}</template>
      </vxe-column>
      <vxe-column field="b" title="经营指标">
        <template #default="{ row }">{{ row.b.value }}</template>
      </vxe-column>
      <vxe-column field="c" title="指标类型">
        <template #default="{ row }">{{ row.c.value }}</template>
      </vxe-column>
      <vxe-colgroup field="d" title="分类名称">
        <vxe-column field="e" title="全年总计">
          <template #default="{ row }">{{ row.e.value }}</template>
        </vxe-column>
        <vxe-column field="f" title="1月">
          <template #default="{ row }">{{ row.f.value }}</template>
        </vxe-column>
        <vxe-column field="g" title="2月"
          ><template #default="{ row }">{{ row.g.value }}</template>
        </vxe-column>
        <vxe-column field="h" title="3月">
          <template #default="{ row }">{{ row.h.value }}</template></vxe-column
        >
        <vxe-column field="i" title="4月"
          ><template #default="{ row }">{{ row.i.value }}</template>
        </vxe-column>
        <vxe-column field="j" title="5月"
          ><template #default="{ row }">{{ row.j.value }}</template>
        </vxe-column>
        <vxe-column field="k" title="6月"
          ><template #default="{ row }">{{ row.k.value }}</template></vxe-column
        >
        <vxe-column field="l" title="7月"
          ><template #default="{ row }">{{ row.l.value }}</template></vxe-column
        >
        <vxe-column field="m" title="8月"
          ><template #default="{ row }">{{ row.m.value }}</template></vxe-column
        >
        <vxe-column field="n" title="9月"
          ><template #default="{ row }">{{ row.n.value }}</template></vxe-column
        >
        <vxe-column field="o" title="10月"
          ><template #default="{ row }">{{ row.o.value }}</template></vxe-column
        >
        <vxe-column field="p" title="11月"
          ><template #default="{ row }">{{ row.p.value }}</template></vxe-column
        >
        <vxe-column field="q" title="12月"
          ><template #default="{ row }">{{ row.q.value }}</template></vxe-column
        >
      </vxe-colgroup>
    </vxe-table>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import tippy from 'tippy.js'
import 'tippy.js/dist/tippy.css'
import 'tippy.js/themes/light.css'
import Variables from '@cutedesign/ui/style/themes/default/index.scss'
import CellTools from './component/CellTools.vue'
import CellRemarksPop from './component/CellRemarksPop.vue'
import { CellConfig, EditTableCellType } from './types'

@Component({
  components: { CellTools, CellRemarksPop },
  name: 'EditCellDemo',
})
export default class extends Vue {
  tableData: Array<EditTableCellType>
  popInstance: any
  remarkPopInstance: any
  template: HTMLElement
  remarksTemplate: HTMLElement
  defaultData = {
    value: '',
    config: {
      fillColor: Variables.colorBg2,
      bold: 'normal',
      italic: 'normal',
      remarks: [''],
      fontColor: Variables.colorNeutral10,
    },
  }
  selectCell: CellConfig = this.defaultData
  hoverCell: CellConfig = this.defaultData

  /**
   * 页面created
   */
  private created() {
    this.loadList()
  }
  loadList() {
    const list = []
    for (let index = 0; index < 10; index++) {
      list.push({
        a: {
          value: 'a' + index,
          key: `a_${index}`,
        },
        b: {
          value: 'b' + index,
          key: `b_${index}`,
        },
        c: {
          value: 'c' + index,
          key: `c_${index}`,
        },
        d: {
          value: 'd' + index,
          key: `d_${index}`,
        },
        e: {
          value: 'e' + index,
          key: `e_${index}`,
        },
        f: {
          value: 'f' + index,
          key: `f_${index}`,
        },
        g: {
          value: 'g' + index,
          key: `g_${index}`,
        },
        h: {
          value: 'h' + index,
          key: `h_${index}`,
        },
        i: {
          value: 'i' + index,
          key: `i_${index}`,
        },
        j: {
          value: 'j' + index,
          key: `j_${index}`,
        },
        k: {
          value: 'k' + index,
          key: `k_${index}`,
        },
        l: {
          value: 'l' + index,
          key: `l_${index}`,
        },
        m: {
          value: 'm' + index,
          key: `m_${index}`,
        },
        n: {
          value: 'n' + index,
          key: `n_${index}`,
        },
        o: {
          value: 'o' + index,
          key: `o_${index}`,
        },
        p: {
          value: 'p' + index,
          key: `p_${index}`,
        },
        q: {
          value: 'q' + index,
          key: `q_${index}`,
        },
      })
    }
    list[2].a.config = {
      fillColor: '#DF0428',
      fontColor: '#FFF',
      bold: 'bold',
      italic: 'italic',
      remarks: [
        '这里是备注内容这里是备注内容这里是备注内容这里是备注1',
        '这里是备注内容这里是备注内容这里是备注内容这里是备注2',
      ],
    }

    list[3].e.config = {
      fillColor: '#91BAFF',
      fontColor: '#000',
      bold: 'bold',
      italic: 'italic',
      remarks: ['aaa2', 'bbb2'],
    }
    this.tableData = list
  }

  setCellStyle({ column, row }) {
    const cellData = row[column.property]
    if (cellData.config) {
      const { fillColor, fontColor, bold, italic } = cellData.config
      return {
        color: fontColor,
        background: fillColor,
        'font-weight': bold,
        'font-style': italic,
      }
    }
  }

  setCellClassName({ row, column }) {
    const cellData = row[column.property]
    if (cellData.config?.remarks && cellData.config?.remarks?.length) {
      return 'remarks'
    }
  }

  createTippy(target, template) {
    if (this.popInstance) {
      this.hideTippy()
    }
    this.popInstance = tippy(target, {
      content: template,
      arrow: false,
      allowHTML: true,
      trigger: 'manual',
      placement: 'bottom-start',
      theme: 'light tools',
      appendTo: document.body,
      // 鼠标放在提示中提示不消失
      interactive: true,
      zIndex: 200,
    })
    this.popInstance.show()
  }
  createHoverTippy(target, template) {
    if (this.remarkPopInstance) {
      this.hideHoverTippy()
    }
    if (this.popInstance) {
      this.hideTippy()
    }
    this.remarkPopInstance = tippy(target, {
      content: template,
      arrow: true,
      allowHTML: true,
      trigger: 'manual',
      placement: 'right-end',
      appendTo: document.body,
      theme: 'tools',
      // 鼠标放在提示中提示不消失
      interactive: true,
      zIndex: 200,
    })
    this.remarkPopInstance.show()
  }

  hideTippy() {
    this.popInstance.hide()
    this.popInstance.unmount()
    this.popInstance.destroy()
    this.popInstance = null
  }

  hideHoverTippy() {
    this.remarkPopInstance.hide()
    this.remarkPopInstance.unmount()
    this.remarkPopInstance.destroy()
    this.remarkPopInstance = null
  }

  // 单元格点击处理
  handleCellClick({ row, column, $event }) {
    let target = $event.target
    // 此处获取到的target是单元格文本内容标签或者单元格标签，这里统一为都是基于单元格内容创建tippy
    if (target.className !== 'vxe-cell') {
      // 单元格标签的时候，取其子元素
      target = $event.target.firstChild
    }
    this.selectCell = row[column.property]
    const template = document.getElementById('celltools')
    if (template) {
      this.template = template
      template.style.display = 'block'
      this.createTippy(target, template)
    } else {
      // 此处是因为template会随着hide的时候销毁掉，所以只存在一次
      let template = this.template
      this.createTippy(target, template)
    }
  }

  // 单元格鼠标移入处理
  handleCellMouseenterEvent({ row, column, $event }) {
    this.hoverCell = row[column.property]
    if (this.hoverCell?.config && this.hoverCell?.config?.remarks?.length) {
      const remarksTemplate = document.getElementById('cellremarks')
      if (remarksTemplate) {
        this.remarksTemplate = remarksTemplate
        remarksTemplate.style.display = 'block'
        this.createHoverTippy($event.target, remarksTemplate)
      } else {
        // 此处是因为template会随着hide的时候销毁掉，所以只存在一次
        let remarksTemplate = this.remarksTemplate
        this.createHoverTippy($event.target, remarksTemplate)
      }
    }
  }

  handleCellMouseenterLeave({ row, column }) {
    const cellData = row[column.property]
    if (cellData.config && cellData.config?.remarks?.length) {
      this.hideHoverTippy()
    }
  }

  updateTableData(data) {
    const { key, config } = data
    const [property, index] = key.split('_')
    this.tableData[index][property].config = config
    this.$forceUpdate()
    // this.$set(this.tableData, index, this.tableData[index])
    // console.log(data, this.tableData, 'in father')
  }

  handleSaveTable() {
    console.log(this.tableData, 'save')
  }
}
</script>
<style lang="scss" scoped>
.edit-cell-demo {
  ::v-deep {
    .vxe-table--render-default .vxe-body--row.row--hover {
      background-color: $color-bg-1; // 去掉row的hover颜色
    }
    .vxe-table--render-default .vxe-body--row > :hover {
      background: $neutral-2;
    }
  }
  ::v-deep {
    .remarks {
      position: relative;
      &:before {
        content: '';
        top: -6px;
        right: -6px;
        position: absolute;
        border-width: 6px;
        border-style: solid;
        border-color: transparent $ruby-base transparent transparent;
        transform: rotate(135deg);
      }
    }
  }
  .operate {
    margin-bottom: $margin-6x;
  }
}
</style>
<!-- 覆盖样式 -->
<style lang="scss">
$tippy-arrow-border-width: 9px 11px 9px 0;
$tippy-arrow-left: -10px;
.tippy-box[data-theme~='tools'] {
  background: $color-bg-1;
  box-shadow: $shadow-2;
  > .tippy-content {
    padding: 0;
  }
  > .tippy-arrow {
    color: $neutral-8;
    &:before {
      left: $tippy-arrow-left;
      border-width: $tippy-arrow-border-width;
    }
  }
}
</style>
