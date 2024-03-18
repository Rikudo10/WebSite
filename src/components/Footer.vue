<script setup>
import Logo from "../assets/icons/logo.vue";
</script>
<template>
  <footer class="bg-[#222222] pb-4 p-16">
    <div class="w-full mx-auto flex flex-col gap-y-14">
      <div class="flex items-center justify-between px-5">
        <div class="ml-[17%]">
          <router-link to="/">
            <Logo />
          </router-link>
          </div>
     <div class="flex flex-wrap items-center gap-4 mr-[17%]">
          <a href="#"
            ><img class="w-6 h-6" src="../assets/icons/Twitter.svg" alt="Logo"
          /></a>
          <a href="#"
            ><img class="w-6 h-6" src="../assets/icons/Facebook.svg" alt="Logo"
          /></a>
          <a href="#"
            ><img class="w-6 h-6" src="../assets/icons/insta.svg" alt="Logo"
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
