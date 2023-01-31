<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<template>
  <div class="flex justify-center items-center mt-16">
    <div class="text-center">
      <h1 class="drop-shadow-xl text-sea text-6xl font-kanit mb-12">Company Name</h1>
      <button
        class="py-3 px-6 bg-neutral-50 rounded-2xl text-gray-800 font-bold duration-500 hover:bg-sea hover:text-white"
      >
        <RouterLink to="/contact">Get in touch!</RouterLink>
      </button>
    </div>
  </div>
</template>
