<script setup>
import useHome from "../../composable/useHome";

const { HomePage } = useHome();
</script>

<template>
  <div class="container mx-auto xl:mt-52 mt-12 xl:mb-32 mb-12">
    <div class="py-4">
      <div class="xl:flex pl-4 xl:pl-0 justify-between gap-12 mb-8">
        <div class="xl:w-1/2">
          <h5 class="text-2xl pb-2 xl:pt-0" v-text="HomePage[0].support.title" />
          <h2 class="text-4xl text-black pb-3 xl:pt-0" v-text="HomePage[0].support.title2" />
        </div>
        <div class="xl:w-1/2">
          <p class="text-lg" v-text="HomePage[0].support.description" />
        </div>
      </div>
    </div>
    <div class="xl:grid grid-cols-3 px-4 xl:px-0 gap-6 ">
      <div v-for="card in HomePage[0].cards" :key="card.number">
        <div class="bg-[#222] py-12 px-4 mb-8  h-72">
          <h2 class="text-white ml-4 text-4xl	mb-12" v-text="card.number" />
          <h2 class="text-white text-center  text-4xl " v-text="card.title" />
        </div>
        <p class="mb-4" v-text="card.description" />
      </div>
    </div>
  </div>
</template>
