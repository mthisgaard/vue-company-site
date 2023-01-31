<script setup lang="ts">
import { RouterLink } from "vue-router";
import { ref } from "vue";
import MenuIcon from "./icons/MenuIcon.vue";

const showMenu = ref(false);
</script>

<template>
  <div>
    <div class="font-kanit">
      <nav
        class="container px-6 py-6 mx-auto md:flex md:justify-between md:items-center"
      >
        <div class="flex items-center justify-between">
          <router-link
            to="/"
            class="drop-shadow-xl text-xl md:text-2xl text-sea"
          >
            Company Name
          </router-link>
          <!-- Mobile menu button -->
          <div @click="showMenu = !showMenu" class="flex md:hidden">
            <button
              type="button"
              class="text-sea opacity-60 hover:opacity-100 focus:outline-none focus:opacity-100"
            >
              <MenuIcon />
            </button>
          </div>
        </div>
        <!-- Mobile Menu open: "flex", Menu closed: "hidden" -->
        <ul
          :class="showMenu ? 'flex' : 'hidden'"
          class="flex-col fixed right-6 items-end mt-4 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0"
        >
          <li
            class="drop-shadow-xl text-sm text-sea duration-500 hover:scale-110"
          >
            <RouterLink to="/services">Services</RouterLink>
          </li>
          <li
            class="drop-shadow-xl text-sm text-sea duration-500 hover:scale-110"
          >
            <RouterLink to="/about">About</RouterLink>
          </li>
          <li
            class="drop-shadow-xl text-sm text-sea duration-500 hover:scale-110"
          >
            <RouterLink to="/contact">Contact</RouterLink>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>




