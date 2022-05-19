import { VuexModule, Module, Mutation, Action, getModule } from 'vuex-module-decorators'
import store from '@/store'
import { BaseCas } from '@/models/Cas/BaseCas'

export interface ICasState {
  cas: BaseCas;
  userInfo: any;
}

@Module({ dynamic: true, store, name: 'cas' })
class Cas extends VuexModule implements ICasState {
  public cas: BaseCas = null
  public userInfo: any = null

  @Mutation
  public setCas(cas) {
    this.cas = cas
  }

  @Mutation
  public setUserInfo(userInfo) {
    this.userInfo = userInfo
  }

  @Action
  public updateMenu(items) {
    this.cas && this.cas.updateMenu(items)
  }

  @Action
  public updateMenuByRoute(routes) {
    this.cas && this.cas.updateMenuByRoute(routes)
  }

  @Action
  public activeMenu(route) {
    this.cas && this.cas.activeMenu(route)
  }
}

export const CasModule = getModule(Cas)
