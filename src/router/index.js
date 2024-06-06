import { createRouter, createWebHashHistory } from 'vue-router';

import HomeView from '@/views/HomeView.vue';
import SearchBooksView from "@/views/books/SearchBooksView.vue";
import SearchServicesView from "@/views/services/SearchServicesView.vue";
import ContactView from "@/views/ContactView.vue";
import LoginView from "@/views/auth/LoginView.vue";
import SignupView from "@/views/auth/SignupView.vue";

const BASE_TITLE = "Biblioteca Online |";

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      title: `${BASE_TITLE} Inicio`,
    },
  },
  {
    path: '/books',
    name: 'books',
    component: SearchBooksView,
    meta: {
      title: `${BASE_TITLE} Libros`,
    },
  },
  {
    path: '/services',
    name: 'services',
    component: SearchServicesView,
    meta: {
      title: `${BASE_TITLE} Servicios`,
    },
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView,
    meta: {
      title: `${BASE_TITLE} Contacto`,
    },
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView,
    meta: {
      title: `${BASE_TITLE} Ingresar`,
    },
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignupView,
    meta: {
      title: `${BASE_TITLE} Registrarse`,
    },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;