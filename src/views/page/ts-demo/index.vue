<template>
  <el-card class="box-card">
    <div slot="header">
      <h2>根组件</h2>
    </div>
    <div>
      <div class="actions">
        <el-button @click="increase('x')">X加1</el-button>
        <el-button @click="increase('y')">Y加1</el-button>
        <el-button @click="sumAlgebra">求和</el-button>
        <el-button @click="multiplyAlgebra">求积</el-button>
        <el-button @click="excuteChildSumAlgebra">执行子组件的求和方法</el-button>
        <TypeScriptDemoRandom v-model="algebra.x" />
      </div>
      <div class="equation">
        {{ algebra.x }} + {{ algebra.y }} = {{ sumResult ? sumResult : '?' }}
        <div v-if="binaryResult" class="equation__binary">(二进制结果: {{ binaryResult }})</div>
      </div>
      <div class="equation">
        {{ algebra.x }} * {{ algebra.y }} = {{ multiplyResult ? multiplyResult : '?' }}
      </div>
      <div v-if="childSumResult || childMultiplyResult" class="equation equation__child">
        <p v-if="childSumResult">听说子组件的求和结果是: <strong>{{ childSumResult }} (结果来自$emit)</strong></p>
        <p v-if="childMultiplyResult">听说子组件的求积结果是: <strong>{{ childMultiplyResult }} (结果来自$emit)</strong></p>
      </div>
      <TypeScriptDemoChild
        ref="typeScriptDemoChild"
        class="child"
        :x.sync="algebra.x"
        :z="sumResult"
        @on-sum="onChildSum"
        @on-multiply="onChildMultiply"
      />
    </div>
    <div class="tips">本示例涉及到Data, Props, VModel, Computed Property, Methods, Lifecycle Hooks, Watcher, Emit, Mixins, Provide/Inject, Refs, Vuex的用法</div>
  </el-card>
</template>
<script lang="ts">
/**
 * TypeScript + Vue 开发示例
 * 本示例涉及到Data, Props, VModel, Computed Property, Methods, Lifecycle Hooks, Watcher, Emit, Mixins, Provide/Inject, Refs, Vuex的用法
 * 详细文档：https://github.com/kaorun343/vue-property-decorator
 */
// 引入Vue TypeScript组件包
import { Component, Mixins, Provide, ProvideReactive, Ref } from 'vue-property-decorator'
// 引入TS Type类型
import * as TypeScriptDemo from '@/types/TypeScriptDemo'
// 引入Vuex Module
import { TsDemoModule } from '@/store/modules/ts-demo'
// 引入Mixin
import TypeScriptDemoMixin from './mixin'
// 引入子组件
import TypeScriptDemoChild from './TypeScriptDemoChild.vue'
import TypeScriptDemoRandom from './TypeScriptDemoRandom.vue'

@Component({
  // 组件名称，用于在Vue DevTool Components中显示组件名称
  name: 'TypeScriptDemo',
  // 注册子组件
  components: {
    TypeScriptDemoChild,
    TypeScriptDemoRandom
  }
})
/**
 * 本示例使用了Mixin继承，如无需Mixin则需要在vue-property-decorator组件包里引入Vue，并直接extends Vue
 * import { Component, Vue } from 'vue-property-decorator'
 * export default class extends Vue {}
 */
export default class extends Mixins(TypeScriptDemoMixin) {
  /*
    Data的声明方式
    访问修饰符包括private / public / protected
    如果成员仅在组件内部访问建议使用private，
    如果成员需要通过$refs被父组件访问，或mixin中需要被继承的组件访问，则需使用public
  */
  private algebra: TypeScriptDemo.Algebra = {
    x: 0,
    y: 0
  }

  /* 求和的计算结果 */
  private sumResult: number = null

  /**
   * 求积的计算结果
   * 并注册一个响应式的Provide
   * 详见文档：https://github.com/kaorun343/vue-property-decorator#-providereactivekey-string--symbol--injectreactiveoptions--from-injectkey-default-any---injectkey-decorator
   */
  @ProvideReactive('multiplyResult')
  private multiplyResult: number = null

  /* 子组件求和的计算结果 */
  private childSumResult: number = null

  /* 子组件求积的计算结果 */
  private childMultiplyResult: number = null

  /**
   * 将计算结果转为二进制
   * @returns 二进制结果
   * 通过get关键词声明一个计算属性(computed)
   */
  private get binaryResult() {
    return this.sumResult && this.sumResult.toString(2)
  }

  /**
   * 子组件Ref对象
   */
  @Ref('typeScriptDemoChild')
  private readonly typeScriptDemoChild: TypeScriptDemoChild

  /**
   * 生命周期Mounted钩子
   * mounted在mixin也已声明，这两个方法会自动合并
   */
  protected mounted() {
    console.log('来自父组件的mounted')
    this.algebra.x = 1
    this.algebra.y = 1
    this.sumAlgebra()
    this.multiplyAlgebra()
  }

  /**
   * 生命周期BeforeDestroy钩子
   */
  private beforeDestroy() {
    console.log('组件销毁前触发')
  }

  /**
   * 数字加1，为了方便演示没有将这些与子组件的方法放入Mixin，实际开发中可写到Mixin中，下同。
   * @param algebra 代数对象
   * 声明一个方法。
   * 等价JavaScript中的methods: {}声明
   */
  private increase(key) {
    this.algebra[key]++
    this.sumResult = null
    this.multiplyResult = null
  }

  /**
   * 执行求和，并将结果存入vuex
   */
  private sumAlgebra() {
    // 调用Mixin中的sum求和方法并赋到this.result上
    const numbers = Object.values(this.algebra)
    this.sumResult = this.sum(numbers)
    // 将结果存入vuex
    TsDemoModule.setSumResult(this.sumResult)
  }

  /**
   * 由于已在Mixin中实现了sum方法，因此当前组件无需再次声明。
   * 如果在此组件中再次声明，则视为对Mixin中的方法进行重载(override)
   * 详见src/views/page/typescript/mixin.ts
   */
  // public sum () {}

  /**
   * 执行求积，并将结果存入vuex
   */
  private multiplyAlgebra() {
    const numbers = Object.values(this.algebra)
    this.multiplyResult = this.multiply(numbers)
    // 将结果存入vuex
    TsDemoModule.setMultiplyResult(this.multiplyResult)
  }

  /**
   * 数组求积
   * 通过@Provide 将方法注入到子孙组件
   * @param 数字数组
   * @returns 计算结果
   */
  @Provide('multiply')
  private multiply(numbers: number[]): number {
    let result = 1
    result = numbers.reduce((multiplyResult, value) => {
      return multiplyResult * value
    }, result)
    return result
  }

  /**
   * 执行子组件的求和方法
   */
  private excuteChildSumAlgebra() {
    this.typeScriptDemoChild.sumAlgebra()
  }

  /**
   * 当子组件求和
   */
  private onChildSum(result) {
    this.childSumResult = result
  }

  /**
   * 当子组件求积
   */
  private onChildMultiply(result) {
    this.childMultiplyResult = result
  }
}
</script>
<style lang="scss" scoped>
  .equation {
    margin-top: 15px;
    padding: 10px;
    font-size: 18px;
    border: 1px solid $border-color-primary; // 颜色变量请从src/assets/css/_variables.scss查找

    &__binary {
      margin-top: 10px;
      font-size: 12px;
      color: $text-color-light-1;
    }

    &__child {
      font-size: 12px;
      color: $text-color-light-1;
    }
  }

  .child {
    margin: 40px;
    background: $color-grey-8;
  }

  .tips {
    color: $text-color-light-1;
  }
</style>
