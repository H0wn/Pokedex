<script setup lang="ts">
import get from 'axios';
import { reactive, watchEffect } from 'vue';
import { useRoute } from 'vue-router';
import type { Pokemon } from '../../models/PokemonModel';


const pokemon = reactive<Pokemon>({} as Pokemon)
watchEffect(async ()=>{
      try{
        const route = useRoute();
        const id = route.params.id
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
      <div class="img-container">
        <h1 class="pokemon-name">{{ pokemon.name.replace("-"," ").replace(/\b\w/g,((a : String )=>a.toUpperCase()))}}</h1>
        <div class="pokemon-img-container">
          <img class="pokemon-img" :src="pokemon.sprites.other.showdown.front_default" alt="pokemon">  
          <img class="pokemon-img" :src="pokemon.sprites.other.showdown.front_shiny" alt="pokemon">  
        </div>
      </div>
      <div class="info-container">
        <h3>Type</h3>
        <div class="types">
          <div class="pokemon-type" :class="items.type.name" v-for="(items, index) in pokemon.types" :key="index">{{ items.type.name.charAt(0).toUpperCase() + items.type.name.slice(1) }}</div>
        </div>
        <h3>Base Stats</h3>
        <div class="stats">
          <div class="pokemon-stats"  v-for="(items, index) in pokemon.stats" :key="index">{{ items.stat.name.replace("-"," ").replace(/\b\w/g,((a : String )=>a.toUpperCase())) + ": " + items.base_stat}}</div>
        </div>
        <h3>Abilities</h3>
        <div class="abilities">
          <div class="pokemon-abilities"  v-for="(items, index) in pokemon.abilities" :key="index">{{ items.ability.name.replace("-"," ").replace(/\b\w/g,((a : String )=>a.toUpperCase()))}}</div>
        </div>
        <h3>Cries</h3>
        <div class="cries">
          <div class="icon-container">
            <img  class="audio-icon" :src="pokemon.sprites.front_default" alt="pokemon">
            <audio class="pokemon-cries" :src="pokemon.cries.legacy" controls></audio>
            <img  class="audio-icon" :src="pokemon.sprites.other.home.front_default" alt="pokemon">
            <audio class="pokemon-cries" :src="pokemon.cries.latest" controls></audio>
          </div>
        </div>
      </div>
  </div>
</template>

<style scoped lang="scss">
  
  .container{ 
    padding: 0 ; 
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: row;

    
    .img-container{
      border: solid rgb(0, 0, 0) 3px;
      border-radius: 4px;
      background-color: rgb(255, 255, 255);
      height: 70%;
      width: 45%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .pokemon-name{  
        color: white;
        margin-bottom: 10%;
        border: solid  5px rgb(210, 210, 210);
        border-radius: 5px;
        padding: 10px;
        background-color:rgb(126, 17, 17);
      }
      .pokemon-img{
        margin: 20px;
        width: 100%;
        height: auto;
      }
      .pokemon-img-container{
        padding: 1px;
        background-color:rgb(126, 17, 17);
        border: solid 10px rgb(210, 210, 210);
        border-radius: 5px;
        height:auto;
        width: 90%;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
    .info-container{
      padding: 20px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      background-color: white;
      height: 60%;
      width:50%;
      border-radius: 5px;
      border: solid black 3px;
      h3{
        font-weight: 500;
      }
      .types{
        width: 100%;
        display: flex;
        justify-content: center;
       .pokemon-type{
        margin: 0px 10px;
       }
      }

      .stats{
        width: 100%;
        display: flex;
        justify-content: space-evenly;
        .pokemon-stats{
          background-color: rgb(251, 251, 226);
          padding: 4px;
          border: solid 1px black;
          border-radius: 3px;
        }
      }
      .abilities{
        width: 100%;
        display: flex;
        justify-content: center;
        .pokemon-abilities{
          margin: 0px 10px;
          color: white;
          background-color: rgb(70, 49, 255);
          padding: 4px;
          border: solid 1px black;
          border-radius: 3px;
        }
      }
      .cries{
        width: 100%;
        display: flex;
        justify-content: space-evenly;
        .pokemon-cries{
          width: 35%;
          &::-webkit-media-controls-panel{
          background-color: rgb(155, 151, 255);
        }
        }
       
      }
    }  
  }
  .normal{
    width: 120px;
    height: 20px;
    background-color : grey;
    display: flex;
    border: solid  1px black;
    border-radius: 3px;
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
    background-color: rgb(95, 64, 43);
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
  


.icon-container {
  width: 100%;
  height: 90%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

.audio-icon {
   width: 10%;
   height: auto;
}
</style>