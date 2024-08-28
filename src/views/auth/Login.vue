<script setup>
import { ref } from 'vue'

import InputText from 'primevue/inputtext'
import Button from 'primevue/button'

import { userAuthStore } from '@/stores/auth'

const { login } = userAuthStore()

const email = ref('')
const password = ref('')

const handleLogin = () => {
  login({ email: email.value, password: password.value })
}
</script>
<template>
  <div class="surface-0">
    <div class="flex align-items-center justify-content-between flex-column h-screen">
      <div
        class="flex flex-column align-items-center justify-content-center w-full md:w-4 h-full text-center py-6 px-4"
      >
        <a class="mb-6" style="cursor: pointer">
          <img
            alt="logo"
            class="shadow-2"
            src="https://i.pinimg.com/originals/fb/f6/83/fbf683c8e1a2b6f8b7d77cf47b274de0.jpg"
            width="200"
          />
        </a>
        <form @submit.prevent="handleLogin" class="flex flex-column">
          <div class="p-input-icon-left w-full mb-2 flex flex-column align-items-start gap-2">
            <span class="text-gray-700 font-medium">Email Address</span>
            <InputText
              id="email"
              v-model="email"
              type="text"
              :pt="{
                root: {
                  class: 'border-round-lg'
                }
              }"
              class="w-full md:w-25rem text-color-secondary surface-50 border-200 shadow-1"
              placeholder="test@example.com"
            />
          </div>
          <div class="p-input-icon-left w-full mb-4 flex flex-column align-items-start gap-2">
            <span class="text-gray-700 font-medium">Password</span>
            <InputText
              id="password"
              type="password"
              v-model="password"
              class="w-full md:w-25rem text-color-secondary surface-50 border-200 shadow-1"
              placeholder="**********"
            />
          </div>

          <Button
            type="submit"
            @click="handleLogin"
            label="Log In"
            class="p-ripple w-full mb-4"
          ></Button>
          <span href="#" class="font-medium text-sm text-300 cursor-pointer">forget password?</span>
          <p class="font-medium text-400 m-0 mt-6">
            Don’t you have an account, <a href="#" class="text-primary cursor-pointer">sign up</a>
          </p>
        </form>
      </div>
    </div>
  </div>
</template>
