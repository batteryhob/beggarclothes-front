import Vue from 'vue'
import VueRouter from 'vue-router'

import Main from './views/main/Main.vue'

import Sale from './views/sale/Sale.vue'
import Parse from './views/sale/Parse.vue'

import Feed from './views/feed/Feed.vue'
import Detail from './views/feed/Detail.vue'

import Designer from './views/designer/Designer.vue'

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
        }
    ]
})
