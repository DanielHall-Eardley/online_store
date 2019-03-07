let customer = {
    state: {
        customer: {
            name: "Daniel",
            email: "",
            address: "",
            itemCount: 0,
            loggedIn: true,
            cartTotal: [
                {
                    productName: "hellcat",
                    price: 80000,
                    id: 1
                },
                {
                    productName: "hellcat",
                    price: 80000,
                    id: 2
                },
                {
                    productName: "hellcat",
                    price: 80000,
                    id: 3
                }, {
                    productName: "hellcat",
                    price: 80000,
                    id: 4
                }, {
                    productName: "hellcat",
                    price: 80000,
                    id: 5
                }, {
                    productName: "hellcat",
                    price: 80000,
                    id: 6
                }, {
                    productName: "hellcat",
                    price: 80000,
                    id: 7
                }, {
                    productName: "hellcat",
                    price: 80000,
                    id: 8
                }, {
                    productName: "hellcat",
                    price: 80000,
                    id: 9
                }, {
                    productName: "hellcat",
                    price: 80000,
                    id: 10
                }, {
                    productName: "hellcat",
                    price: 80000,
                    id: 11
                },{
                    productName: "hellcat",
                    price: 80000,
                    id: 11
                },{
                    productName: "hellcat",
                    price: 80000,
                    id: 11
                },{
                    productName: "hellcat",
                    price: 80000,
                    id: 11
                },{
                    productName: "hellcat",
                    price: 80000,
                    id: 11
                },{
                    productName: "hellcat",
                    price: 80000,
                    id: 11
                },{
                    productName: "hellcat",
                    price: 80000,
                    id: 11
                },{
                    productName: "hellcat",
                    price: 80000,
                    id: 11
                },{
                    productName: "hellcat",
                    price: 80000,
                    id: 11
                },{
                    productName: "hellcat",
                    price: 80000,
                    id: 11
                },{
                    productName: "hellcat",
                    price: 80000,
                    id: 11
                },{
                    productName: "hellcat",
                    price: 80000,
                    id: 11
                },{
                    productName: "hellcat",
                    price: 80000,
                    id: 11
                },{
                    productName: "hellcat",
                    price: 80000,
                    id: 11
                },{
                    productName: "hellcat",
                    price: 80000,
                    id: 11
                },{
                    productName: "hellcat",
                    price: 80000,
                    id: 11
                },{
                    productName: "hellcat",
                    price: 80000,
                    id: 11
                },{
                    productName: "hellcat",
                    price: 80000,
                    id: 11
                },
            ]
        }
    },
    mutations: {
        addItem: state => {
            state.itemCount += 1
        }
    },
    actions: {
        addItem: context => {
            context.commit("addItem")
        }
    },
    getters: {

    }
}

export default customer