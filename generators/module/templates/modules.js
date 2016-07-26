import request from 'utils/request'
import { PROMISE_SUCCESS } from '../constants'

/**
 * actions、mutations中用的常量
 */
const GET_<%= upperModuleName %> = 'GET_<%= upperModuleName %>'

/**
 * vuex的state
 */
const state = {
  <%= moduleName %> : null
}

/**
 * vuex的getters
 */
const getters = {
  <%= moduleName %>: state => state.<%= moduleName %>
}

/**
 * vuex中的actions
 */
const actions = {
  get<%= moduleName %> ({ commit }, payload) {
    commit(GET_<%= moduleName %>, request({

      
    }))
  }
}

/**
 * vuex中的mutations
 */
const mutations = {
  [GET_<%= moduleName %>] (state, { payload, meta }) {
    if (meta === PROMISE_SUCCESS) {
      state.<%= moduleName %> = payload
    }
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}