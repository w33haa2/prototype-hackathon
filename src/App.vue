<script setup>
// eslint-disable-next-line no-unused-vars
import DefaultLayout from './layouts/DefaultLayout.vue'
import AuthLayout from './layouts/AuthLayout.vue'
import { useRoute } from 'vue-router'
import { computed } from 'vue'

const route = useRoute()

const layout = computed(() => {
  return route.meta.layout === 'default' ? DefaultLayout : AuthLayout
})
</script>

<template>
  <component v-bind:is="layout">
    <RouterView />
  </component>
</template>
