import Vue from 'vue'
import Vuex from 'vuex';
import Counter from './modules/counter'
import Cart from './modules/cart'
import User from './modules/user'

Vue.use(Vuex);

const store=new Vuex.Store({
    modules:{
        counter:Counter,
        cart:Cart,
        user:User
    }
});
export default store;
