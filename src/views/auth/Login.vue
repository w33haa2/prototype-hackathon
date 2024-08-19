<script setup>
import InputText from 'primevue/inputtext'
import { useRouter } from 'vue-router'
import Button from 'primevue/Button'

const router = useRouter()

const navigateToDashboard = () => {
  router.push('/')
}
</script>
<template>
  <div class="surface-0">
    <div class="flex align-items-center justify-content-between flex-column h-screen">
      <div
        class="flex flex-column align-items-center justify-content-center w-full md:w-4 h-full text-center py-6 px-4"
      >
        <a @click="navigateToDashboard" class="mb-6" style="cursor: pointer">
          <img
            alt="logo"
            class="shadow-2"
            src="https://i.pinimg.com/originals/fb/f6/83/fbf683c8e1a2b6f8b7d77cf47b274de0.jpg"
            width="200"
          />
        </a>
        <div class="flex flex-column">
          <div class="p-input-icon-left w-full mb-3 flex flex-column align-items-start gap-2">
            <span class="text-gray-700 font-medium">Email Address</span>
            <InputText
              id="email"
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
              class="w-full md:w-25rem text-color-secondary surface-50 border-200 shadow-1"
              placeholder="**********"
            />
          </div>

          <Button
            label="Sign Up"
            class="p-ripple w-full mb-4"
            @click="navigateToDashboard"
          ></Button>
          <span href="#" class="font-medium text-sm text-300 cursor-pointer">forget password?</span>
          <p class="font-medium text-400 m-0 mt-6">
            Don’t you have an account, <a href="#" class="text-primary cursor-pointer">sign up</a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
