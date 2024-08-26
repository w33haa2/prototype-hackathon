<template>
  <Card style="width: 20rem; overflow: hidden" class="hover:shadow-xl cursor-pointer hover:outline">
    <template #header>
      <img
        v-if="item?.datasource?.thumbnailImageUrl"
        alt="user header"
        class="h-[150px] w-full object-cover"
        :src="item?.datasource?.thumbnailImageUrl"
      />
      <img
        v-else
        alt="user header"
        class="h-[150px] w-full object-cover"
        src="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
      />
    </template>
    <template #title>
      <div class="flex justify-between items-start">
        <span class="text-black max-w-[200px] font-bold text-xl">{{
          item?.datasource?.title ?? '--'
        }}</span>
        <span class="text-black cursor-pointer text-sm hover:bg-gray-100 px-1 py-2 rounded-full">
          <i class="pi pi-ellipsis-v"></i>
        </span>
      </div>
    </template>
    <template #content>
      <div class="flex flex-col gap-[2px]">
        <div class="mb-1 flex justify-between items-center">
          <span class="font-semibold text-base max-w-[200px]">{{ item?.ownerName ?? '--' }}</span>
          <div class="flex items-center gap-[2px]">
            <Button class="w-[40px]" icon="pi pi-caret-up" text rounded aria-label="Filter" />
            <span class="text-gray-300 font-light">|</span>
            <span class="ml-2 text-sm font-semibold">{{ item?.voteButton?.totalVotes ?? 0 }}</span>
          </div>
        </div>
        <div class="flex items-center gap-3">
          <span class="text-xs"
            >Usability
            <span class="font-bold">{{
              item?.usabilityRating?.score
                ? parseFloat(item?.usabilityRating?.score * 10).toFixed(1)
                : 0
            }}</span></span
          >
          <span class="text-xs"
            ><i class="pi pi-file text-sm text-black"></i>
            {{ item?.datasetSize ? bytesConverter(item.datasetSize) : 0 }}</span
          >
        </div>
        <div v-for="(fileType, index) in fileTypes" :key="index" class="flex items-center gap-3">
          <span class="text-xs"
            >{{ fileType.count }} File
            <span class="font-bold uppercase"
              >{{ fileType.name }} ({{ fileType.totalSize }})</span
            ></span
          >
        </div>
        <div class="flex items-center gap-3">
          <span class="text-xs">Updated 5 months ago {{ formattedDate }}</span>
        </div>
      </div>
    </template>
  </Card>
</template>
<script setup>
import { computed } from 'vue'
import Card from 'primevue/card'
import Button from 'primevue/button'
import { formatDistance } from 'date-fns'

const props = defineProps({
  item: {
    type: Object,
    default: () => {}
  }
})

const bytesConverter = (bytes) => {
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
  if (bytes === 0) return '0 Byte'

  const i = Math.floor(Math.log(bytes) / Math.log(1024))
  const formattedSize = parseFloat((bytes / Math.pow(1024, i)).toFixed(2))

  return `${formattedSize} ${sizes[i]}`
}

const formattedDate = computed(() => {
  if (!props.item?.dateUpdated) return '--'
  return formatDistance(new Date(props.item?.dateUpdated), new Date(), {
    addSuffix: true
  })
})

const fileTypes = computed(() => {
  if (props.item?.commonFileTypes?.length > 0) {
    return props.item?.commonFileTypes.map((item) => {
      return {
        name: item.fileType.replace('DATASET_FILE_TYPE_', '').toLowerCase(),
        count: item.count,
        totalSize: bytesConverter(item.totalSize)
      }
    })
  }
  return []
})
</script>
