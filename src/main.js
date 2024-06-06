import { createApp } from 'vue';

import App from './App.vue';
import router from './router';
import store from './store'

import ApiNavItemRepository from "@/modules/navbar/infrastructure/ApiNavItemRepository";
import ApiServiceRepository from "@/modules/services/infrastructure/ApiServiceRepository";

createApp(App)
    .provide('navItemRepository', new ApiNavItemRepository())
    .provide('serviceRepository', new ApiServiceRepository()).use(store).use(router).mount('#app');
