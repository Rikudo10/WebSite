<script setup>
import useShop from "../../composable/useShop";

const { ShopPage } = useShop();
</script>

<template>
  <div class="w-full mb-12">
    <div class="w-[60%] ml-[20%] flex gap-6">
      <div class="w-[25%]">
        <h2 class="2xl:text-2xl font-bold">Shop by Category</h2>
        <button
          class="bg-transparent block text-left border-black border mt-2 font-bold hover:bg-black text-black hover:text-white py-1 pl-6 w-[100%] text-lg rounded"
        >
          Gift Cards
        </button>
        <button
          class="bg-transparent block text-left border-black border mt-2 font-bold hover:bg-black text-black hover:text-white py-1 pl-6 w-[100%] text-lg rounded"
        >
          Tents
        </button>
        <button
          class="bg-transparent block text-left border-black border mt-2 font-bold hover:bg-black text-black hover:text-white py-1 pl-6 w-[100%] text-lg rounded"
        >
          Accessories
        </button>
        <button
          class="bg-transparent block text-left border-black border mt-2 font-bold hover:bg-black text-black hover:text-white py-1 pl-6 w-[100%] text-lg rounded"
        >
          Packs
        </button>
      </div>
      <div class="grid grid-cols-3 gap-6">
        <div>
          <div>
            <img
              class="object-cover 2xl:w-[500px] 2xl:h-[400px] w-[200px] h-[300px]"
              src="../../assets/Images/img6.jpg"
              alt=""
            />
          </div>
          <h2 class="mt-2 text-2xl text-center" v-text="ShopPage[0].Cards[0].title" />
          <h2 class="mt-1 text-base text-center" v-text="ShopPage[0].Cards[0].price" />
          <div class="flex justify-center mt-2">
            <button
              class="bg-[red] hover:bg-black text-white hover:text-white font-bold py-2 px-6 rounded"
            >
              Details
            </button>
          </div>
        </div>
        <div>
          <div>
            <img
              class="object-cover 2xl:w-[500px] 2xl:h-[400px] w-[200px] h-[300px]"
              src="../../assets/Images/img7.jpg"
              alt=""
            />
          </div>
          <h2 class="mt-2 text-2xl text-center" v-text="ShopPage[0].Cards[1].title" />
          <h2 class="mt-1 text-base text-center" v-text="ShopPage[0].Cards[1].price" />
          <div class="flex justify-center mt-2">
            <button
              class="bg-[red] hover:bg-black text-white hover:text-white font-bold py-2 px-6 rounded"
            >
              Details
            </button>
          </div>
        </div>
        <div>
          <div>
            <img
              class="object-cover 2xl:w-[500px] 2xl:h-[400px] w-[200px] h-[300px]"
              src="../../assets/Images/img8.jpg"
              alt=""
            />
          </div>
          <h2 class="mt-2 text-2xl text-center" v-text="ShopPage[0].Cards[2].title" />
          <h2 class="mt-1 text-base text-center" >{{ ShopPage[0].Cards[2].price }} <span class="line-through text-[red]">{{ ShopPage[0].Cards[2].price2 }}</span></h2>
          <div class="flex justify-center mt-2">
            <button
              class="bg-[red] hover:bg-black text-white hover:text-white font-bold py-2 px-6 rounded"
            >
              Details
            </button>
          </div>
        </div>
        <div>
          <div>
            <img
              class="object-cover 2xl:w-[500px] 2xl:h-[400px] w-[200px] h-[300px]"
              src="../../assets/Images/img9.jpg"
              alt=""
            />
          </div>
          <h2 class="mt-2 text-2xl text-center" v-text="ShopPage[0].Cards[3].title" />
          <h2 class="mt-1 text-base text-center" v-text="ShopPage[0].Cards[3].price" />
          <div class="flex justify-center mt-2">
            <button
              class="bg-[red] hover:bg-black text-white hover:text-white font-bold py-2 px-6 rounded"
            >
              Details
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
