let shopConfig = {
    state: {
        storeDescription: "This is my store full of goodies",
        footerData: {
            links: [{url: "linkurl", name:"contact me"},{url: "linkurl", name: "ninjas"}],
            logos: ["facebook", "twitter", "insta"],
            customContent:["title", "subheading"],
        },
        menus: [
            {
                category: "cars",
                toggle: false,
                order: 1,
                links: [
                    {
                        url: "url",
                        product: "hellcat"
                    },
                    {
                        url: "url",
                        product: "mustang"
                    }
                ]
            }, {
                category: "cars",
                toggle: false,
                order: 2,
                links: [
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
        ]
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
            context.commit("toggleMenu", event)
        },
        storeDescription: (context, payload) => {
            console.log('finish componenent')
        }
    },
    getters: {

    }
}

export default shopConfig