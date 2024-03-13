<script setup>
import birds from "../assets/icons/birds.vue";
import logo from "../assets/icons/logo.vue";
</script>

<template>
  <nav class="bg-black fixed w-full z-20 top-0 start-0">
    <div
      class="w-[62%] flex flex-wrap items-center justify-between mx-auto p-4"
    >
      <div class="flex w-full gap-2 justify-center">
        <button class="bg-[#eb5757] text-white py-1 px-5 rounded-full">
          Announcement
        </button>
        <p class="text-white text-[20px]">How we're responding to COVID-19</p>
      </div>
      <div class="hidden w-full md:block md:w-auto" id="navbar-default"></div>
    </div>
  </nav>
  <nav class="bg-[#eb5757] fixed w-full z-20 top-[62px] start-0">
    <div
      class="w-[62%] flex flex-wrap items-center justify-between mx-auto p-4"
    >
      <logo />
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
          class="font-medium flex flex-col p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-10 rtl:space-x-reverse md:mt-0 md:border-0"
        >
          <li class="hover:bg-black px-2 rounded-md">
            <a href="#" class="block text-white md:p-0" aria-current="page"
              >Home</a
            >
          </li>
          <li class="hover:bg-black px-2 rounded-md">
            <a href="#" class="block text-white md:p-0">About</a>
          </li>
          <li class="hover:bg-black px-2 rounded-md">
            <a href="#" class="block text-white md:p-0">Shop</a>
          </li>
          <li class="hover:bg-black px-2 rounded-md">
            <a href="#" class="block text-white md:p-0">Donate</a>
          </li>
          <li class="hover:bg-black px-2 rounded-md">
            <a href="#" class="block text-white md:p-0">Contact</a>
          </li>
          <li class="hover:bg-black px-2 rounded-md">
            <div
              class="rounded-full text-black bg-white text-center w-[16px] h-[16px] text-[11px] translate-x-6 -translate-y-1 absolute"
            >
              3
            </div>
            <birds />
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
