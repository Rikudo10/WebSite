<script setup>
import useAbout from "../../composable/useAbout";

const { AboutPage } = useAbout();
</script>

<template>
  <div class="w-full">
    <div class="relative w-[60%] mx-[20%] my-[3%] flex justify-end">
      <img
        class="absolute w-[47%] h-[88%] left-0 translate-y-[7%] rounded-md"
        src="../../assets/Images/meet.jpeg"
        alt="ph"
      />
      <div class="static bg-[#222] w-[65%] rounded-md">
        <div class="text-white ml-[27%] mr-[8%] my-[12%] flex flex-col gap-6">
          <h2 class="text-4xl font-bold" v-text="AboutPage[0].owners.title" />
          <p
            class="text-base font-normal"
            v-text="AboutPage[0].owners.paragraph"
          />
          <p
            class="text-base font-normal"
            v-text="AboutPage[0].owners.paragraph2"
          />
          <p
            class="text-base font-normal"
            v-text="AboutPage[0].owners.paragraph3"
          />
          <p
            class="text-base font-normal"
            v-text="AboutPage[0].owners.paragraph4"
          />
          <p
            class="text-base font-normal"
            v-text="AboutPage[0].owners.paragraph5"
          />
          <p
            class="text-base font-normal"
            v-text="AboutPage[0].owners.paragraph6"
          />
        </div>
      </div>
    </div>
  </div>
</template>
