<template>
  <div>
    <div class="flex flex-col gap-4">
      <span class="text-4xl font-bold text-black"> Datasets</span>
      <p class="text-base text-gray-500 max-w-[500px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris mauris tortor, fermentum vel
        nisl sed, tempor maximus dolor.
      </p>
      <div>
        <Button severity="contrast" rounded>
          <div class="flex items-center gap-[10px]">
            <i class="pi pi-plus w-1" />
            <span class="font-semibold">New Datasets</span>
          </div>
        </Button>
      </div>
    </div>
    <div class="mt-8">
      <InputText
        id="name"
        class="w-full shadow-md p-4 rounded-full placeholder:text-gray-400"
        placeholder="Search for datasets..."
      />
    </div>

    <div class="mt-8">
      <DatasetList />
    </div>
  </div>
</template>
<script setup>
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import DatasetList from './components/DatasetList.vue'
import { onMounted } from 'vue'
import { useDatasetStore } from '@/stores/datasets'

const { fetchDatasets } = useDatasetStore()

onMounted(() => {
  fetchDatasets()
})
</script>
