import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RecipeView from '../views/RecipeView.vue'
import ManageRecipeView from '../views/ManageRecipeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    props: true 
  },
  {
    path: '/recipes',
    name: 'recipe',
    component: RecipeView
  },
  {
    path: '/manageRecipes',
    name: 'manageRecipes',
    component: ManageRecipeView
  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
