<script setup lang="ts">
import get from 'axios';
import { reactive, watchEffect } from 'vue';
import { useRoute } from 'vue-router';
import type { Pokemon } from '../../models/PokemonModel';

const route = useRoute();
const id = route.params.id
const pokemon = reactive<Pokemon>({} as Pokemon)
watchEffect(async ()=>{
      try{
        const res : Pokemon = (await get(`https://pokeapi.co/api/v2/pokemon/${id}`)).data
        Object.assign(pokemon,res)
        console.log(pokemon.name)
      }catch(e){
        console.log(e)
      }
        
    }
)


</script>
<template>
  
  <div class="container">
      <h1 class="pokemon-name">{{pokemon.name}}</h1>
      <img class="pokemon-img" :src="pokemon.sprites?.front_default" alt="pokemon">
      <div>
        <div class="pokemon-type" :class="items.type.name" v-for="(items, index) in pokemon.types" :key="index">{{ items.type.name }}</div>
      </div>
  </div>
</template>

<style scoped lang="scss">

  .container{ 
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center; 
    align-items: center;
    flex-direction: row;
    
  }
  .normal{
    width: 120px;
    height: 20px;
    background-color : grey;
    display: flex;
    justify-content: center;
    align-items: center;
    color : white;
  }
  .grass{ 
      background-color: green;
      @extend .normal;
    }
  .fire{ 
    background-color: red;
    @extend .normal;
  }

  .fight{ 
    background-color: orange;
    @extend .normal;
  }
  .ghost{ 
    background-color: purple;
    @extend .normal;
  }
  .water{ 
    background-color: blue;
    @extend .normal;
  }
  .electric{ 
    background-color: yellow;
    @extend .normal;
  }
  .rock{ 
    background-color: rgb(157, 129, 100);
    @extend .normal;
  }
  .ground{ 
    background-color: brown;
    @extend .normal;
  }

  .fairy{ 
    background-color: magenta;
    @extend .normal;
  }

  .psychic{ 
    background-color: pink;
    @extend .normal;
  }

  .flying{ 
    background-color: skyblue;
    @extend .normal;
  }

  .steel{ 
    background-color: rgb(179, 179, 179);
    @extend .normal;
  }
  .dark{ 
    background-color: black;
    @extend .normal;
  }
  .dragon{
    background-color: cyan;
    @extend .normal;
  }
  .poison{
    background-color: rgb(95, 0, 95);
    @extend .normal;
  }
  .bug{
    background-color: rgb(177, 197, 118);
    @extend .normal;
  }
  .ice{
    background-color: rgb(207, 229, 238);
    @extend .normal;
  }
</style>