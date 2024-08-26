<script setup>
import Topbar from '@/components/layouts/Topbar.vue'
import Sidebar from '../components/layouts/Sidebar.vue'
</script>

<template>
  <main class="bg-white h-full">
    <Sidebar />
    <div class="lg:pl-72">
      <Topbar />
      <main class="py-10">
        <div class="px-4 sm:px-6 lg:px-8">
          <slot />
        </div>
      </main>
    </div>
  </main>
</template>

<style>
body {
  background: white !important;
}
</style>
