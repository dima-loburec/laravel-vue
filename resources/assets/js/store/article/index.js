import mutations from './mutations'
import actions from './actions'
import {inputStateVariables, inputStateGetters} from 'components/input'

export default {
    namespaced: true,
    state: {
        articles: [],
        article: {},
        loaded: false,
        perPage: null,
        currentPage: null,
        lastPage: null,
        ...inputStateVariables,
    },
    mutations: mutations,
    actions: actions,
    getters: inputStateGetters,
}
