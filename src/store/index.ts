import Vue from 'vue'
import Vuex from 'vuex'
import { ITsDemo } from './modules/tsDemo'

Vue.use(Vuex)

export interface IRootState {
  tsDemo: ITsDemo
}

// Declare empty store first, dynamically register all modules later.
export default new Vuex.Store<IRootState>({})
