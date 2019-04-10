import Vue from "vue";
import Index from "./components/Index";
import {store} from './store';
import {router} from './routes';
import GSignInButton from 'vue-google-signin-button'
Vue.use(GSignInButton)

let v = new Vue({
    el: "#app",
    template: `
    <div>
    <Index/>
    </div>`,
    components: {
        Index
    },
    store,
    router
});