<script setup lang="ts">
import { RouterLink } from "vue-router";
import { ref } from "vue";
import MenuIcon from "./icons/MenuIcon.vue";

const showMenu = ref(false);
</script>

<template>
  <div>
    <div class="bg-neutral-50">
      <nav class="container px-6 py-6 mx-auto md:flex md:justify-between md:items-center">
        <div class="flex items-center justify-between">
          <router-link to="/" class=" text-xl font-bold text-gray-800 md:text-2xl hover:text-blue-400">
            Company Name
          </router-link>
          <!-- Mobile menu button -->
          <div @click="showMenu = !showMenu" class="flex md:hidden">
            <button
              type="button"
              class="opacity-60 hover:opacity-100 focus:outline-none focus:opacity-100"
            >
              <MenuIcon />
            </button>
          </div>
        </div>
        <!-- Mobile Menu open: "flex", Menu closed: "hidden" -->
        <ul
          :class="showMenu ? 'flex' : 'hidden'"
          class="flex-col mt-8 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0"
        >
          <li class="text-sm font-bold text-gray-800 hover:text-blue-400">
            <RouterLink to="/">Home</RouterLink>
          </li>
          <li class="text-sm font-bold text-gray-800 hover:text-blue-400">
            <RouterLink to="/about">About</RouterLink>
          </li>
          <li class="text-sm font-bold text-gray-800 hover:text-blue-400">
            <RouterLink to="/contact">Contact</RouterLink>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>
