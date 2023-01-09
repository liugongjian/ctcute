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
import { PipelineOption } from '@cutedesign/ct-log'

Vue.use(CtLog)

@Component({
  name: 'App',
})
export default class extends Vue {
  private currentRunId = ''

  get pipelineOption(): PipelineOption {
    return {
      pipelineRunDetail: {
        url: `/v1/pipelines/run/detail?id=${this.currentRunId}`,
        args: {},
        defaultData: DETAIL,
      },
      pipelineStageRunList: {
        url: `/v1/pipelines/stage/run/list?id=${this.currentRunId}`,
        args: {},
        defaultData: STAGE,
      },
      pipelineLogStream: {
        url: `/v1/pipelines/run/stream?id=${this.currentRunId}`,
      },
    }
  }
}
</script>

<style scoped></style>
