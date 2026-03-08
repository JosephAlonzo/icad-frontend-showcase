<template>
  <v-carousel>
    <v-carousel-item v-for="(img, index) in images" :key="index" :src="img" cover></v-carousel-item>
  </v-carousel>
</template>

<script setup lang="ts">
const images = [
  new URL('@/assets/carrousel/img1.jpeg', import.meta.url).href,
  new URL('@/assets/carrousel/img2.jpeg', import.meta.url).href,
  new URL('@/assets/carrousel/img3.png', import.meta.url).href,
  new URL('@/assets/carrousel/img4.png', import.meta.url).href,
]
</script>

<style scoped>
:deep(.v-btn:not(.v-carousel__controls__item)) {
  background-color: var(--color-primary) !important;
  color: #fff !important;
}
</style>
