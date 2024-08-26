<script setup>
import Navbar from '../components/layouts/Navbar.vue'
import Footer from '../components/common/Footer.vue'
</script>

<template>
  <main>
    <Navbar />
    <slot />
    <Footer />
  </main>
</template>

<style>
body {
  background-color: #f5f5f5 !important;
}
</style>
