import Vue from "vue";
import './utils/vue-ls'// vue-ls 本地存储
import App from "./App.vue";
import router from "./router";
import store from "./store";
import globalTableMixins from './mixins/globalTableMixins'
import "./assets/directives";
import ElementUI from 'element-ui'
import "./utils/util";
import "./assets/filter";
import "./plugin/vant"; //引入vant
import "./plugin/element"; //引入element
// import "./utils/rem.js";
import EventBus from '@/utils/eventBus';
// import '../src/assets/scss/var_global.scss'
Vue.$bus = Vue.prototype.$bus = EventBus
//全局分页
import Pagination from './components/Pagination/index'
Vue.component('pagination',Pagination)


import api from "@/api/index";

Vue.prototype.$api = api;

import Mixin from "./assets/mixin";

Vue.mixin(Mixin) //注册全局Mixin
Vue.use(ElementUI)
// Vue.mixin(globalTableMixins)

Vue.config.productionTip = false;
import '@/utils/websocket'

window.$app = new Vue({
    store,
    router,
    render: h => h(App)
}).$mount("#app");
