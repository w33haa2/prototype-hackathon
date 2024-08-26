<script setup>
// eslint-disable-next-line no-unused-vars
import DefaultLayout from './layouts/DefaultLayout.vue'
import AuthLayout from './layouts/AuthLayout.vue'
import UserLayout from './layouts/UserLayout.vue'

import { useRoute } from 'vue-router'
import { computed } from 'vue'

const route = useRoute()

const layout = computed(() => {
  switch (route.meta.layout) {
    case 'auth':
      return AuthLayout
    case 'default':
      return DefaultLayout
    case 'user':
      return UserLayout
    default:
      return DefaultLayout
  }
})
</script>

<template>
  <component v-bind:is="layout">
    <RouterView />
  </component>
</template>
