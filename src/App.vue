<template>
  <div class="main">
    
    <!-- <RouterView></RouterView> -->
    <Header />
    <div id="home">
      <Home />
    </div>
    <div id="about">
      <About />
      
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Navbar from './components/NavBar.vue';
import Header from './components/Header.vue'
import Home from './components/Home.vue';
import About from './components/About.vue';


export default defineComponent({
  name: 'App',
  components: {
    Navbar,
    Header,
    Home,
    About,
  }
})
</script>

<style lang="scss">  
</style>

