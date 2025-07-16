<template>
    <div :data-aos="'fade-up'" :data-aos-delay="delay" class="flex flex-col md:flex-row items-start gap-6">
      <div class="text-3xl md:text-4xl w-12 md:w-14 flex-shrink-0 text-[#EB8D41]">{{ icon }}</div>
      <div>
        <h3 class="text-xl md:text-2xl font-bold mb-2 text-white">{{ title }}</h3>
        <p v-if="content" class="text-gray-300 leading-relaxed" v-html="content"></p>
        <ul v-if="list" class="list-disc pl-5 space-y-1 text-gray-300">
          <li v-for="(item, index) in list" :key="index">{{ item }}</li>
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'SectionBlock',
    props: {
      icon: String,
      title: String,
      content: String,
      list: Array,
      delay: Number
    }
  }
  </script>
  