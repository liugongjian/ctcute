import { VuexModule, Module, getModule, MutationAction } from 'vuex-module-decorators'
import store from '@/store'

export interface IUserState {
  token: string;
  roles: string[];
}

@Module({ dynamic: true, store, name: 'user' })
class User extends VuexModule implements IUserState {
  public token = 'cutedesign'
  public roles: string[] = []

  /**
   * 通过@MutationAction 在调用完action后对vuex数据进行更新
   * @returns payload
   */
  @MutationAction
  public async getUserInfo() {
    // 请求用户信息查询接口
    const roles = ['admin']
    return { roles }
  }
}

export const UserModule = getModule(User)
