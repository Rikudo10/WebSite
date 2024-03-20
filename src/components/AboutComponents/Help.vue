<script setup>
import useAbout from "../../composable/useAbout";

const { AboutPage } = useAbout();
</script>

<template>
  <div class="relative mb-36">
    <div class="relative">
      <img
        class="w-full object-cover h-[650px] absolute"
        src="../../assets/Images/help.jpeg"
        alt=""
      />
    </div>
    <div class="z-10 relative w-[80%] p-4 mx-auto ml-[19%]">
      <div class="mt-52">
        <div class="w-[450px]">
          <h1
            class="text-white text-6xl pb-6 font-bold"
            v-text="AboutPage[0].help.title"
          />
        </div>
        <div class="w-[390px]">
          <p
            class="text-white text-lg pb-6"
            v-text="AboutPage[0].help.description"
          />
        </div>
        <button
          class="bg-transparent hover:bg-[white] text-[white] font-semibold hover:text-black py-1.5 px-6 border border-white rounded"
        >
          Contact Support
        </button>
      </div>
    </div>
  </div>
</template>
