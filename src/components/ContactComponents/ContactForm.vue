<script setup></script>

<template>
  <div class="mt-20 gap-[10%] md:flex">
    <div class="md:ml-[20%] px-4 md:px-0 pb-4 md:pb-0">
      <div>
        <h2 class="text-3xl font-bold mb-4">Contact Us</h2>
        <h5>Acme Outdoors</h5>
        <h5>123 Rainy Street</h5>
        <h5>Oklahoma City, OK 73129</h5>
        <div class="mt-8">
          <h5 class="font-bold">
            General Inquiries:<span class="font-normal"> (405) 555-5555</span>
          </h5>
          <h5 class="font-bold">
            Customer Support:<span class="font-normal"> (405) 555-5556</span>
          </h5>
        </div>
      </div>
    </div>
    <div class="md:w-[30%] px-4 md:px-0 ">
      <h2 class="text-3xl font-bold mb-4">Contact Form</h2>
      <h5 class="mb-4">
        Send us a message and we'll get back to you as soon as we can!
      </h5>
      <form  class="space-y-4 mb-6 ">
        <label class="block" for="Name">Name</label>
        <input class="border border-black rounded px-4 py-2 w-full" type="text" id="Name" placeholder="Enter your Name" required>
        <label class="block" for="email">Email Address</label>
        <input class="border border-black rounded px-4 py-2 w-full" type="email" id="email" placeholder="Enter your email Address" required>
        <label class="block" >Your Message</label>
        <textarea name="textarea" id="" cols="30" rows="2" class="border px-4 py-4 border-black rounded w-full"  placeholder="Enter your message"></textarea>
        <button
                    class="bg-[red] hover:bg-[black] text-white 2xl:text-lg text-base font-bold py-1 px-6 rounded-lg"
                  >
                    Submit
                  </button>
    </form>
    </div>
  </div>
</template>
