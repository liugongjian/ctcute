<!--
 * @Author: zhangkj5
 * @Date: 2023-05-04 22:03:32
 * @LastEditors: zhangkj5
 * @LastEditTime: 2022-09-26 09:04:34
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
    <el-button id="step_2" @click="startGuide">Upload</el-button>
    <el-button id="step_3" type="primary" @click="startGuide">Save</el-button>
    <el-button id="step_4" @click="startGuide">...</el-button>
    <Guide ref="guide" :steps="steps" />
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
