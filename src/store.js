import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import customer from '@/stateModules/customerState.js'
import products from '@/stateModules/productState.js'
import shopConfig from '@/stateModules/shopConfigurationState.js'

export default new Vuex.Store({
  modules: {
    customer,
    products,
    shopConfig,
  }
})
