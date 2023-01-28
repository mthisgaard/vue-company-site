<script setup lang="ts">
import { RouterView } from "vue-router";
import Navbar from '@/components/Navbar.vue'
</script>

<template>
  <Navbar />
  <div class="page">
    <RouterView/>
  </div>
</template>

<style scoped>
</style>
