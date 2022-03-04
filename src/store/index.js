// store/index.js
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const globalStore = {
    state: {
        token: "", // 用户凭证 Token
        indexNav: 0 // 菜单栏索引
    },
    mutations: {
        //统一设置state
        SET_STATE(state, data) {
            Object.assign(state, data);
        }
    },
    actions: {},
    getters: {
        teamConfig: state => state.teamConfig
    }
};

const store = new Vuex.Store({
    modules: {
        layout: require("./modules/layout.js"),
    },
    ...globalStore
});

export default store;
