<script setup>
import useAbout from "../../composable/useAbout";

const { AboutPage } = useAbout();
</script>

<template>
  <div class="mt-40">
    <div class="w-full">
      <div class="text-center flex flex-col gap-4 md:w-[40%] md:ml-[30%]">
        <p class="text-[#333]" v-text="AboutPage[0].business.question" />
        <h2
          class="text-3xl text-[#333] font-bold"
          v-text="AboutPage[0].business.title"
        />
        <p class="text-[#333]" v-text="AboutPage[0].business.description" />
      </div>
    </div>
    <div class="flex md:flex-row flex-col w-[60%] ml-[20%] py-[5%] gap-3">
      <div class="space-y-3">
        <img
          class="mx-auto md:mx-0 justify-center"
          src="../../assets/icons/ok.svg"
          alt="Logo"
        />
        <h3
          class="text-xl text-[#333] font-bold text-center md:text-left"
          v-text="AboutPage[0].business.heading"
        />
        <p
          class="text-[#333] text-center md:text-left"
          v-text="AboutPage[0].business.paragraph"
        />
      </div>
      <div class="space-y-3">
        <img
          class="mx-auto md:mx-0 justify-center"
          src="../../assets/icons/market.svg"
          alt="Logo"
        />
        <h3
          class="text-xl text-[#333] font-bold text-center md:text-left"
          v-text="AboutPage[0].business.heading2"
        />
        <p
          class="text-[#333] text-center md:text-left"
          v-text="AboutPage[0].business.paragraph2"
        />
      </div>
      <div class="space-y-3">
        <img
          class="mx-auto md:mx-0 justify-center"
          src="../../assets/icons/car.svg"
          alt="Logo"
        />
        <h3
          class="text-xl text-[#333] font-bold text-center md:text-left"
          v-text="AboutPage[0].business.heading3"
        />
        <p
          class="text-[#333] text-center md:text-left"
          v-text="AboutPage[0].business.paragraph3"
        />
      </div>
      <div class="space-y-3">
        <img
          class="mx-auto md:mx-0 justify-center"
          src="../../assets/icons/question.svg"
          alt="Logo"
        />
        <h3
          class="text-xl text-[#333] font-bold text-center md:text-left"
          v-text="AboutPage[0].business.heading4"
        />
        <p
          class="text-[#333] text-center md:text-left"
          v-text="AboutPage[0].business.paragraph4"
        />
      </div>
    </div>
  </div>
</template>
