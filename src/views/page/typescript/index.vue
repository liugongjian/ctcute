<template>
  <el-card class="box-card">
    <div slot="header">
      <h1>根组件</h1>
    </div>
    <div>
      <div class="actions">
        <el-button @click="increase('x')">X加1</el-button>
        <el-button @click="increase('y')">Y加1</el-button>
        <el-button @click="sumAlgebra">求和</el-button>
        <el-button @click="multiplyAlgebra">求积</el-button>
        <el-button @click="excuteChildSumAlgebra">执行子组件的求和方法</el-button>
      </div>
      <div class="equation">
        {{ algebra.x }} + {{ algebra.y }} = {{ sumResult ? sumResult : '?' }}
        <div v-if="binaryResult" class="equation__binary">(二进制结果: {{ binaryResult }})</div>
      </div>
      <div class="equation">
        {{ algebra.x }} * {{ algebra.y }} = {{ multiplyResult ? multiplyResult : '?' }}
      </div>
      <div v-if="sumChildResult || multiplyChildResult" class="equation equation__child">
        <p v-if="sumChildResult">听说子组件的求和结果是: <strong>{{ sumChildResult }}</strong></p>
        <p v-if="multiplyChildResult">听说子组件的求积结果是: <strong>{{ multiplyChildResult }}</strong></p>
      </div>
      <TypeScriptDemoChild
        ref="child"
        class="child"
        :z="sumResult"
        @on-sum="onChildSum"
        @on-multiply="onChildMultiply"
      />
    </div>
  </el-card>
</template>
<script lang="ts">
/**
 * TypeScript + Vue 开发实例
 * 本示例涉及到Data, Prop, Computed Property, Methods, 生命周期勾子, Watch, Emit, Mixin, Provide/Inject的用法
 */
// 引入Vue TypeScript组件包
import { Component, Mixins, Provide } from 'vue-property-decorator'
// 引入类型声明
import { Algebra } from './TypeScriptDemo'
// 引入Mixin
import TypeScriptDemoMixin from './mixin'

import TypeScriptDemoChild from './TypeScriptDemoChild.vue'

@Component({
  // 组件名称，用于在Vue DevTool Components中显示组件名称
  name: 'TypeScriptDemo',
  // 注册子组件
  components: {
    TypeScriptDemoChild
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
  private algebra: Algebra = {
    x: 0,
    y: 0
  }

  /* 求和的计算结果 */
  private sumResult: number = null

  /* 求积的计算结果 */
  private multiplyResult: number = null

  /* 子组件求和的计算结果 */
  private sumChildResult: number = null

  /* 子组件求积的计算结果 */
  private multiplyChildResult: number = null

  /**
   * 将计算结果转为二进制
   * @returns 二进制结果
   * 通过get关键词声明一个计算属性(computed)
   */
  private get binaryResult(): string {
    return this.sumResult && this.sumResult.toString(2)
  }

  /**
   * 生命周期钩子
   * Mounted
   */
  private mounted() {
    this.algebra.x = 1
    this.algebra.y = 1
    this.sumAlgebra()
    this.multiplyAlgebra()
  }

  /**
   * 生命周期钩子
   * BeforeDestroy
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
   * 执行求和
   */
  private sumAlgebra() {
    // 调用Mixin中的sum求和方法并赋到this.result上
    const numbers = Object.values(this.algebra)
    this.sumResult = this.sum(numbers)
  }

  /**
   * 由于已在Mixin中实现了sum方法，因此当前组件无需再次声明。
   * 如果在此组件中再次声明，则视为对Mixin中的方法进行重载(override)
   */
  // public sum () {}

  /**
   * 执行求积
   */
  private multiplyAlgebra() {
    const numbers = Object.values(this.algebra)
    this.multiplyResult = this.multiply(numbers)
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
    const child: any = this.$refs.child
    child.sumAlgebra()
  }

  /**
   * 当子组件求和
   */
  private onChildSum(result) {
    this.sumChildResult = result
  }

  /**
   * 当子组件求积
   */
  private onChildMultiply(result) {
    this.multiplyChildResult = result
  }
}
</script>
<style lang="scss" scoped>
  .equation {
    margin-top: 15px;
    padding: 10px;
    font-size: 18px;
    border: 1px solid $borderGrey; // 颜色变量请从src/assets/css/_variables.scss查找

    &__binary {
      margin-top: 10px;
      font-size: 12px;
      color: $textGrey;
    }

    &__child {
      font-size: 12px;
      color: $textGrey;
    }
  }

  .child {
    margin: 40px;
    background: $bgColor;
  }
</style>
