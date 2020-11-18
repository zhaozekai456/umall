import { reqspecslist, reqspecscount } from '@/utils/http'
const state = {
    list: [],
    size: 2,
    page: 1,
    total: 0
}
const mutations = {
    changelist(state, obj) {
        state.list = obj
    },
    changepage(state, obj) {
        state.page = obj
    },
    changetotal(state, obj) {
        state.total = obj
    },
}
const actions = {
    reqlist(context) {
        reqspecslist({ page: context.state.page, size: context.state.size }).then(res => {
            let list = res.data.list ? res.data.list : []
            if (list.length == 0 && context.state.page > 1) {
                context.commit('changepage', context.state.page - 1)
                context.dispatch('reqlist')
                return
            }
            list.forEach(item => {
                item.attrs = JSON.parse(item.attrs)
            });
            context.commit('changelist', list)
        })
    },
    reqcount(context) {
        reqspecscount().then(res => {
            context.commit('changetotal', res.data.list[0].total)
        })
    },
    changePage(context, obj) {
        context.commit('changepage', obj)
        context.dispatch('reqlist')
    }
}
const getters = {
    list(state) {
        return state.list
    },
    total(state) {
        return state.total
    },
    size(state) {
        return state.size
    },

}
export default {
    state,
    mutations,
    actions,
    getters,
    namespaced: true
}