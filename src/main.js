//import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import './assets/base.css'
import Dyna from './Dyna.vue'
//const app = createApp(App)
const dyna=createApp(Dyna)

//app.use(createPinia())
//app.use(router)

//app.mount('#app')
dyna.mount('#app')