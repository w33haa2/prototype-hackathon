import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useDatasetStore = defineStore('dataset', () => {
  const datasets = ref({
    data: [],
    total: 0
  })
  const busy = ref(false)

  const fetchDatasets = async (keyword = '') => {
    busy.value = true
    const response = await fetch(`http://localhost:3006/api/datasets?keyword=${keyword}`)
    const json = await response.json()
    console.log(json)
    datasets.value.data = json.data.items
    datasets.value.total = json.data.totalResults
    busy.value = false
  }

  return { datasets, busy, fetchDatasets }
})
