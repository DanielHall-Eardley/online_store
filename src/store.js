import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {
    itemCount: 0,
  },
  mutations: {
    addItem : state => {
      state.itemCount += 1
    },
  },
  actions: {
    addItem: context =>{
      context.commit("addItem")
    },
  }
})
