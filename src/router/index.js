import { createRouter, createWebHistory } from 'vue-router';
import LandingPage from '@/views/LandingPage.vue';
import Insight from '@/views/Insight.vue';

const routes = [
  { path: '/', name: 'LandingPage', component: LandingPage },
  { path: '/insight/:id', name: 'Insight', component: Insight, props: true,},
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { top: 0 };
  }, 
});

export default router;
