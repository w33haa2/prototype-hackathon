<template>
  <div>
    <div class="flex items-center gap-3">
      <i class="pi pi-chart-line text-xl" />
      <span class="text-2xl font-bold">Available Datasets</span>
    </div>
    <div class="mt-6 flex gap-[15px] flex-wrap justify-center">
      <DatasetCard v-for="(item, index) in paginatedData" :key="index" :item="item" />
    </div>
    {{ page }}
    <Paginator v-model:first="page" :rows="10" :totalRecords="datasets.total"></Paginator>
  </div>
</template>
<script setup>
import { ref, computed } from 'vue'
import DatasetCard from '@/components/common/DatasetCard.vue'
import { useDatasetStore } from '@/stores/datasets'
import Paginator from 'primevue/paginator'

const { datasets, busy } = useDatasetStore()
const page = ref(0)

const paginatedData = computed(() => {
  // Slice the array to get the items on the current page
  return datasets.data.slice(page.value, page.value + 10)
})
</script>
