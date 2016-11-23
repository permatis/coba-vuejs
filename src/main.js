import Vue from 'vue'
import App from './App'

import 'jquery'
import 'bootstrap-loader'

import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import VueFire from 'vuefire'

import Home from './components/Home'
import Contact from './components/Contact'

/* eslint-disable no-new */

Vue.use(VueFire)
Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    linkActiveClass: 'active',
    base: __dirname,
    routes: [
        { path: '/', component: Home },
        { path: '/contact', component: Contact }
    ]
})


// const db = Firebase.initializeApp({
//     databaseURL: "https://parabolic-hook-709.firebaseio.com"
// }).database()

// const testsRef = db.ref('tests')

Vue.component('app', App)

const vm = new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App }
    
})
