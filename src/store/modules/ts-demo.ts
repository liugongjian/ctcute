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

  public get sumResult() {
    return this.result.sumResult
  }

  public get multiplyResult() {
    return this.result.multiplyResult
  }

  @Mutation
  public setSumResult(sumResult: number) {
    this.result.sumResult = sumResult
  }

  @Mutation
  public setMultiplyResult(multiplyResult: number) {
    this.result.multiplyResult = multiplyResult
  }
}

export const TsDemoModule = getModule(TsDemo)
