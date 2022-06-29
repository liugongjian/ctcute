<template>
  <el-card class="box-card">
    <div slot="header">
      <h3>子组件</h3>
    </div>
    <div>
      <div class="actions">
        <el-button @click="increase('x')">X加1</el-button>
        <el-button @click="increase('y')">Y加1</el-button>
        <el-button @click="sumAlgebra">求和</el-button>
        <el-button @click="multiplyAlgebra">求积</el-button>
        <el-button @click="increaseParentX">父组件X加1</el-button>
      </div>
      <el-alert type="info">Z来自父组件的求和结果</el-alert>
      <div class="equation">
        {{ algebra.x }} + {{ algebra.y }} + {{ algebra.z ? algebra.z : 'Z' }} =
        {{ sumResult ? sumResult : '?' }}
      </div>
      <div class="equation">
        {{ algebra.x }} * {{ algebra.y }} * {{ algebra.z ? algebra.z : 'Z' }} =
        {{ multiplyResult ? multiplyResult : '?' }}
      </div>
      <div v-if="parentSumResult || parentMultiplyResult" class="equation equation__child">
        <p v-if="parentSumResult">
          听说父组件的求和结果是: <strong>{{ parentSumResult }} (结果来自Vuex)</strong>
        </p>
        <p v-if="parentMultiplyResult">
          听说父组件的求积结果是: <strong>{{ parentMultiplyResult }} (结果来自Vuex)</strong>
        </p>
        <p v-if="parentSumResultFromProvide">
          听说父组件的求积结果是: <strong>{{ parentSumResultFromProvide }} (结果来自Provider)</strong>
        </p>
      </div>
    </div>
  </el-card>
</template>
<script lang="ts">
// 引入Vue TypeScript组件包
import {
  Component,
  Mixins,
  Prop,
  PropSync,
  Watch,
  Inject,
  InjectReactive,
  Emit,
} from 'vue-property-decorator'
// 引入TS Type类型
import * as TypeScriptDemo from '@/types/TypeScriptDemo'
// 引入Vuex Module
import { TsDemoModule } from '@/store/modules/tsDemo'
// 引入Mixin
import TypeScriptDemoMixin from './mixin'

@Component({
  // 组件名称，可以获得更有语义信息的组件树。用于在Vue DevTool Components中显示组件名称。
  name: 'TypeScriptDemoChild',
})
/**
 * 本示例使用了Mixin继承，如无需Mixin则需要在vue-property-decorator组件包里引入Vue，并直接extends Vue
 * import { Component, Vue } from 'vue-property-decorator'
 * export default class extends Vue {}
 */
export default class extends Mixins(TypeScriptDemoMixin) {
  /**
   * 声明Prop参数
   * 可以使用 readonly 去避免操作改变 props
   */
  @Prop({ default: 0, required: true }) private readonly z: number

  /**
   * 通过@PropSync + 父组件.sync修饰符的方式实现双向绑定
   * x是参数名称，parentX是对x值的计算属性(computed property)
   * 详见文档：https://github.com/kaorun343/vue-property-decorator#-propsyncpropname-string-options-propoptions--constructor--constructor---decorator
   * Vue官方的.sync使用方法：https://v2.vuejs.org/v2/guide/components-custom-events.html#sync-Modifier
   */
  // @Prop({ default: 0, required: true }) private x: number
  @PropSync('x') private parentX: number

  /*
    Data的声明方式
    访问修饰符包括private / public / protected
    如果成员仅在组件内部访问建议使用private，
    如果成员需要通过$refs被父组件访问，或mixin中需要被继承的组件访问，则需使用public
  */
  private algebra: TypeScriptDemo.Algebra = {
    x: 0,
    y: 0,
    z: 0,
  }

  /* 求和的计算结果 */
  private sumResult: number = null

  /* 求积的计算结果 */
  private multiplyResult: number = null

  /**
   * 来自Provide的求积的计算结果
   */
  @InjectReactive('multiplyResult')
  private parentSumResultFromProvide: number

  /**
   * 来自Vuex的父组件求和的计算结果
   * @returns 计算结果
   * 通过get关键词声明一个计算属性(computed)
   */
  private get parentSumResult() {
    return TsDemoModule.sumResult
  }

  /**
   * 来自Vuex的父组件求积的计算结果
   * @returns 计算结果
   * 通过get关键词声明一个计算属性(computed)
   */
  private get parentMultiplyResult() {
    return TsDemoModule.multiplyResult
  }

  /**
   * 通过@Watch 装饰器创建监听器，
   * 参数包含immediate 和 deep，例：
   * @Watch('someObject', {
   *   immediate: true,
   *   deep: true
   * })
   *
   * 可以对同一个方法添加多个@Watch 装饰器，监听多个变量执行同一个方法，例：
   * @Watch('someString')
   * @Watch('someObject', {
   *   immediate: true,
   *   deep: true
   * })
   * private onSomethingChanged() {}
   *
   * 详见文档：https://github.com/kaorun343/vue-property-decorator#-watchpath-string-options-watchoptions---decorator
   */
  @Watch('z', {
    immediate: true,
  })
  private onZChanged() {
    this.algebra.z = this.z
    this.sumResult = null
    this.multiplyResult = null
  }

  /**
   * 生命周期Mounted钩子
   * mounted在mixin也已声明，这两个方法会自动合并
   */
  protected mounted() {
    console.log('来自子组件的mounted')
    this.algebra.x = 2
    this.algebra.y = 2
  }

  /**
   * 数字加1
   * @param algebra {string} 代数对象
   * 声明一个方法。
   * 等价JavaScript中的methods: {}声明
   */
  private increase(key: string) {
    this.algebra[key]++
    this.sumResult = null
    this.multiplyResult = null
  }

  /**
   * 执行求和
   * 通过@Emit 将计算结果$emit到父组件
   */
  @Emit('on-sum')
  public sumAlgebra() {
    // 调用Mixin中的sum求和方法并赋到this.result上
    const numbers = Object.values(this.algebra)
    this.sumResult = this.sum(numbers)
    /**
     * 为$emit事件添加payload
     * 等价this.$emit('on-sum', this.sumResult)
     */
    return this.sumResult
  }

  /**
   * 执行求积
   * 通过@Emit 将计算结果$emit到父组件
   */
  @Emit('on-multiply')
  private multiplyAlgebra() {
    if (!this.z) {
      this.$message.error('先把父组件求和下吧～')
      return
    }
    const numbers = Object.values(this.algebra)
    this.multiplyResult = this.multiply(numbers)
    /**
     * 为$emit事件添加payload
     * 等价this.$emit('on-sum', this.multiplyResult)
     */
    return this.multiplyResult
  }

  /**
   * 数组求积
   * 通过@Inject 注入祖先@Provide 的方法
   * @param 数字数组
   * @returns 计算结果
   */
  @Inject('multiply')
  private multiply

  /**
   * 父组件X值加1
   */
  private increaseParentX() {
    // this.x++
    this.parentX++
  }
}
</script>
<style lang="scss" scoped>
.actions {
  margin-bottom: 8px;
}

.equation {
  margin-top: 15px;
  padding: 10px;
  font-size: 18px;
  background: #fff;
  border: 1px solid $border-color-primary; // 颜色变量请从src/assets/css/_variables.scss查找

  &__child {
    font-size: 12px;
    color: $text-color-light-1;
  }
}
</style>
