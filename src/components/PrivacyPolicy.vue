<template>
  <section class="bg-[#050505F2] text-white px-6 md:px-12 lg:px-20 mx-auto relative">
    <!-- Scroll Anchor -->
    <div id="top"></div>

<!-- Back to Home Button -->
<!-- Back to Home Button (Top Left) -->



    <!-- Hero Section -->
    <div class="text-center mb-14 relative" data-aos="zoom-in" data-aos-duration="1000">
  <!-- Logo -->
  <img
    src="../images/logo1.png"
    alt="Zeazn Logo"
    class="mx-auto w-40 md:w-48 mb-4"
    data-aos="zoom-in"
    data-aos-delay="100"
  />

  <!-- Main Heading with Emojis -->
  <h1 class="text-4xl md:text-5xl font-bold text-[#EB8D41] flex justify-center items-center gap-3 mb-2" data-aos="fade-up">
    <span data-aos="fade-right" data-aos-delay="500" data-aos-duration="3000">🔐</span>
    Zeazn Privacy Policy
    <span data-aos="fade-left" data-aos-delay="500" data-aos-duration="3000">🔐</span>
  </h1>

  <!-- Subheading -->
  <p class="text-gray-400 text-sm" data-aos="zoom-in" data-aos-delay="2000" data-aos-duration="1000">
    Last updated: 11 July 2025
  </p>
</div>


    <!-- Intro Paragraph -->
    <div class="mb-12 text-gray-300 leading-loose text-lg text-center max-w-3xl mx-auto" data-aos="fade-up">
      Thank you for choosing <span class="font-semibold text-white">Zeazn</span> — your trusted platform for
      trading intellectual property, trademarks, and innovations. This policy explains what data we collect 📊,
      how we use it 🔁, and your rights 🙋.
    </div>

    <!-- Sections -->
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

    <!-- Footer Note -->
    <marquee class="mt-16 text-center text-sm text-gray-500" data-aos="fade-up" data-aos-delay="100">
      ⚖️ This document is for general information and doesn’t replace legal advice.
      Please consult a qualified attorney for jurisdiction-specific needs. ⚖️        <span class="ml-72">⚖️ This document is for general information and doesn’t replace legal advice.
        Please consult a qualified attorney for jurisdiction-specific needs. ⚖️</span>
    </marquee>

    <!-- Footer -->
    <!-- <footer class="mt-20 border-t border-gray-700 pt-8 text-center text-gray-400 text-sm" data-aos="zoom-in" data-aos-delay="1000" data-aos-duration="1000">
      <p>© 2025 Zeazn Ltd. All rights reserved.</p>
      <p>📬 Contact: <a href="mailto:privacy@zeazn.com" class="text-[#EB8D41] underline">privacy@zeazn.com</a></p>
    </footer> -->

    <!-- Back to Top Button -->
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
  name: 'PrivacyPolicy',
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
          title: '1. Who We Are',
          icon: '👤',
          content: `Zeazn Ltd. operates the Zeazn marketplace and crowdfunding platform.<br>
            
            📧 <a href="mailto:privacy@zeazn.com" class="text-[#EB8D41] underline">privacy@zeazn.com</a><br>
            Zeazn Ltd. is your data controller if you're in the EEA.`
        },
        {
          title: '2. Data We Collect',
          icon: '📦',
          list: [
            'Account Data – name, email, password, role',
            'Profile Data – bio, company, photo, portfolio links',
            'Identity & KYC – passport, ID, address proof',
            'Listing Data – images, videos, IP docs, projections',
            'Transaction Data – purchases, royalties, tokens',
            'Messages & Support – chats, comments, tickets',
            'Tech Info – device, IP, browser, cookies'
          ]
        },
        {
          title: '3. How We Use Your Data',
          icon: '⚙️',
          list: [
            '✅ Secure & provide services (contract/legal)',
            '💸 Process transactions & payouts',
            '📊 Analytics and platform improvements',
            '📢 Marketing (with consent)',
            '🛡️ Legal compliance (obligation)'
          ]
        },
        {
          title: '4. Who We Share With',
          icon: '🔗',
          content: `We may share your data with trusted partners like payment processors,
            identity verifiers, cloud hosts, analytics providers, and regulators — all under strict contracts.`
        },
        {
          title: '5. International Transfers',
          icon: '🌍',
          content: `Data may be hosted in the EU and USA. Transfers outside the EEA/UK comply with GDPR via
            Standard Contractual Clauses or adequacy rules.`
        },
        {
          title: '6. Data Retention',
          icon: '📁',
          list: [
            'Accounts – active + 6 years',
            'KYC – 5 years post-transaction',
            'Support chats – 3 years',
            'Cookies – see Cookie Notice'
          ]
        },
        {
          title: '7. Your Rights',
          icon: '🧾',
          content: `You may access, correct, delete, or export your data, and withdraw consent at any time.
            Contact us via <a href="mailto:privacy@zeazn.com" class="text-[#EB8D41] underline">privacy@zeazn.com</a>.
            California residents have additional rights under CCPA/CPRA.`
        },
        {
          title: '8. Security Measures',
          icon: '🛡️',
          content: `We protect your data using HTTPS, encrypted passwords, access control,
            ISO-certified servers, and regular penetration testing.`
        },
        {
          title: '9. Children',
          icon: '🚫',
          content: `Zeazn is not for users under 18. We delete any minor data if discovered.`
        },
        {
          title: '10. Cookies',
          icon: '🍪',
          content: `We use essential and optional cookies. EEA/UK users will see a consent banner.
            Learn more in our <a href="#" class="text-[#EB8D41] underline">Cookie Notice</a>.`
        },
        {
          title: '11. Changes to This Policy',
          icon: '🔄',
          content: `We update this policy regularly and notify you of major changes. Continued use implies agreement.`
        },
        {
          title: '12. Contact Us',
          icon: '📬',
          content: `Email: <a href="mailto:privacy@zeazn.com" class="text-[#EB8D41] underline">privacy@zeazn.com</a><br>
            You can report issues to your local data authority, but we prefer resolving them directly.`
        }
      ]
    }
  }
}
</script>
