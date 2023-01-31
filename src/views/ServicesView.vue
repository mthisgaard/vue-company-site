<script setup lang="ts">
import { ref } from "vue";
import ServiceCard from "@/components/ServiceCard.vue";

const services = ref([
  {
    key: 1,
    title: "Titel 1",
    description:
      "Numquam blanditiis harum quisquam eius sed odit fugiat iusto fugapraesentium optio, eaque rerum!",
    price: "$",
  },
  {
    key: 2,
    title: "Titel 2",
    description:
      "Numquam blanditiis harum quisquam eius sed odit fugiat iusto fugapraesentium optio, eaque rerum!",
    price: "$$",
  },
  {
    key: 3,
    title: "Titel 3",
    description:
      "Numquam blanditiis harum quisquam eius sed odit fugiat iusto fugapraesentium optio, eaque rerum!",
    price: "$$$",
  },
]);
</script>

<template>
  <div class="flex flex-col items-center">
    <div class="w-[70%] md:w-[70%]">
      <h1 class="mb-4 drop-shadow-xl text-sea">Services</h1>
      <div class="grid md:grid-cols-3 gap-3">
        <ServiceCard
          v-for="service in services"
          :key="service.key"
          :service="service"
        />
      </div>
    </div>
  </div>
</template>
