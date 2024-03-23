<script setup>
import birds from "../assets/icons/birds.vue";
import logo from "../assets/icons/logo.vue";

import { onMounted } from "vue";
import { initFlowbite } from "flowbite";

// initialize components based on data attribute selectors
onMounted(() => {
  initFlowbite();
});
</script>

<template>
  <nav class="bg-[red]">
    <div class="bg-black w-full">
      <div class="md:flex  grid  md:gap-6 gap-2 py-4 justify-center">
        <button class="text-white  bg-[red] w-1/2 md:w-auto md:mx-0 mx-auto md:px-4 py-[5px] rounded-full">Announcement</button>
        <h2 class="text-white xl:text-2xl">How we're responding to COVID-19</h2>
      </div>
    </div>
    <div
      class="  md:ml-[19%] md:w-[70%] flex flex-wrap items-center justify-between  p-4"
    >
      <router-link to="/">
        <logo />
      </router-link>
      
      <button
        data-collapse-toggle="navbar-default"
        type="button"
        class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="navbar-default"
        aria-expanded="false"
      >
        <span class="sr-only">Open main menu</span>
        <svg
          class="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>
      <div class="hidden w-full md:block md:w-auto" id="navbar-default">
        <ul
          class="font-medium flex flex-col p-4 md:p-0 mt-4 rounded-lg md:flex-row 2xl:space-x-12 rtl:space-x-reverse md:mt-0"
        >
          <router-link to="/">
            <li class="hover:bg-black px-4 py-1 rounded">
              <a
                href="#"
                class="block py-2 px-3 text-white rounded md:p-0"
                aria-current="page"
                >Home</a
              >
            </li>
          </router-link>
          <router-link to="/About">
            <li class="hover:bg-black px-4 py-1 rounded">
              <a
                href="#"
                class="block py-2 px-3 text-white rounded md:border-0 md:p-0"
                >About</a
              >
            </li>
          </router-link>
          <router-link to="/Shop">
            <li class="hover:bg-black px-4 py-1 rounded">
              <a
                href="#"
                class="block py-2 px-3 text-white rounded md:border-0 md:p-0"
                >Shop</a
              >
            </li>
          </router-link>
          <router-link to="/Donate">
            <li class="hover:bg-black px-4 py-1 rounded">
              <a
                href="#"
                class="block py-2 px-3 text-white rounded md:border-0 md:p-0"
                >Donate</a
              >
            </li>
          </router-link>
          <router-link to="/Contact">
            <li class="hover:bg-black px-4 py-1 rounded">
              <a
                href="#"
                class="block py-2 px-3 text-white rounded md:border-0 md:p-0"
                >Contact</a
              >
            </li>
          </router-link>
          <button>
            <li class=" hidden md:block  bg-black md:px-4 py-1 rounded">
              <birds />
              <span
                class="text-black bg-white rounded-full px-2 absolute translate-x-4 -translate-y-9"
              >
                3
              </span>
            </li>
          </button>
        </ul>
      </div>
    </div>
  </nav>
</template>