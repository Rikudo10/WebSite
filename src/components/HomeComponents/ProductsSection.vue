<script setup>
import useHome from "../../composable/useHome";

const { HomePage } = useHome();
</script>

<template>
  <div>
    <div class="ml-[20%] mb-12">
      <h3 class="text-2xl" v-text="HomePage[0].products.title4" />
      <h2 class="text-4xl font-bold" v-text="HomePage[0].products.title5" />
    </div>

    <div class="flex flex-col items-center mb-32 ml-6">
      <div class="flex justify-center gap-4">
        <div class="w-[20%]">
          <img
            class="mb-6 rounded-md h-[100%]"
            src="../../assets/Images/img1.jpg"
            alt=""
          />
          <p
            class="text-center text-2xl mb-2"
            v-text="HomePage[0].products.title"
          />
          <p class="text-center font-bold">$ 200.00 USD</p>
          <div class="text-center mt-4">
            <button
              class="bg-[red] hover:bg-[black] text-[white] font-semibold py-2 px-6 border border-white rounded"
            >
              Details
            </button>
          </div>
        </div>
        <div class="w-[20%]">
          <img
            class="mb-6 rounded-md h-[100%]"
            src="../../assets/Images/img2.jpg"
            alt=""
          />
          <p
            class="text-center text-2xl mb-2"
            v-text="HomePage[0].products.title2"
          />
          <p class="text-center font-bold">$ 35.00 USD</p>
          <div class="text-center mt-4">
            <button
              class="bg-[red] hover:bg-[black] text-[white] font-semibold py-2 px-6 border border-white rounded"
            >
              Details
            </button>
          </div>
        </div>
        <div class="w-[20%]">
          <img
            class="mb-6 rounded-md h-[100%]"
            src="../../assets/Images/img3.jpg"
            alt=""
          />
          <p
            class="text-center text-2xl mb-2"
            v-text="HomePage[0].products.title"
          />
          <p class="text-center font-bold">
            $ 95.00 USD
            <span class="font-bold text-red-700 line-through"
              >$ 145.00.USD</span
            >
          </p>
          <div class="text-center mt-4">
            <button
              class="bg-[red] hover:bg-[black] text-[white] font-semibold py-2 px-6 border border-white rounded"
            >
              Details
            </button>
          </div>
        </div>
      </div>
      <div class="text-center mt-52">
        <button
          class="bg-[black] hover:bg-[red] text-[white] font-semibold py-2 px-8 border border-white rounded-lg"
        >
          View All Products
        </button>
      </div>
    </div>
    <div>
      <div class="rounded-lg bg-[#222] py-8 w-[60%] mx-auto">
        <img
          class="translate-y-32 -translate-x-64 2xl:w-[20%] absolute w-[30%] rounded-lg"
          src="../../assets/Images/img4.jpg"
          alt=""
        />
        <div class="text-left py-12 w-[40%] mx-auto">
          <h2 class="text-white mb-4 font-bold text-5xl">Shop Local.</h2>
          <p class="text-white mb-4 font-bold text-2x1">
            We know that during COVID-19, a lot of folks around the city and
            state are feeling uneasy about the future - we’re not sure what the
            future holds either.
          </p>
          <p class="text-white mb-4 font-bold text-2x1">
            That said: we know that we love making sure you have the gear you
            need for your adventures, and we’re going to keep doing that - with
            our team - until the city tells us we can’t.
          </p>
          <p class="text-white mb-4 font-bold text-2x1">
            But as long as folks like yourself support small businesses around
            the city, then we’ll be here — every day, making sure your orders
            arrive on time.
          </p>
          <p class="text-white mb-4 font-bold text-2x1">-------</p>
          <p class="text-white mb-4 font-bold text-2x1">Jane & John Doe</p>
          <p class="text-white mb-4 font-bold text-2x1">Acme Outdoors</p>
          <div></div>
        </div>
      </div>
    </div>
  </div>
</template>
