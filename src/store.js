import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {
    customer: {
      name:"Daniel",
      email:"",
      address:"",  
      itemCount: 0,
      loggedIn: true,
    },
    menus: [
      {  
      category: "cars",
      toggle: false,
      order: 1,
      links:[
        {
          url: "url",
          product: "hellcat"
        },
        {
          url: "url",
          product: "mustang"
        }
      ]
    },{
      category: "cars",
      toggle: false,
      order: 2,
      links:[
        {
          url: "url",
          product: "kingswood"
        },
        {
          url: "url",
          product: "chevy"
        }
      ],
    }
    ],
  },
  mutations: {
    addItem: state => {
      state.itemCount += 1
    },
    toggleMenu: (state, event) => {
      for(let i = 0; i <= state.menus.length; i ++){
        if(i == event.target.id){
          state.menus[i].toggle = ! state.menus[i].toggle
        }
      }
    }
  },
  actions: {
    addItem: context =>{
      context.commit("addItem")
    },
    toggleMenuAction: (context, event) => {
      context.commit("toggleMenu", event)
    }
  }
})
