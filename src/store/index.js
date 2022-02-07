import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);


export default function createStore() {
    return new Vuex.Store({
        state: {
            article: '原始数据'
        },
        actions: {
            GET_ARTICLE({ commit }) {
                // 模仿异步请求, 延迟1s
                return new Promise((r) => {
                    setTimeout(() => {
                        commit('SET_ARTICLE', '调用异步请求后的数据')
                        r()
                    }, 1000);
                })
            }
        },
        mutations: {
            SET_ARTICLE(state, data) {
                state.article = data
            }
        }
    })
}
