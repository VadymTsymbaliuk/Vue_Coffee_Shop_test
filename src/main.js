import { createApp } from 'vue'
import App from './App.vue'

import axios from "axios";
import VueAxios from "vue-axios";

import './assets/css/style.css'

import router from "@/router/index";

createApp(App).use(router).use(VueAxios, axios).mount('#app')
