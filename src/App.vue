<script setup>
import { onMounted, ref } from "vue";

// Reactive states
const currentHash = ref(window.location.hash);
const hide = ref(true);

// Function to check if a section is active
const isActive = (routeHash) => currentHash.value === routeHash;

// Function to update hash when it changes
const updateHash = () => {
  currentHash.value = window.location.hash;
};

// Toggle mobile menu
const toggleVisibility = () => {
  hide.value = !hide.value;
};

// Lifecycle hook to listen to hash change
onMounted(() => {
  window.addEventListener("hashchange", updateHash);
});
</script>

<template>
  <div id="app">
    <!-- Desktop Navbar -->
    <div
      class="fixed top-0 w-full bg-[#050505] border-b-2 shadow-2xl z-50 pb-3 border-slate-900"
    >
      <nav class="flex justify-between items-center px-3 pt-2">
        <img class="w-32 h-16" src="./images/logo5.png" alt="Company Logo" />
        <img
          @click="toggleVisibility"
          class="w-12 h-10 mt-5 md:hidden cursor-pointer"
          src="../images/hum2.png"
          alt="Menu Icon"
        />
        <div
          class="text-white gap-5 md:gap-9 md:flex items-center hidden md:block"
        >
          <a
            :class="[
              isActive('#home')
                ? 'text-[#EB8D41] underline'
                : 'hover:text-[#EB8D41] hover:underline',
              'transition-colors duration-1000',
            ]"
            href="/#home"
            >Home</a
          >
          <a
            :class="[
              isActive('#about')
                ? 'text-[#EB8D41] underline'
                : 'hover:text-[#EB8D41] hover:underline',
              'transition-colors duration-1000',
            ]"
            href="/#about"
            >About</a
          >
          <a
            :class="[
              isActive('#how')
                ? 'text-[#EB8D41] underline'
                : 'hover:text-[#EB8D41] hover:underline',
              'transition-colors duration-1000',
            ]"
            href="/#how"
            >How it works</a
          >
          <a
            :class="[
              isActive('#features')
                ? 'text-[#EB8D41] underline'
                : 'hover:text-[#EB8D41] hover:underline',
              'transition-colors duration-1000',
            ]"
            href="/#features"
            >Features</a
          >
          <a
            :class="[
              isActive('#pricing')
                ? 'text-[#EB8D41] underline'
                : 'hover:text-[#EB8D41] hover:underline',
              'transition-colors duration-1000',
            ]"
            href="/#pricing"
            >Pricing</a
          >
          <a
            class="hover:text-[#EB8D41] hover:underline transition-colors duration-1000 hover:bg-black hover:border-white border-2 border-[#EB8D41] bg-[#EB8D41] rounded-3xl md:p-1 px-2 md:px-5 p-9"
            href="/#contact"
            >Contact us</a
          >
        </div>
      </nav>
    </div>

    <!-- Mobile Navbar -->
    <nav class="md:hidden text-center" v-if="!hide">
      <div class="text-white fixed w-full h-full text-xl space-y-5 p-3 z-20">
        <div
          class="bg-black w-full h-full absolute opacity-80 mt-[-20px]"
        ></div>
        <a
          @click="toggleVisibility"
          :class="[
            isActive('#home')
              ? 'text-[#EB8D41] underline'
              : 'hover:text-[#EB8D41] hover:underline',
            'transition-colors duration-1000 z-30 block relative',
          ]"
          href="#home"
          >Home</a
        >
        <a
          @click="toggleVisibility"
          :class="[
            isActive('#about')
              ? 'text-[#EB8D41] underline'
              : 'hover:text-[#EB8D41] hover:underline',
            'transition-colors duration-1000 z-30 block relative',
          ]"
          href="#about"
          >About</a
        >
        <a
          @click="toggleVisibility"
          :class="[
            isActive('#how')
              ? 'text-[#EB8D41] underline'
              : 'hover:text-[#EB8D41] hover:underline',
            'transition-colors duration-1000 z-30 block relative',
          ]"
          href="#how"
          >How it works</a
        >
        <a
          @click="toggleVisibility"
          :class="[
            isActive('#features')
              ? 'text-[#EB8D41] underline'
              : 'hover:text-[#EB8D41] hover:underline',
            'transition-colors duration-1000 z-30 block relative',
          ]"
          href="#features"
          >Features</a
        >
        <a
          @click="toggleVisibility"
          :class="[
            isActive('#pricing')
              ? 'text-[#EB8D41] underline'
              : 'hover:text-[#EB8D41] hover:underline',
            'transition-colors duration-1000 z-30 block relative pb-5',
          ]"
          href="#pricing"
          >Pricing</a
        >
        <a
          @click="toggleVisibility"
          :class="[
            isActive('#contact')
              ? 'underline'
              : 'hover:bg-black hover:text-[#EB8D41] hover:underline',
            'transition-colors duration-1000 z-30 border-[#EB8D41] border-2 bg-[#EB8D41] rounded-3xl p-1 px-5 space-y-10 relative',
          ]"
          href="#contact"
          >Contact us</a
        >
      </div>
    </nav>

    <!-- Faint line after nav -->
    <!-- <div class="bg-slate-950 h-1 mb-16 sm:mb-20 my-6"></div> -->

    <!-- Route pages will load here -->
    <router-view></router-view>

    <!-- START::Footer -->
    <div class="flex pb-10 md:pr-16 gap-4 justify-end pt-20 bg-[#050505F2]">
      <a href="#">
        <img class="w-4 h-4" src="./images/twitter.png" alt=""
      /></a>
      <a href="#">
        <img class="w-4 h-4" src="./images/linkedin.png" alt=""
      /></a>
      <a href="#">
        <img class="w-4 h-4" src="./images/facebook.png" alt=""
      /></a>
      <a href="#"> <img class="w-4 h-4" src="./images/web.png" alt="" /></a>

      <img class="ml-12 md:ml-60 w- h-5" src="./images/zean.png" alt="" />
    </div>
    <!-- END::Footer -->
  </div>
</template>

<style scoped>
/* Add your styles here if needed */
</style>
