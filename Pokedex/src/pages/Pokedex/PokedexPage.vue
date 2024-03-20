

<script setup lang="ts">
  import get from 'axios';
  import PokemonCard from '../../components/PokemonCard.vue';
  import { ref, watch } from 'vue';
  import type { PokemonModel } from '../../models/PokemonModel';
import { fileURLToPath } from 'url';

  const url  = ref<PokemonModel[]>();
  const filteredPoks = ref<PokemonModel[]>();
  const limit = ref(40);
  const name = ref<String>("");
  const offset = ref(0);
  const img = ref<String>("")
  const ref1  = ref()
  
  watch( 
      name,
      async ()=>{ 
        url.value = await (await get(`https://pokeapi.co/api/v2/pokemon?limit=1025`)).data.results
        filteredPoks.value = url.value  

      },{immediate : true}
    )
  const handleChange = (e : Event) => { 
    const target = <HTMLInputElement>e.target;  
    filteredPoks.value = url.value.filter(item=>item.name.indexOf(target.value)>-1);
  }
  const handleClick = (bool : boolean) => { 
    bool ? offset.value+= 40 : offset.value -= 40
  }
  const handleFocus = (s : String) => { 
    img.value = ref1.value;
  }
</script>

<template>
  <div class="container">
    <div class="input-container">
      <input type="text" @input="handleChange">
    </div>
    <div class="card-container">
      <PokemonCard v-for="(pokemon, index) in filteredPoks" :key="index" :page="pokemon.url"/>
    </div>
  </div>
</template>
<style scoped lang="scss">
  .container{ 
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding : 20px;
  }
  .input-container{ 
    width:50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .card-container{
    width:50%;
    height: 100%;
    flex-direction: column;
    overflow-y: scroll;
    display: flex;
  }
</style>