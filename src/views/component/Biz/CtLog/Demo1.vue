<!--
 * @Description:
 * @Author: 甘雨涛
 * @Date: 2022-12-28 15:41:27
 * @LastEditTime: 2022-12-28 20:03:25
 * @LastEditors: 甘雨涛
-->

<template>
  <ct-log :preset-id="currentRunId" :pipeline-option="pipelineOption"></ct-log>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { DETAIL, STAGE } from './data'
import CtLog from '@cutedesign/ct-log'
import '@cutedesign/ct-log/dist/ct-log.css'

Vue.use(CtLog)

type PipelineOption = {
  error?: string
  pipelineRunDetail: {
    url: string
    args?: {
      [propName: string]: string
    }
    defaultData?: any
  }
  pipelineStageRunList: {
    url: string
    args?: {
      [propName: string]: string
    }
    defaultData?: any
  }
  pipelineLogStream: {
    url: string
    args?: {
      [propName: string]: string
    }
  }
}

@Component({
  name: 'App',
})
export default class extends Vue {
  private currentRunId = ''

  get pipelineOption(): PipelineOption {
    return {
      pipelineRunDetail: {
        url: '',
        args: {},
        defaultData: DETAIL,
      },
      pipelineStageRunList: {
        url: '',
        args: {},
        defaultData: STAGE,
      },
      pipelineLogStream: {
        url: '',
      },
    }
  }
}
</script>

<style scoped></style>
