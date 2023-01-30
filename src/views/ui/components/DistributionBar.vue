<!--
 * @Author: wujingcheng
 * @LastModifiedBy: 吴景城
 * @Date: 2023-01-09 16:48:27
 * @LastEditors: wujingcheng
 * @LastEditTime: 2023-01-09 16:51:09
 * @Description: 
-->
<template>
  <div class="distribution-bar-ui">
    <p>
      分配条应用于一些灵活的资源分配，例如给不同的中心分配集群资源，勾选选项后下面的拉条会出现相应颜色的小树干，可以拉动来分配资源，也可输入数字来分配资源，根据实际选项的数量可以排列成1行或者2行
    </p>
    <h4>使用了<a :href="componentUrl" target="_blank">CuteDistributionBar</a>组件</h4>
    <div>
      <h3>一、按照100%进行均分，资源要全部分配完</h3>
      <p>1.展示数值和百分比</p>
      <cute-distribution-bar :data="barList1" :max="2000"> </cute-distribution-bar>
      <p>2.只展示百分比</p>
      <cute-distribution-bar :data="barList2" :show-value="false"> </cute-distribution-bar>
      <p>3.可根据需要把选项分为2行</p>
      <cute-distribution-bar :data="barList3" :show-value="false" :row-number="3"> </cute-distribution-bar>
    </div>
    <div>
      <h3>二、自由分配，可以不分配所有资源，除了以下几点，其他交互同上</h3>
      <cute-distribution-bar :data="barList4" :max="2000" mode="free"> </cute-distribution-bar>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { CuteDistributionBar } from '@cutedesign/base'
@Component({
  name: 'UiDistributionBar',
  components: {
    CuteDistributionBar,
  },
})
export default class extends Vue {
  public static title = {
    zh: '分配条',
    en: 'DistributionBar',
  }
  public static description = {
    maintainer: '吴景城',
    version: 'v1.0',
    updateTime: '2023.01.09',
  }
  barList1 = [
    {
      code: 'nm-center',
      name: '内蒙中心',
    },
    {
      code: 'gz-center',
      name: '贵州中心',
    },
    {
      code: 'third-center',
      name: '第三中心',
    },
    {
      code: 'fourth-center',
      name: '第四中心',
    },
  ]
  barList2 = [
    {
      code: 'nm-center',
      name: '内蒙中心',
      value: 33,
      checked: true,
    },
    {
      code: 'gz-center',
      name: '贵州中心',
      value: 33,
      checked: true,
    },
    {
      code: 'third-center',
      name: '第三中心',
      value: 34,
      checked: true,
    },
    {
      code: 'fourth-center',
      name: '第四中心',
    },
  ]
  barList3 = [
    {
      code: 'nm-center',
      name: '内蒙中心',
    },
    {
      code: 'gz-center',
      name: '贵州中心',
    },
    {
      code: 'third-center',
      name: '第三中心',
    },
    {
      code: 'fourth-center',
      name: '第四中心',
    },
    {
      code: 'fifth-center',
      name: '第五中心',
    },
    {
      code: 'sixth-center',
      name: '第六中心',
    },
  ]
  barList4 = [
    {
      code: 'nm-center',
      name: '内蒙中心',
      value: 1000,
      checked: true,
    },
    {
      code: 'gz-center',
      name: '贵州中心',
    },
    {
      code: 'third-center',
      name: '第三中心',
    },
    {
      code: 'fourth-center',
      name: '第四中心',
    },
  ]
  get componentUrl() {
    return `${window.location.origin}/component/base/cute-distribution-bar`
  }
}
</script>

<style lang="scss">
.distribution-bar-ui p {
  margin: 20px 0;
}
</style>
