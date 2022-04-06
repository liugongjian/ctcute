import Vue from 'vue'
import Vuex from 'vuex'
import { IAppState } from './modules/app'
import { ITagsViewState } from './modules/tags-view'
import { IPermissionState } from './modules/permission'

Vue.use(Vuex)

export interface IRootState {
  app: IAppState
  permission: IPermissionState
  tagsView: ITagsViewState
}

// Declare empty store first, dynamically register all modules later.
export default new Vuex.Store<IRootState>({})
