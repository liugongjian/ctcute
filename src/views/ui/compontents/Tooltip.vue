<template>
  <div class="sub-tooltip">
    <el-row type="flex" align="middle" justify="center" style="width: 1200px">
      <el-col :span="2">
        <el-tooltip class="item" effect="dark" content="提示描述性文案" placement="left">
          <el-button>LT</el-button>
        </el-tooltip>
      </el-col>
      <el-col :span="5">
        <el-row>
          <el-tooltip class="item" effect="dark" content="提示描述性文案" placement="top-start">
            <el-button>LT</el-button>
          </el-tooltip>
        </el-row>
        <el-row style="margin-top: 52px">
          <el-tooltip class="item" effect="dark" content="提示描述性文案" placement="bottom-start">
            <el-button>BL</el-button>
          </el-tooltip>
        </el-row>
      </el-col>
      <el-col :span="5">
        <el-row>
          <el-tooltip class="item" effect="dark" content="提示描述性文案" placement="top">
            <el-button>TOP</el-button>
          </el-tooltip>
        </el-row>
        <el-row style="margin-top: 52px">
          <el-tooltip class="item" effect="dark" content="提示描述性文案" placement="bottom">
            <el-button>BOT</el-button>
          </el-tooltip>
        </el-row>
      </el-col>
      <el-col :span="2">
        <el-row>
          <el-tooltip class="item" effect="dark" content="提示描述性文案" placement="top-end">
            <el-button>TR</el-button>
          </el-tooltip>
        </el-row>
        <el-row style="margin-top: 52px">
          <el-tooltip class="item" effect="dark" content="提示描述性文案" placement="bottom-end">
            <el-button>BR</el-button>
          </el-tooltip>
        </el-row>
      </el-col>
      <el-col :span="1">
        <el-tooltip class="item" effect="dark" content="提示描述性文案" placement="right">
          <el-button>RT</el-button>
        </el-tooltip>
      </el-col>
    </el-row>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'UiTooltip'
})
export default class extends Vue {
  public static title = {
    zh: '文字提示',
    en: 'Tooltip'
  }
}
</script>

<style lang="scss" scoped></style>
