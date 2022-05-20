import { Component, Vue } from 'vue-property-decorator'
@Component
class TypeScriptDemoMixin extends Vue {
  protected mounted() {
    console.log('来自mixin的mounted')
  }

  /**
   * 数组求和
   * @param 数字数组
   * @returns 计算结果
   * 声明一个方法。
   * 等价JavaScript中的methods: {}声明
   */
  protected sum(numbers: number[]): number {
    let result = 0
    result = numbers.reduce((sum, value) => {
      return sum + value
    }, result)
    return result
  }
}
export default TypeScriptDemoMixin
