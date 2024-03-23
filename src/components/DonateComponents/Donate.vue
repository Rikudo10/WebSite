<script setup>
import useDonate from "../../composable/useDonate";

const { DonatePage } = useDonate();
</script>
<template>
  <div>
    <div>
      <div class="relative">
        <div class="absolute text-center mt-44 ">
          <h2 class="text-5xl font-bold text-white pb-4" v-text="DonatePage[0].DonateInfo.title" />
          <h3 class="text-3xl text-white pb-4" v-text="DonatePage[0].DonateInfo.title2" />
          <div class="w-[40%] mx-auto">
          <p class="text-white " v-text="DonatePage[0].DonateInfo.description" />
        </div>
        </div>
        <img
          class="object-cover h-[900px] md:h-[650px] w-[100%]"
          src="../../assets/Images/donate.jpg"
          alt=""
        />
        <div
          class="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black opacity-100"
        ></div>
      </div>
    </div>
  </div>
</template>
