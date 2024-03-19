<script setup>
import useAbout from "../../composable/useAbout";

const { AboutPage } = useAbout();
</script>

<template>
  <div>
    <div class="flex w-[60%] mx-[20%] px-[5%] mt-[7%] mb-[5%] gap-44">
      <div class="flex flex-col text-center gap-4">
        <img
          class="w-[50%] mx-[25%]"
          src="../../assets/Images/John.png"
          alt="ph"
        />
        <h3
          class="text-[#333] font-bold text-3xl"
          v-text="AboutPage[0].ownerss.title"
        />
        <p
          class="text-[#333] text-base font-normal"
          v-text="AboutPage[0].ownerss.description"
        />
      </div>
      <div class="flex flex-col text-center gap-4">
        <img
          class="w-[50%] mx-[25%]"
          src="../../assets/Images/Jane.png"
          alt="ph"
        />
        <h3
          class="text-[#333] font-bold text-3xl"
          v-text="AboutPage[0].ownerss.title2"
        />
        <p class="" v-text="AboutPage[0].ownerss.description2" />
      </div>
    </div>
  </div>
</template>
