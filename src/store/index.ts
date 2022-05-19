import Vue from 'vue'
import Vuex from 'vuex'
import { IPermissionState } from './modules/permission'
import { ICasState } from './modules/cas'
import { ITsDemo } from './modules/ts-demo'

Vue.use(Vuex)

export interface IRootState {
  permission: IPermissionState
  cas: ICasState
  tsDemo: ITsDemo
}

// Declare empty store first, dynamically register all modules later.
export default new Vuex.Store<IRootState>({})
