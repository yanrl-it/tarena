import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false
  },
  mutations: {
    userStatus(state, flag) {
      state.isLogin = flag
    }
  },
  actions: {
    userLogin({commit}, flag) {
      commit('userStatus', flag)
    }
  },
  modules: {
    isLogin: state => state.isLogin
  }
})
