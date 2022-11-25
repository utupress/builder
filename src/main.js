import { createApp } from 'vue'

import router from '@/components/router';

import {
    createStore
} from 'vuex';

import Cookies from "js-cookie";
import createPersistedState from "vuex-persistedstate";
import NProgress from 'nprogress';

import Axios from 'axios';
import axiosRetry from 'axios-retry';

import {
    plugin,
    defaultConfig,
} from '@formkit/vue';

import '@popperjs/core';
//import "bootstrap/dist/js/bootstrap.js";
import 'bootstrap/dist/js/bootstrap.bundle.js';
import { Modal } from 'bootstrap/dist/js/bootstrap.bundle.js';

import 'bootstrap/dist/css/bootstrap.css';
import "nprogress/nprogress.css";

import App from './App.vue'

import "@/css/app.css";


import config from "@/formkit/config";
import autorouter from "@/components/router/autorouter";

window.$Modal = Modal;

const app = createApp(App)
    .use(plugin, defaultConfig(config));


//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
//xxxxxxxxxxxxxxxxxxxxx  Axios Loader xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

Axios.defaults.compURL = window.$compURL = 'http://127.0.0.1:8000/components/';
Axios.defaults.baseURL = window.$baseURL = 'http://127.0.0.1:8000/';
Axios.defaults.withCredentials = true;

app.config.globalProperties.$in_progress = window.in_progress = true;
app.config.globalProperties.$loading = window.loading = {
    in_progress: true
};

Axios.defaults.timeout = 10000;
Axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';


// Add a request interceptor
Axios.interceptors.request.use(function (config) {

    app.config.globalProperties.$loading = {
        in_progress: true
    }

    // Do something before request is sent
    NProgress.start();
    return config;
}, function (error) {

    app.config.globalProperties.$loading = {
        in_progress: false
    }

    // Do something with request error
    return Promise.reject(error);
});

// Add a response interceptor
Axios.interceptors.response.use(function (response) {

    app.config.globalProperties.$loading = {
        in_progress: false
    };

    // Do something with response data
    NProgress.done();
    return response;
}, function (error) {
    app.config.globalProperties.$loading = {
        in_progress: false
    };

    // Do something with response error
    return Promise.reject(error);
});

axiosRetry(Axios, { retries: 3 });

app.config.globalProperties.$http = app.config.globalProperties.$axios = window.axios = Axios;

//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
//xxxxxxxxxxxxxxxxxxxxx  Vuex Store xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
import modules from '@/store/modules';


const store = createStore({
    modules: modules,
    plugins: [createPersistedState({
        storage: {
            getItem: (key) => Cookies.get(key),
            // Please see https://github.com/js-cookie/js-cookie#json, on how to handle JSON.
            setItem: (key, value) =>
                Cookies.set(key, value, {
                    expires: 3,
                    secure: true
                }),
            removeItem: (key) => Cookies.remove(key),
        },
    })],
});


if (store.state.auth.token) {
    window.axios.defaults.headers.common['Authorization'] = 'Bearer ' + store.state.auth.token;
}

app.use(store);

//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx  Ruotes  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx


router.beforeEach((to, from, next) => {

    app.config.globalProperties.$loading = {
        in_progress: true
    };

    NProgress.start();

    next();
});

router.afterEach((to, from) => {
    // ...
    app.config.globalProperties.$loading = {
        in_progress: false
    };

    NProgress.done();
});


(async () => {

    await autorouter(router);

    app.config.globalProperties.$router = window.$router = router;

    app.use(router);

    //xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
    //xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx  Mount App  xxxxxxxxxxxxxxxxxxxxxxxxxxxx
    //xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
    app.mount('#app');

})();

