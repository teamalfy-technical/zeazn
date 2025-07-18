<template>
    <section class="bg-[#050505F2] text-white px-6 md:px-12 lg:px-20 mx-auto relative">
      <div id="top"></div>
  
      <!-- Hero Section -->
      <div class="text-center mb-14 relative" data-aos="zoom-in" data-aos-duration="1000">
        <img
          src="../images/logo1.png"
          alt="Zeazn Logo"
          class="mx-auto w-40 md:w-48 mb-4"
          data-aos="zoom-in"
          data-aos-delay="100"
        />
  
        <h1
          class="text-4xl md:text-5xl font-bold text-[#EB8D41] flex justify-center items-center gap-3 mb-2"
          data-aos="fade-up"
        >
          <span data-aos="fade-right" data-aos-delay="500" data-aos-duration="3000">📜</span>
          Terms & Conditions
          <span data-aos="fade-left" data-aos-delay="500" data-aos-duration="3000">📜</span>
        </h1>
  
        <p class="text-gray-400 text-sm" data-aos="zoom-in" data-aos-delay="2000" data-aos-duration="1000">
          Last updated: 11 July 2025
        </p>
      </div>
  
      <!-- Intro -->
      <div class="mb-12 text-gray-300 leading-loose text-lg text-center max-w-3xl mx-auto" data-aos="fade-up">
        Welcome to the <span class="font-semibold text-white">Zeazn Invest App</span>, a platform for individuals
        and organizations to raise funds for creative causes. By using our services, you agree to the terms below.
      </div>
  
      <!-- Section List -->
      <div class="grid gap-12">
        <SectionBlock
          v-for="(section, index) in sections"
          :key="index"
          :icon="section.icon"
          :title="section.title"
          :content="section.content"
          :list="section.list"
          :delay="index * 100"
        />
      </div>
  
      <!-- Footer -->
      <marquee class="mt-16 text-center text-sm text-gray-500" data-aos="fade-up" data-aos-delay="100">
        📜 These Terms apply to your use of Zeazn Invest services. Please read them carefully.
        <span class="ml-72">📜 These Terms apply to your use of Zeazn Invest services. Please read them carefully.</span>
      </marquee>
  
      <!-- Scroll Button -->
      <button
        @click="scrollToTop"
        class="fixed bottom-6 right-6 bg-[#EB8D41] text-black hover:bg-orange-500 rounded-full p-3 shadow-lg z-50 transition"
        data-aos="fade-left"
        title="Back to top"
      >
        ⬆
      </button>
    </section>
  </template>
  
  <script>
  import SectionBlock from './SectionBlock.vue'
  
  export default {
    name: 'TermsAndConditions',
    components: { SectionBlock },
    methods: {
      scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
    },
    data() {
      return {
        sections: [
          {
            title: '1. Acceptance of Terms',
            icon: '✅',
            content: 'By accessing or using the Services, you agree to be bound by these Terms and our Privacy Policy. If you do not agree, please do not use the Services.'
          },
          {
            title: '2. Eligibility',
            icon: '🧑‍💼',
            content: 'You must have authority to bind any individual or organization you represent when using the Services on their behalf.'
          },
          {
            title: '3. Account Registration',
            icon: '📝',
            content: 'You agree to provide accurate, current information during registration and keep your credentials secure.'
          },
          {
            title: '4. User Conduct',
            icon: '🚧',
            list: [
              'Do not violate any laws',
              'Do not impersonate others or misrepresent affiliations',
              'Do not post illegal or harmful content',
              'Do not interfere with platform integrity or user access'
            ]
          },
          {
            title: '5. Fundraising Campaigns',
            icon: '🎯',
            list: [
              'Creators must provide accurate campaign information and follow applicable laws',
              'Funds must be used only as described in the campaign',
              'Donors understand that contributions are non-refundable unless otherwise stated',
              'Zeazn may remove campaigns that violate these terms'
            ]
          },
          {
            title: '6. Fees and Payments',
            icon: '💰',
            list: [
              'Certain services may incur fees',
              'All donations are subject to a 15% commission',
              'Fees are deducted before disbursing funds to creators'
            ]
          },
          {
            title: '7. Intellectual Property',
            icon: '📷',
            list: [
              'You retain rights to your content but grant Zeazn a license to use it within the platform',
              'All platform trademarks and logos belong to Zeazn or partners'
            ]
          },
          {
            title: '8. Privacy and Data Collection',
            icon: '🔐',
            content: 'Use of your data is governed by our Privacy Policy. By using the platform, you consent to its terms.'
          },
          {
            title: '9. Limitation of Liability',
            icon: '⚠️',
            content: 'Zeazn is not liable for losses resulting from use or inability to use the platform, including loss of funds or data.'
          },
          {
            title: '10. Indemnification',
            icon: '🛡️',
            content: 'You agree to hold Zeazn and its affiliates harmless from any claims or liabilities arising from your use of the Services.'
          },
          {
            title: '11. Termination',
            icon: '🔒',
            content: 'We may suspend or terminate your access to the Services if you violate these Terms.'
          },
          {
            title: '12. Dispute Resolution',
            icon: '⚖️',
            content: 'These Terms are governed by the laws of Ghana. Disputes will be resolved in Ghanaian courts.'
          },
          {
            title: '13. Amendments to Terms',
            icon: '🌀',
            content: 'We may update these Terms anytime. Continued use after changes implies acceptance.'
          },
          {
            title: '14. Contact Information',
            icon: '📬',
            content: `For inquiries, contact us at: <br />
              <strong>Zeazn Ltd</strong><br />
              Website: <a href="https://www.zeazn.com" class="underline text-[#EB8D41]">www.zeazn.com</a><br />
              Phone: +233 53 836 2526<br />
              Address: Accra, Ghana`
          }
        ]
      }
    }
  }
  </script>
  