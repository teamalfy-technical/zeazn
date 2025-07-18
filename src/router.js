import { createRouter, createWebHistory } from 'vue-router';
import MainPage from './components/MainPage.vue';

const routes = [
  { path: '/', name: 'Home', component: MainPage },
  {
    path: '/privacy-policy',
    name: 'PrivacyPolicy',
    component: () => import('./components/PrivacyPolicy.vue') // lazy-loaded
  },
  {
    path: '/terms',
    name: 'Terms',
    component: () => import('./components/TermsAndConditions.vue') // lazy-loaded
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
];

const router = createRouter({
  history: createWebHistory(), // Clean URLs here
  routes,
  scrollBehavior() {
    return { top: 0 };
  }
});

export default router;
