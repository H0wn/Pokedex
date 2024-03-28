
<script setup lang="ts">
  import { ref, watchEffect } from "vue"
  import get from 'axios'
  import { RouterLink } from "vue-router";
  const props = defineProps({
    page : String
  })
  const img  = ref<string>();
  const name = ref<String>();
  const number = ref<Number>();
  watchEffect( async ()=>
  {
    const getPoks = await get(String(props.page))
    img.value = getPoks.data.sprites.front_default
    name.value = getPoks.data.name.replace("-"," ").replace(/\b\w/g,((a : String )=>a.toUpperCase()))
    number.value = getPoks.data.id; 
  })
</script>
<template>

  <RouterLink :to="{ path : `/pokemons/${number}`}">
    <div class="info-container">
      <div class="info">
        <img :src="img" :alt="name+'-sprite'">
        <p>N.°: {{number}}</p>   
      </div>
      <h3 >{{ name }}</h3>
    </div>
  </RouterLink>

</template>

<style scoped lang="scss">
  .info-container{
    padding: 10px 20px;
    display: flex;
    justify-content:space-between;
    align-items: center;
  }
  .info{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>