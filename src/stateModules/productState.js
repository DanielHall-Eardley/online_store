let products = {
  state: {
    customProduct: {
      name: 'build your computer',
      steps: [{
        options: []
      }]
    },
    productData: [{
      name: 'Hellcat',
      summary: 'Dodge Charger with 707hp coming from a 6.2 supercharged Hemi',
      price: 80000,
      inStock: true,
      showDetails: false,
      imgArray: [{
          title: 'something',
          url: 'https://via.placeholder.com/350'
        },
        {
          title: 'something else',
          url: 'https://via.placeholder.com/350'
        },
        {
          title: 'something next',
          url: 'https://via.placeholder.com/350'
        },
      ],
      reviews: [{
          rating: 5,
          comment: 'Looks good, goes fast',
          user: 'IloveMuscleCars'
        },
        {
          rating: 4,
          comment: 'Makes an orgasmic noise',
          user: 'ILoveMuscleCars'
        }
      ],
      specs: [{
          key: 'Model',
          value: 'Dodge'
        },
        {
          key: 'Colour',
          value: 'Black'
        }
      ],
      questions: [{
          user: 'I love dicks.com',
          question: 'I hear the fuel economy is bad, how many miles to the gallon does it get?',
          answer: 'We don\'t tolerate dumb questions on this website, go buy a prius'
        },
        {
          user: 'Gentleman of discerning taste.com',
          question: 'Does this car do fully sick burnouts?',
          answer: 'Why yes it does my good sir:)'
        }
      ]
    }],
    featuredSlideshow: [{
      title: 'stuff',
      url: require('@/assets/blue-camaro.png')
    }, {
      title: 'things',
      url: require('@/assets/charger.jpeg')
    }, {
      title: 'hellcat',
      url: require('@/assets/chevelle.jpg')
    }, {
      title: 'monicas',
      url: require('@/assets/gto.jpg')
    }]
  },
  mutations: {

  },
  getters: {

  }
}

export default products
