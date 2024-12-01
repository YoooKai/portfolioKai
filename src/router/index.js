import { createRouter, createWebHistory } from 'vue-router'
import About from '../views/About.vue'
import NotFound from '../views/NotFound.vue'
import Contact from '../views/Contact.vue'
import Experience from '../views/Experience.vue'
import Skills from '../views/Skills.vue'
import Projects from '../views/Projects.vue'


const routes = [
  {
    path: '/',
    redirect: '/es/about'
  },
  {
    path: '/:lang/about',
    name: 'about',
    component: About,
    beforeEnter: validateLang,
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact,
    beforeEnter: validateLang,
  },
  {
    path: '/experience',
    name: 'experience',
    component: Experience,
    beforeEnter: validateLang,
  },
  {
    path: '/skills',
    name: 'skills',
    component: Skills,
    beforeEnter: validateLang,
  },
  {
    path: '/projects',
    name: 'projects',
    component: Projects,
    beforeEnter: validateLang,
  },


  //catchall 404
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound,
    beforeEnter: validateLang,
  } 
];

function validateLang(to, from, next) {
  const lang = to.params.lang;
  const supportedLanguages = ["en", "es"];
  if (!supportedLanguages.includes(lang)) {
  return next("/es/about"); 
  }
  next();
}

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
