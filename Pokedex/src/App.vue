<script setup lang="ts">
  import { RouterView } from 'vue-router';

</script>

<template>
  <Suspense>
    <div class="container">
      <RouterView/>
    </div>
  </Suspense>
</template>

<style scoped lang="scss">
  .container{
    width : 100%;
    height : 100vh; 
  }
</style>
