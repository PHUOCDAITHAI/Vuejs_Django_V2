const state = {
    auth: {
        isAuthenticated: false
    }
}


const mutations = {
    TOGGLE_AUTH(state){
     state.auth.isAuthenticated = !state.auth.isAuthenticated
    },
}

export default {
    state,
    mutations
}