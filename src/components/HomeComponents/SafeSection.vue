<script setup>
import useHome from "../../composable/useHome";

const { HomePage } = useHome();
</script>

<template>
  <div class="relative mb-44 2xl:mb-72">
    <div class="">
      <img
        class="w-full object-cover h-[700px] absolute"
        src="../../assets/Images/Cover2.jpg"
        alt=""
      />
      <div
        class="absolute inset-0 bg-gradient-to-b from-transparent to-rgba-34-34-34-0-17"
      ></div>
      <!-- Added gradient overlay -->
    </div>
    <div class="z-10 relative w-full">
      <div class="w-[40%] xl:ml-[41%] ml-auto pt-64">
        <div class="">
          <h1
            class="text-white text-6xl pb-6 font-bold text-right"
            v-text="HomePage[0].hero.title2"
          />
        </div>
        <div class="">
          <div class="text-right">
            <!-- Adjusted alignment of description -->
            <p
              class="text-white text-lg pb-6"
              v-text="HomePage[0].hero.description2"
            />
          </div>
          <div class="text-right">
            <!-- Adjusted alignment of button -->
            <button
              class="bg-white hover:bg-[red] text-[black] font-semibold hover:text-white py-2 px-6 border border-[white] rounded"
            >
              Read Our Statement
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.bg-gradient-to-b {
  /* You can adjust the gradient angle and colors here */
  background-image: linear-gradient(
    to bottom,
    rgba(34, 34, 34, 0.17) 0%,
    transparent 100%
  );
}
</style>
