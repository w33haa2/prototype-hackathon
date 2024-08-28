import PrimeVue from 'primevue/config'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/main.css'

import 'primevue/resources/themes/aura-light-green/theme.css'
import '/node_modules/primeflex/primeflex.css'
import 'primeicons/primeicons.css'
import { userAuthStore } from './stores/auth'

const app = createApp(App)

const publicRoutes = ['/', '/login']

app.use(createPinia())

app.use(router)
app.use(PrimeVue)

app.mount('#app')

router.beforeEach((to, from, next) => {
  const { user } = userAuthStore()

  const userFromStorage = JSON.parse(localStorage.getItem('user'))
  user.value = userFromStorage
  if (!userFromStorage && !publicRoutes.includes(to.path)) {
    next('/login')
  } else if (!userFromStorage && publicRoutes.includes(to.path)) {
    next()
  } else if (userFromStorage && !publicRoutes.includes(to.path)) {
    next()
  } else {
    next('/datasets')
  }
})
