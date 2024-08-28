<template>
  <div
    class="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8"
  >
    <!-- Separator -->
    <div class="h-6 w-px bg-gray-200 lg:hidden" aria-hidden="true"></div>

    <div class="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
      <form class="relative flex flex-1 items-center gap-4" action="#" method="GET">
        <label for="search-field" class="sr-only">Search</label>
        <svg
          class="pointer-events-none inset-y-0 left-0 h-6 text-gray-400"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fill-rule="evenodd"
            d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
            clip-rule="evenodd"
          />
        </svg>
        <input
          id="search-field"
          class="block h-full w-full border-0 py-0 pr-0 text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm"
          placeholder="Search..."
          type="search"
          name="search"
        />
      </form>
      <div class="flex items-center gap-x-4 lg:gap-x-6">
        <!-- Separator -->
        <div class="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-200" aria-hidden="true"></div>

        <!-- Profile dropdown -->
        <Button class="hidden sm:block" label="Connect Wallet" rounded />
        <Button icon="pi pi-sign-in" @click="logout" severity="info" rounded />
      </div>
    </div>
  </div>
</template>
<script setup>
import Button from 'primevue/button'

import { userAuthStore } from '@/stores/auth'

const { logout } = userAuthStore()
</script>
