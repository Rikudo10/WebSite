<script setup>
import useHome from "../../composable/useHome";

const { HomePage } = useHome();
</script>
<template>
  <div class="relative">
    <div class="relative">
      <img
        class="w-full object-cover h-[700px] absolute"
        src="../../assets/Images/Cover.jpg"
        alt=""
      />
    </div>
    <div class="z-10 relative w-1/2 p-4 mx-auto">
      <div class="mt-56">
        <div class="w-[450px]">
          <h1 class="text-white text-6xl pb-6 font-bold" v-text="HomePage[0].hero.title" />
        </div>
        <div class="w-[390px]">
          <p class="text-white text-lg pb-6" v-text="HomePage[0].hero.description" />
        </div>
        <button
          class="bg-transparent hover:bg-[white] text-[white] font-semibold hover:text-black py-2 px-6 border border-white rounded"
        >
          Shop Merch
        </button>
      </div>
    </div>
  </div>
</template>
