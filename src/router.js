import Vue from 'vue'
import VueRouter from 'vue-router'

import Main from './views/main/Main.vue'

import Sale from './views/sale/Sale.vue'
import Parse from './views/sale/Parse.vue'

import Feed from './views/feed/Feed.vue'
import Detail from './views/feed/Detail.vue'

import Designer from './views/designer/Designer.vue'

import Introduce from './views/etc/Introduce.vue'
import Privacy from './views/etc/Privacy.vue'
import Rule from './views/etc/Rule.vue'

import Signin from './views/signin/Signin.vue'
import SignCallback from './views/signin/Signin.vue'

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Main',
            component: Main
        },
        {
            path: '/sale',
            name: 'Sale',
            component: Sale
        },
        {
            path: '/sale/:seq',
            name: 'Parse',
            component: Parse
        },
        {
            path: '/feed',
            name: 'Feed',
            component: Feed
        },
        {
            path: '/feed/:seq',
            name: 'Detail',
            component: Detail
        },
        {
            path: '/designer/',
            name: 'Designer',
            component: Designer
        },
        {
            path: '/intro',
            name: 'Introduce',
            component: Introduce
        },
        {
            path: '/privacy',
            name: 'Privacy',
            component: Privacy
        },
        {
            path: '/rule',
            name: 'Rule',
            component: Rule
        },
        {
            path: '/signin',
            name: 'Signin',
            component: Signin
        },
        {
            path: '/oauth',
            name: 'SignCallback',
            component: SignCallback
        }
    ]
})
