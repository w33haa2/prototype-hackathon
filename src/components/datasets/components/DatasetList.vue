<template>
  <div>
    <div class="flex items-center gap-3">
      <i class="pi pi-chart-line text-xl" />
      <span class="text-2xl font-bold">Available Datasets</span>
    </div>
    <div class="mt-6">{{ busy }} {{ datasets }}</div>
  </div>
</template>
<script setup>
import { useDatasetStore } from '@/stores/datasets'

const { datasets, busy } = useDatasetStore()
</script>
