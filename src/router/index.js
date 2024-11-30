import { createRouter, createWebHistory } from 'vue-router'
import About from '../views/About.vue'
import NotFound from '../views/NotFound.vue'
import Contact from '../views/Contact.vue'
import Experience from '../views/Experience.vue'
import Abilities from '../views/Abilities.vue'
import Projects from '../views/Projects.vue'


const routes = [
  {
    path: '/',
    name: 'about',
    component: About
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact
  },
  {
    path: '/experience',
    name: 'experience',
    component: Experience
  },
  {
    path: '/abilities',
    name: 'abilities',
    component: Abilities
  },
  {
    path: '/projects',
    name: 'projects',
    component: Projects
  },


  //catchall 404
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound
  } 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
