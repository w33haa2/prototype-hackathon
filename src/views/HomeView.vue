<script setup>
import { onMounted } from 'Vue'
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
