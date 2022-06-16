<template>
  <div class="ui-tooltip">
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
    <h2>有link</h2>
    <div class="sub-tooltip">
      <el-row type="flex" align="middle" justify="center">
        <el-col :span="6">
          <el-tooltip class="item" effect="dark" placement="top" :value="true">
            <div slot="content"><a class="tooltip-mores">更多</a>关于什么的类型</div>
            <span>Nomal</span>
          </el-tooltip>
        </el-col>
        <el-col :span="4">
          <el-tooltip class="item" effect="dark" placement="top">
            <div slot="content"><a class="tooltip-more">更多</a>关于什么的类型</div>
            <span>link hover/active/fucus</span>
          </el-tooltip>
        </el-col>
      </el-row>
    </div>
    <div>
      <el-row type="flex" align="middle">
        <el-col :span="6">
          <h2>小提示</h2>
        </el-col>
        <el-col :span="2"> <span class="message prompt-warning">88折</span></el-col>
        <el-col :span="2"> <span class="message prompt-error">公测</span></el-col>
        <el-col :span="2"> <span class="message prompt-success">免费</span></el-col>
        <el-col :span="2"><span class="message prompt-conventional">NEW</span> </el-col>
      </el-row>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'UiTooltip',
})
export default class extends Vue {
  public static title = {
    zh: '文字提示',
    en: 'Tooltip',
  }
}
</script>

<style lang="scss" scoped>
.tooltip-more,
.tooltip-mores {
  margin-right: 6px;
  &:hover {
    cursor: pointer;
  }
}
.tooltip-more {
  text-decoration: underline;
}
.sub-tooltip {
  margin: 24px 0;
  padding-bottom: 24px;
  border-bottom: 1px solid $border;
}

.message {
  display: block;
  width: 35px;
  height: 18px;
  border-radius: 6px 0 6px 0;
  color: #ffff;
  font-size: 12px;
  text-align: center;
  line-height: 18px;
  &.prompt-warning {
    background: #faad15;
  }
  &.prompt-error {
    background: #f5212d;
  }
  &.prompt-success {
    background: #52c41a;
  }
  &.prompt-conventional {
    background: #ffffff;
    border: 1px solid #fa8334;
    color: #fa8334;
  }
}
</style>
