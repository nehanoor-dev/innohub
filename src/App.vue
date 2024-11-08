<template>
  <v-app>
    <v-main class="main">
      <RouterView/>
    </v-main>
  </v-app>
</template>

<script setup>
import LandingPage from './views/LandingPage.vue'
  //
</script>
<style lang="scss">
@import './styles/global.scss';

// .main {
//   background-color: $primary-color;
// }
</style>