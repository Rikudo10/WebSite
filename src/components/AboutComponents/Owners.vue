<script setup>
import useAbout from "../../composable/useAbout";

const { AboutPage } = useAbout();
</script>

<template>
  <div class="w-full">
    <div class="relative md:w-[60%] md:mx-[20%] md:my-[3%] md:flex justify-end">
      <img
        class="hidden md:block md:absolute md:w-[47%] md:h-[88%] left-0 md:translate-y-[7%] rounded-md"
        src="../../assets/Images/meet.jpeg"
        alt="ph"
      />
      <div class="static bg-[#222] md:w-[65%] rounded-md pb-6 md:pb-0">
        <img
          class="block md:hidden md:absolute md:w-[47%] md:h-[88%] left-0 md:translate-y-[7%] rounded-md"
          src="../../assets/Images/meet.jpeg"
          alt="ph"
        />
        <div
          class="text-white mx-10 md:mx-0 md:ml-[27%] md:mr-[8%] my-[12%] flex flex-col gap-6"
        >
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
