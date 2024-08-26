<script setup>
import { onMounted } from 'vue'
import HeadingOne from '../components/landing/HeadingOne.vue'
import HeadingTwo from '../components/landing/HeadingTwo.vue'

onMounted(() => {
  console.log('onMounted')
})
</script>

<template>
  <main class="text-gray-800">
    <HeadingOne />
    <HeadingTwo />
  </main>
</template>
