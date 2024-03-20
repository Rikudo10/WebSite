<script setup>
import useContact from "../../composable/useContact";
import chat from "../../assets/icons/chat.vue";
import support from "../../assets/icons/support.vue";
const { ContactPage } = useContact();
</script>

<template>
    <div class="mt-28">
      <div class="flex">
        <div class=" bg-[#222] w-[60%]">
          <div class="pt-24  ml-[33%]">
            <div>
              <h2 class="text-white text-3xl font-bold " v-text="ContactPage[0].ContactInfo.title" />
            </div>
            <div class="mt-10 flex gap-6 ">
              <div class="bg-white rounded p-3 py-8 2xl:py-20  w-[50%]">
                <div class="justify-center grid 2xl:pb-12 pb-8 ">
                  <chat />
                </div>
                <h3 class="text-center xl:text-2xl text-black pb-4 font-bold" v-text="ContactPage[0].ContactInfo.title2"  />
                <div class="h-22">
                  <p class="text-center " v-text="ContactPage[0].ContactInfo.description"  />
                  <span class="text-white"></span>
                </div>
                <div class="grid justify-center pt-6">
                  <button
                    class="bg-[red] hover:bg-[black] text-white 2xl:text-lg text-base font-bold py-1 2xl:px-6 px-4 rounded-lg"
                  >
                    Send Us A Message
                  </button>
                </div>
              </div>
              <div class="bg-white rounded py-8 2xl:py-20  p-3  w-[50%]">
                <div class="justify-center  grid 2xl:pb-12 pb-8">
                  <support />
                </div>
                <h3 class="text-center xl:text-2xl text-black pb-4 font-bold" v-text="ContactPage[0].ContactInfo.title3"  />
                <div class="h-22">
                  <p class="text-center " v-text="ContactPage[0].ContactInfo.description2"  />
                </div>
                <div class="grid justify-center pt-6">
                  <button
                    class="bg-[red] hover:bg-[black] text-white 2xl:text-lg text-base font-bold py-1 px-6 rounded-lg"
                  >
                    Contact Support
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="w-[40%] relative">
          <div class="absolute inset-0 bg-gradient-to-r from-black to-transparent"></div>
          <img
            class="h-[650px] object-cover w-full"
            src="../../assets/Images/img5.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  </template>
  

  