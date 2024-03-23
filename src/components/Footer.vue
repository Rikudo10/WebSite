<script setup>
import Logo from "../assets/icons/logo.vue";
</script>
<template>
  <footer class="bg-[#222222] pb-4 p-16">
    <div class="w-full mx-auto flex flex-col gap-y-14">
      <div class="flex flex-col md:flex-row items-center justify-between px-5">
        <div class="md:ml-[17%] pl-1 mb-7 md:mb-0">
          <router-link to="/">
            <Logo />
          </router-link>
        </div>
        <div class="flex flex-wrap items-center gap-12 md:gap-4 md:mr-[17%]">
          <a href="#"
            ><img
              class="w-6 h-6"
              src="../assets/icons/Twitter.svg"
              alt="Twitter Icon"
          /></a>
          <a href="#"
            ><img
              class="w-6 h-6"
              src="../assets/icons/Facebook.svg"
              alt="Facebook Icon"
          /></a>
          <a href="#"
            ><img
              class="w-6 h-6"
              src="../assets/icons/Insta.svg"
              alt="Instagram Icon"
          /></a>
        </div>
      </div>

      <div class="block text-white text-center">
        Made In
        <a href="" class="text-[#eb5757] text-[12px] underline">Webflow</a>. ©
        2020.
      </div>
    </div>
  </footer>
</template>
