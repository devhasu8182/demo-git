require('./bootstrap');

window.Vue = require('vue').default;

import App from './App.vue';
import VueAxios from 'vue-axios';
import VueRouter from 'vue-router';
import axios from 'axios';

Vue.use(VueRouter);
Vue.use(VueAxios, axios);


import router from "./Route/routes";

import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

Vue.use(Buefy)

new Vue({
    router,
    render: h => h(App)
}).$mount("#app");
