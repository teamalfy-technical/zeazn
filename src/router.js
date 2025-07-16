import { createRouter, createWebHashHistory } from 'vue-router';
import MainPage from './components/MainPage.vue'; // Import your components
import PrivacyPolicy from './components/PrivacyPolicy.vue'


const routes = [
  { path: '/', component: MainPage },
  {
    path: '/privacy-policy', component: PrivacyPolicy
  }
];

const router = createRouter({
  history: createWebHashHistory(), // Use hash mode if you want # in the URL
  routes,
});

export default router;
