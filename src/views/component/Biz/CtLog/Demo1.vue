<template>
  <ct-log :preset-id="currentRunId" :pipeline-option="pipelineOption"></ct-log>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { DETAIL, STAGE } from './data'
import CtLog from '@cutedesign/ct-log'
import '@cutedesign/ct-log/dist/ct-log.css'

Vue.use(CtLog)

@Component({
  name: 'App',
})
export default class extends Vue {
  private currentRunId = ''

  get pipelineOption(): any {
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
