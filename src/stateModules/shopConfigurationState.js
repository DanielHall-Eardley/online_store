let shopConfig = {
  state: {
    storeDescription: 'This is my store full of goodies',
    footerData: {
      links: [{
        url: 'linkurl',
        name: 'contact me'
      }, {
        url: 'linkurl',
        name: 'ninjas'
      }],
      logos: ['facebook', 'twitter', 'insta'],
      customContent: ['title', 'subheading']
    },
    menus: [{
        category: 'Menu',
        toggle: false,
        order: 1,
        links: [{
            url: '/',
            product: 'Home'
          },
          {
            url: '/products',
            product: 'Products'
          },
          {
            url: '/login',
            product: 'Login',
          },
          {
            url: '/custom-product',
            product: 'Custom Product',
          },
          {
            url: '/checkout',
            product: 'Checkout',
          },
          {
            url: '/about',
            product: 'About'
          }
        ]
      },
      {
        category: 'cars',
        toggle: false,
        order: 2,
        links: [{
            url: 'url',
            product: 'hellcat'
          },
          {
            url: 'url',
            product: 'mustang'
          }
        ]
      }, {
        category: 'cars',
        toggle: false,
        order: 3,
        links: [{
            url: 'url',
            product: 'kingswood'
          },
          {
            url: 'url',
            product: 'chevy'
          }
        ],
      }
    ],
    customProductName: "build a computer",
    customSetUp: {
      customSteps: [{
          name: "Pick computer case",
          order: 1,
          optionArray: []
        },
        {
          name: "Pick computer cpu",
          order: 2,
        },
        {
          name: "Pick computer motherboard",
          order: 3,
        },
        {
          name: "Pick computer cooling",
          order: 4,
        },
        {
          name: "Pick computer gpu",
          order: 1,
        },
      ]
    }
  },
  mutations: {
    toggleMenu: (state, event) => {
      for (let i = 0; i <= state.menus.length; i++) {
        if (i == event.target.id) {
          state.menus[i].toggle = !state.menus[i].toggle
        }
      }
    }
  },
  actions: {
    toggleMenuAction: (context, event) => {
      context.commit('toggleMenu', event)
    },
    storeDescription: (context, payload) => {
      console.log('finish component')
    }
  },
  getters: {

  }
}

export default shopConfig
