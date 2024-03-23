<script setup>
import useContact from "../../composable/useContact";
import chat from "../../assets/icons/chat.vue";
import support from "../../assets/icons/support.vue";
const { ContactPage } = useContact();
</script>

<template>
    <div class="">
      <div class="md:flex ">
        <div class=" block md:hidden relative">
          <div class="absolute md:inset-0 bg-gradient-to-r from-black to-transparent"></div>
          <img
            class="h-[650px] object-cover w-full"
            src="../../assets/Images/img5.jpg"
            alt=""
          />
        </div>
        <div class=" bg-[#222] md:w-[60%] pb-4 md:pb-0">
          <div class="md:pt-24 pt-6   md:ml-[33%]">
            <div>
              <h2 class="text-white ml-4 md:ml-0 text-3xl font-bold " v-text="ContactPage[0].ContactInfo.title" />
            </div>
            <div class="mt-10 md:flex  gap-6 ">
              <div class="bg-white rounded p-3 py-8 2xl:py-20 mx-4 md:mx-0 mb-6 md:mb-0 md:w-[50%]">
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
              <div class="bg-white rounded py-8 2xl:py-20  p-3 mx-4 md:mx-0 mb-6 md:mb-0 md:w-[50%]">
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
        <div class="w-[40%] hidden md:block relative">
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
  

  