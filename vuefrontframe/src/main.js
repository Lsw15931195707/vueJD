import 'babel-polyfill'//es6转es5兼容ie
import 'url-search-params-polyfill';//让ie支持URLSearchParams
import Vue from 'vue'
import App from './App.vue'
import router from './router.js';
import store from './store';//==store/index.js
import {request} from "./assets/js/libs/request.js";
import {safeUser} from './assets/js/libs/utils';
import config from './assets/js/conf/config.js'

Vue.config.productionTip = false

//使用vue原型制作全局变量
Vue.prototype.$request=request;
Vue.prototype.$safeUser=safeUser;
Vue.prototype.$config=config;

new Vue({
    router,
    store,
  render: h => h(App),
}).$mount('#app')
