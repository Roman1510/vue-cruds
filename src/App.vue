<template>
  <div id="nav"></div>
  <Navbar />
  <div class="container mt-4">
    <router-view />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';

export default {
  components: {
    Navbar,
  },
};
</script>

<style lang="scss"></style>
