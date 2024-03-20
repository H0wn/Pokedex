import { createRouter, createWebHistory } from 'vue-router';
import PokedexPage from '@/pages/Pokedex/PokedexPage.vue';
import PokemonInfo from '@/pages/PokemonInfo/PokemonInfo.vue';

export const routes = [
  {
    path: '/',
    name: 'home',
    component: PokedexPage
  },
  {
    path:'/:id',
    name: 'info',
    component: PokemonInfo
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;