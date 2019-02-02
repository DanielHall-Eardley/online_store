let customer = {
    state: {
        customer: {
            name: "Daniel",
            email: "",
            address: "",
            itemCount: 0,
            loggedIn: true,
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