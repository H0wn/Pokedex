

<script setup lang="ts">
  import get from 'axios';
  import PokemonCard from '../../components/PokemonCard.vue';
  import { ref, watch, type HtmlHTMLAttributes } from 'vue';
  import type { PokemonModel } from '../../models/PokemonModel';
  

  const url  = ref<PokemonModel[]>();
  const filteredPoks = ref<PokemonModel[]>();
  const offset = ref(0);
  const img = ref<String>("")
  const ref1  = ref()

  url.value = await (await get(`https://pokeapi.co/api/v2/pokemon?limit=1025`)).data.results
  filteredPoks.value = url.value
  

  const handleChange = (e : Event) => { 
    const target = <HTMLInputElement>e.target;  
    filteredPoks.value = url.value?.filter(item=>item.name.indexOf(target.value)>-1);
  }
  const handleClick = (bool : boolean) => { 
    bool ? offset.value+= 40 : offset.value -= 40
  }
</script>

<template>
  <div class="container">
    <div class="input-container">
      <img  class="logo" src="../../assets/pokemonpng.png" alt="pokemon-title" for="text">
      <input name="text" type="text" @input="handleChange" placeholder="Search by name">
    </div>
    <div class="card-container">
      <PokemonCard class="card" ref="ref1" v-for="(pokemon, index) in filteredPoks" :key="index" :page="pokemon.url"/>
    </div>
  </div>
</template>
<style scoped lang="scss">
  .container{ 
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding : 40px;
  }
  .input-container{ 
    width:50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgb(26, 26, 91);
    margin : 30px;
    border: solid  50px  rgb(255, 71, 71);
    border-radius: 1%;
    box-shadow: 0px 10px 40px rgb(47, 47, 47);
  }
  .card-container{
    background-color: rgb(255, 71, 71);
    width:50%;
    height: 100%;
    flex-direction: column;
    overflow-y: scroll;
    display: flex;
    padding: 20px;
    border-radius: 1%;
    box-shadow: 0px 10px 40px rgb(47, 47, 47);

  }
  .card-container::-webkit-scrollbar{
    display: none;
  }

  .card{
    text-decoration:none;
    color: white;
    font-size: 16px;
    background-color: rgb(168, 25, 25);
    border : 3px solid white;
    /* 
    border-top: 2.5px solid white;
    border-bottom: 2.5px solid white;
    border-left : 5px solid  white;
    border-right: 5px solid white;
    */
    margin: 6px 0px;
    border-radius: 3px;
    
    &:hover{
      transform: translate(0px, -10px);
    }
    transition: transform linear 0.2s 0.05s;
  }
  .logo{
    height: 300px;
  }
</style>