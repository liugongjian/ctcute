<!--
 * @Author: 张凯军
 * @Date: 2023-05-04 22:03:32
 * @LastEditors: 张凯军
 * @LastEditTime: 2023-05-04 22:03:32
 * @Description: 
-->
<template>
  <div class="cuted-guide">
    <el-button type="primary" @click="openStartModal">打开开始弹窗</el-button>
    <StartModal
      :visible="startVisable"
      :title="startModalProps.title"
      :description="startModalProps.description"
      :product-list="startModalProps.productList"
      :step-list="startModalProps.stepList"
      :gather-list="startModalProps.gatherList"
    />
    <br />
    <br />
    <el-button type="primary" @click="openFinishModal">打开结束弹窗</el-button>
    <FinishModal
      :visible="finishVisable"
      :product-list="finishModalProps.productList"
      :step-list="finishModalProps.stepList"
    />
    <br />
    <br />
    <el-button id="step_1" type="primary" @click="startGuide">开始引导</el-button>
    <el-button id="step_2">Upload</el-button>
    <el-button id="step_3" type="primary">Save</el-button>
    <el-button id="step_4">...</el-button>
    <Guide ref="guide" :steps="steps" />
    <br />
    <br />
    <el-button id="step_1_auto" type="primary" @click="startAutoGuide">自动演示填写表单</el-button>
    <br />
    <br />
    <div id="step_1_auto_fix" :style="{ width: '720px' }">
      <el-form class="simple-form">
        <el-form-item id="step_2_auto" label="姓名">
          <el-input v-model="form.name" placeholder="请输入姓名" />
        </el-form-item>
        <el-form-item id="step_3_auto" label="年龄">
          <el-input v-model="form.age" placeholder="请输入年龄" />
        </el-form-item>
        <el-form-item id="step_4_auto" label="性别">
          <el-select v-model="form.sex">
            <el-option :value="0" label="男" />
            <el-option :value="1" label="女" />
          </el-select>
        </el-form-item>
        <el-form-item label="">
          <el-button id="step_5_auto" type="primary">提交</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script lang="ts">
import { Guide, StartModal, FinishModal } from 'cuted-guide'
import { Vue, Component, Ref } from 'vue-property-decorator'
import EMRIcon from './images/logo-EMR.svg'
import DWIcon from './images/logo-DataWings.svg'

@Component({
  name: 'Demo1',
  components: {
    Guide,
    StartModal,
    FinishModal,
  },
})
export default class extends Vue {
  @Ref('guide') private guideRef
  private steps = []
  private startVisable = false
  private finishVisable = false
  private startModalProps = {
    title: '一站式大数据离线分析',
    description:
      '开启后，所有获得分享链接的人都可以查看内容开启后，所有获得分享链接的人都可以查看内容开启后，所有获得分享链接的人都可以查看内容！',
    productList: [
      {
        icon: EMRIcon,
        title: '翼MR',
      },
      {
        icon: DWIcon,
        size: 28,
        title: 'DataWings',
      },
    ],
    stepList: ['数据集成', '数据治理', '数据开发', '数据集成', '数据治理', '数据开发'],
    gatherList: ['了解可视化数据开发流程', '支持多种播流格式，支持全网加速分发', '在线数据分析'],
  }

  private finishModalProps = {
    productList: [
      {
        icon: EMRIcon,
        title: '翼MR',
        status: '公测中',
        link: '',
      },
      {
        icon: DWIcon,
        size: 28,
        title: 'DataWings',
        status: '私有化',
      },
    ],
    stepList: [
      {
        title: '数据集成',
        link: '',
      },
      {
        title: '数据治理',
        link: '',
      },
      {
        title: '数据开发',
        link: '',
      },
      {
        title: '数据集成',
        link: '',
      },
      {
        title: '数据治理',
        link: '',
      },
      {
        title: '数据开发',
        link: '',
      },
    ],
  }

  private form = {
    name: '',
    age: '',
    sex: '',
  }

  /**
   * 开始引导
   */
  private startGuide() {
    this.$nextTick(() => {
      this.steps = [
        {
          element: '#step_1',
          popover: {
            moduleName: '模块1',
            totalSteps: '1',
            currentStep: '1',
            descriptionTitle: '描述标题1',
            descriptionDetails: '描述内容1',
          },
        },
        {
          element: '#step_2',
          popover: {
            moduleName: '模块2',
            totalSteps: '1',
            currentStep: '1',
            descriptionTitle: '描述标题2',
            descriptionDetails: '描述内容2',
            position: 'bottom',
          },
        },
        {
          element: '#step_3',
          popover: {
            moduleName: '模块3',
            totalSteps: '1',
            currentStep: '1',
            descriptionTitle: '描述标题3',
            descriptionDetails: '描述内容3',
            position: 'left',
          },
        },
        {
          element: '#step_4',
          popover: {
            moduleName: '模块4',
            totalSteps: '1',
            currentStep: '1',
            descriptionTitle: '描述标题4',
            descriptionDetails: '描述内容4',
            position: 'top',
          },
        },
      ]
    })
  }

  private startAutoGuide() {
    const driver = this.guideRef.getCtx({
      opacity: 0.2,
      allowClose: false,
      padding: 5,
      isHasPopover: false,
    })
    const inputEvt = new InputEvent('input', {
      inputType: 'insertText',
      dataTransfer: null,
      isComposing: false,
    })
    this.$nextTick(() => {
      this.steps = [
        {
          element: '#step_1_auto',
          popover: {
            totalSteps: '2',
            currentStep: '1',
            descriptionTitle: '自动演示',
            descriptionDetails: '点击开始演示',
            position: 'right',
            nextBtnText: '开始演示',
          },
        },
        {
          element: '#step_1_auto_fix',
          popover: {
            totalSteps: '2',
            currentStep: '1',
            descriptionTitle: '自动演示',
            descriptionDetails: '演示中...',
            position: 'right',
            disable: true,
            nextBtnText: '演示中',
          },
          onHighlighted: () => {
            setTimeout(() => {
              const curDom = document.querySelector('#step_2_auto')
              driver.highlight(curDom)
            }, 500)
            setTimeout(() => {
              const curDom = document.querySelector('#step_2_auto .el-input__inner') as HTMLInputElement
              curDom.value = '张xx'
              curDom.dispatchEvent(inputEvt)
            }, 1000)
            setTimeout(() => {
              const curDom = document.querySelector('#step_3_auto')
              driver.highlight(curDom)
            }, 1500)
            setTimeout(() => {
              const curDom = document.querySelector('#step_3_auto .el-input__inner') as HTMLInputElement
              curDom.value = '24'
              curDom.dispatchEvent(inputEvt)
            }, 2000)
            setTimeout(() => {
              const curDom = document.querySelector('#step_4_auto .el-input__inner')
              driver.highlight(curDom)
            }, 2500)
            setTimeout(() => {
              const curDom = document.querySelector('#step_4_auto .el-input__inner') as HTMLInputElement
              curDom.click()
            }, 3000)
            setTimeout(() => {
              const curDom = document.querySelector('#step_4_auto .el-input__inner') as HTMLInputElement
              curDom.click()
              curDom.value = '男'
              curDom.blur()
              driver.reset()
            }, 3500)
            setTimeout(() => {
              this.guideRef.driver.moveNext()
            }, 4000)
          },
        },
        {
          element: '#step_5_auto',
          popover: {
            totalSteps: '2',
            currentStep: '2',
            descriptionTitle: '自动演示',
            descriptionDetails: '演示结束',
          },
        },
      ]
    })
  }

  /**
   * 打开开始弹窗
   */
  private openStartModal() {
    this.startVisable = true
    setTimeout(() => {
      this.startVisable = false
    }, 3000)
  }

  /**
   * 打开结束弹窗
   */
  private openFinishModal() {
    this.finishVisable = true
    setTimeout(() => {
      this.finishVisable = false
    }, 3000)
  }
}
</script>
