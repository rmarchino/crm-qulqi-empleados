<script setup>
import SidebarComponent from './components/SidebarComponent.vue';

</script>

<template>
  <div class="relative flex min-h-screen">
    <SidebarComponent />
    <router-view />
  </div>
</template>
