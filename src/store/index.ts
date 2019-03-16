import Vue from "vue";
import Vuex from "vuex";
import constants from "./constants";
import * as product from './modules/product';
import * as todo from './modules/todo';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state:{
        constants: constants
    },
    modules: {
        product,
        todo
    },
    getters: {
        CONSTANTS: state => {
          return state.constants
        }
    }
});