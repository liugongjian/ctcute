/**
 * TypeScript + Vuex 需使用vuex-module-decorators组件包
 * 详见文档：https://github.com/championswimmer/vuex-module-decorators
 */

import { VuexModule, Module, Mutation, getModule } from 'vuex-module-decorators'
import store from '@/store'

interface Result {
  sumResult: number;
  multiplyResult: number;
}

export interface ITsDemo {
  result: Result
}

@Module({ dynamic: true, store, name: 'tsDemo' })
class TsDemo extends VuexModule implements ITsDemo {
  public result: Result = {
    sumResult: null,
    multiplyResult: null
  }

  /**
   * 返回求和结果
   */
  public get sumResult() {
    return this.result.sumResult
  }

  /**
   * 返回求积结果
   */
  public get multiplyResult() {
    return this.result.multiplyResult
  }

  /**
   * 保存求和的结果
   * @param sumResult 求和结果
   */
  @Mutation
  public setSumResult(sumResult: number) {
    this.result.sumResult = sumResult
  }

  /**
   * 保存求积的结果
   * @param multiplyResult 求积结果
   */
  @Mutation
  public setMultiplyResult(multiplyResult: number) {
    this.result.multiplyResult = multiplyResult
  }
}

export const TsDemoModule = getModule(TsDemo)
