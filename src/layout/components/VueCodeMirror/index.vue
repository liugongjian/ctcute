<template>
  <codemirror :value="code" :options="cmOptions" />
</template>
<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
import { codemirror } from 'vue-codemirror'
import 'codemirror/mode/javascript/javascript.js'
import 'codemirror/mode/vue/vue.js'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material-darker.css'

@Component({
  name: 'VueCodeMirror',
  components: {
    codemirror,
  },
})
export default class extends Vue {
  @Prop() private code: string
  @Prop() private mode: string
  @Prop({
    default: 'default',
  })
  private theme: string

  private cmOptions = {
    value: '',
    mode: 'text/javascript',
    theme: 'default',
    lineNumbers: true,
    readOnly: true,
  }

  private created() {
    this.cmOptions.theme = this.theme
  }

  @Watch('mode', {
    immediate: true,
  })
  private onModeChange() {
    this.cmOptions.mode = this.mode
  }
}
</script>
