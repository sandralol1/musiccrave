// src/router/router.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Visual from '../views/Visual.vue'; 
import Visio from '../views/Visio.vue';
import Auditiva from '../views/Auditiva.vue';
import Motriu from '../views/Motriu.vue';
import Cognitiva from '../views/Cognitiva.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/visual',
    name: 'Visual',
    component: Visual
  },
  {
    path: '/visio',
    name: 'Visio',
    component: Visio
  },
  {
    path: '/auditiva',
    name: 'Auditiva',
    component: Auditiva
  },
  {
    path: '/motriu',
    name: 'Motriu',
    component: Motriu
  },
  {
    path: '/cognitiva',
    name: 'Cognitiva',
    component: Cognitiva
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;