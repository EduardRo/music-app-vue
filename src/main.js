//import './assets/main.css'

import { createApp } from 'vue';
import App from './App.vue';
import { createPinia } from 'pinia';


import router from './router';
import VeeValidationPlugin from "./includes/validation";

import './assets/base.css';
import './assets/css/main.css';

const app = createApp(App);


app.use(createPinia());
app.use(router);
app.use(VeeValidationPlugin);

app.mount('#app');
