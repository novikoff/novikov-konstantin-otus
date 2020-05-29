import Vue from 'vue'
import Router from 'vue-router'
import FirstScreen from '@/views/FirstScreen'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
            path: '/',
            component: FirstScreen
        },
        {
            path:'/play',
            component:()=>import('@/views/SecondScreen.vue')
        }
    ]})