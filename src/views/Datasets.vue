<script setup>
import { onMounted } from 'vue'
import Datasets from '../components/datasets/Index.vue'
onMounted(() => {
  console.log('onMounted')
})
</script>

<template>
  <div class="text-gray-800">
    <Datasets />
  </div>
</template>
