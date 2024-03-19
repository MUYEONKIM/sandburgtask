import { createRouter, createWebHistory } from 'vue-router'

import mainPage from './pages/mainPage.vue';
import aboutPage from './pages/aboutPage.vue';
import recruitPage from './pages/recruitPage.vue';
import solutionPage from './pages/solutionPage.vue';

const routes = [
  { path: '/', component: mainPage },
  { path: '/about', component: aboutPage },
  { path: '/recruit', component: recruitPage },
  { path: '/solution', component: solutionPage },
]

const router = createRouter({
  history: createWebHistory(),
  routes
});

export { router }