import Vue from 'vue'
import VueRouter from 'vue-router'

// modules
import Product from '../components/Product';
import Todo from '../components/Todo';
import NotFound from '../components/NotFound';

Vue.use(VueRouter)

export const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Product
        },
        {
            path: '/todo',
            component: Todo
        },
        {
            path: '/404',
            component: NotFound
        },
        {
            path: '*',
            redirect: '/404'
        }
    ]
})