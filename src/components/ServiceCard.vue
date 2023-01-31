<script setup lang="ts">
defineProps({
  service: Object,
});
</script>

<template>
  <div class="bg-neutral-50 py-8 px-12 rounded shadow">
    <div class="pb-6 flex items-center justify-between">
      <h1>{{ service.title }}</h1>
      <p>{{ service.price}}</p>
    </div>
    <p>{{ service.description }}</p>
  </div>
</template>
