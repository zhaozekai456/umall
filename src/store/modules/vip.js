import { reqmemberlist } from '@/utils/http'
const state = {
    list: []
}
const mutations = {
    changelist(state, obj) {
        state.list = obj
    }
}
const actions = {
    reqlist(context) {
        reqmemberlist().then(res => {
            context.commit('changelist', res.data.list)
        })
    }
}
const getters = {
    list(state) {
        return state.list
    }
}
export default {
    state,
    mutations,
    actions,
    getters,
    namespaced: true
}