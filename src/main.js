//import './assets/main.css'

import { createApp } from 'vue';
import App from './App.vue';
import { createPinia } from 'pinia';


import router from './router';
import './assets/base.css';
import './assets/css/main.css';

const app = createApp(App);


app.use(createPinia());
app.use(router);

app.mount('#app');
