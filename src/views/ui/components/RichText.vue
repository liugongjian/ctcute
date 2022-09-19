<template>
  <div class="rich-text">
    <p>富文本我们选用wangEditor。https://www.wangeditor.com/demo/index.html</p>
    <div class="sub-down">
      <div class="line">
        <div class="line__left">
          <cute-editor :img-url="imgUrl" :video-url="videoUrl"></cute-editor>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { CuteEditor } from '@cutedesign/editor'
@Component({
  name: 'RichText',
  components: {
    CuteEditor,
  },
})
export default class extends Vue {
  public static title = {
    zh: '富文本',
    en: 'RichText',
  }
  public static description = {
    maintainer: '秦瑞斌',
    version: 'v1.0',
    updateTime: '2022.09.19',
  }

  private isClear = false
  private imgUrl = ''
  private videoUrl = ''
  private change(val) {
    console.log(val)
  }
}
</script>

<style lang="scss" scoped>
.line {
  margin: 24px 0;
  width: 100%;

  &__left {
    width: 100%;
    height: 500px;
    overflow-y: hidden;
    ::v-deep.w-e-full-screen-container {
      position: relative !important;
    }
  }

  &__border {
    border: 1px solid $color-grey-6;
  }

  .el-cascader {
    width: 100%;
  }
}
.rich-text {
  width: 100%;
}
.sub-down {
  width: 100%;
  border-bottom: 1px solid $border-color-light-1;

  > h3 {
    margin: 24px 0;
    font-family: PingFangSC-Medium;
    font-size: 14px;
    color: $color-grey-1;
    line-height: 20px;
    font-weight: 500;
  }

  .el-row {
    margin: 24px 0;
  }
}

.sub-down:last-child {
  border-bottom: none;

  .el-row {
    margin-top: 24px;
  }
}
</style>
