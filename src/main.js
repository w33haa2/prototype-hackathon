import PrimeVue from 'primevue/config'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/main.css'

import 'primevue/resources/themes/aura-light-green/theme.css'
import '/node_modules/primeflex/primeflex.css'
import 'primeicons/primeicons.css'

const app = createApp(App)

app.use(createPinia())

app.use(router)
app.use(PrimeVue)

app.mount('#app')
