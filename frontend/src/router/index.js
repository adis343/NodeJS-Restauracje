import { createRouter, createWebHistory } from 'vue-router'
import start from "../views/start.vue";
import authLogin from "../views/authLogin.vue";
import authRegister from "../views/authRegister.vue";
import addRecipe from "../views/addRecipe.vue";
import recipe from "../views/recipe.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: start
    },
    {
      path: '/auth/Login',
      name: 'authLogin',
      component: authLogin
    },
    {
      path: '/auth/register',
      name: 'authRegister',
      component: authRegister
    },
    {
      path: '/addRecipe',
      name: 'addRecipe',
      component: addRecipe
    },
    {
      path: '/recipe/:id',
      name: 'recipe',
      component: recipe
    }
  ]
})

export default router
