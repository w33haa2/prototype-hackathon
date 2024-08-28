import { ref } from 'vue'
import { defineStore } from 'pinia'
import { useRouter } from 'vue-router'

export const userAuthStore = defineStore('auth', () => {
  const router = useRouter()
  const user = ref({
    email: null,
    wallet: null
  })
  const login = async (payload) => {
    user.value.email = payload.email

    localStorage.setItem('user', JSON.stringify(user.value))
    router.push('/datasets')
  }

  const logout = async () => {
    localStorage.clear()
    router.push('/login')
  }

  return { login, logout, user }
})
