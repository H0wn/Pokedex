import { createRouter, createWebHistory } from 'vue-router';
import PokedexPage from '@/pages/Pokedex/PokedexPage.vue';
import PokemonInfo from '@/pages/PokemonInfo/PokemonInfo.vue';
import Home from '@/pages/Home/Home.vue';

export const routes = [
 
  {
    path: '/',
    name: 'home',
    component: PokedexPage
  },
 
  {
    path: '/pokemons/',
    name: 'pokemons',
    component: PokedexPage
  },
  {
    path:'/pokemons/:id',
    name: 'pokemon/info',
    component: PokemonInfo
  },
  {
    // path: "*",
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: Home,
    meta: {
      requiresAuth: false
    }
  },

];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;