<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
</script>

<template>
  <div id="app">

    <Navbar />
    <RouterView />
    <Footer />

  </div>
</template>

<style scoped></style>
