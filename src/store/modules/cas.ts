import { VuexModule, Module, Mutation, Action, getModule } from 'vuex-module-decorators'
import store from '@/store'
import { BaseCas } from '@/models/Cas/BaseCas'

export enum DeviceType {
  Mobile,
  Desktop,
}

export interface ICasState {
  cas: BaseCas
}

@Module({ dynamic: true, store, name: 'cas' })
class Cas extends VuexModule implements ICasState {
  public cas: BaseCas = null
  public userInfo: any = null

  @Mutation
  private SET_CAS(cas) {
    this.cas = cas
  }

  @Mutation
  private SET_USER_INFO(userInfo) {
    this.userInfo = userInfo
  }

  @Action
  public SetCas(cas) {
    this.SET_CAS(cas)
  }

  @Action
  public SetUserInfo(userInfo) {
    this.SET_USER_INFO(userInfo)
  }

  @Action
  public UpdateMenu(items) {
    this.cas && this.cas.updateMenu(items)
  }

  @Action
  public UpdateMenuByRoute(routes) {
    this.cas && this.cas.updateMenuByRoute(routes)
  }

  @Action
  public ActiveMenu(route) {
    this.cas && this.cas.activeMenu(route)
  }
}

export const CasModule = getModule(Cas)
