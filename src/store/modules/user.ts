import { VuexModule, Module, getModule, Mutation, Action } from 'vuex-module-decorators'
import store from '@/store'

export interface IUserState {
  token: string
  name: string
  avatar: string
  introduction: string
  perms: string[],
  iamUserId: string,
  email: string,
  type: string,
  mainUserId: string,
  mainUserAddress: string,
  tags: any,
}

@Module({ dynamic: true, store, name: 'user' })
class User extends VuexModule implements IUserState {
  public token = 'cutedesign'
  public name = ''
  public avatar = ''
  public introduction = ''
  public iamUserId = ''
  public roles: string[] = []
  public perms: string[] = []
  public resources: string[] = []
  public resourcesSet: Set<any> = new Set()
  public email = ''
  public type = ''
  public mainUserId = ''
  public mainUserAddress = ''
  public tags: any = null
  public ctLoginId = ''
  public whiteListFlag = ''

  @Mutation
  private SET_ROLES(roles: string[]) {
    this.roles = roles
  }

  @Action
  public async GetUserInfo() {
    if (this.token === '') {
      throw Error('GetUserInfo: token is undefined!')
    }
    // const data: any = Promise
    // if (!data) {
    //   throw Error('Verification failed, please Login again.')
    // }
    const roles = ['admin']
    // roles must be a non-empty array
    if (!roles || roles.length <= 0) {
      throw Error('GetUserInfo: roles must be a non-null array!')
    }
    this.SET_ROLES(roles)
  }

  @Action
  public ResetToken() {
    console.log('clear')
  }
}

export const UserModule = getModule(User)
