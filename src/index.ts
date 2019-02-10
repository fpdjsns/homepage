import Vue from "vue";
import {store} from './store';
// import Test1 from './components/Test1'

// @ts-ignore
import List from './components/List.vue';

let v = new Vue({
    el: "#app",
    template: `
    <div>
    <List/>
    </div>`,
    components: {
        List
    },
    store
});