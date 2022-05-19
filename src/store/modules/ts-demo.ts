import { VuexModule, Module, Mutation, Action, getModule } from 'vuex-module-decorators'
import store from '@/store'

interface Result {
  sumResult: number;
  multiplyResult: number;
}

export interface ITsDemo {
  result: Result
}

@Module({ dynamic: true, store, name: 'ts-demo' })
class TsDemo extends VuexModule implements ITsDemo {
  public result: Result = null
}

export const CasModule = getModule(TsDemo)
