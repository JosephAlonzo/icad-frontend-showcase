<template>
  <AppNavbar v-if="!isDashboard" @open-login="openLogin" />
  <RouterView @open-login="openLogin" />
  <AppFooter v-if="!isDashboard" />
  <LoginComponent :dialog="loginDialog" :profile="profile" @update:dialog="loginDialog = $event" />
</template>

<script setup lang="ts">
import { RouterView, useRoute } from 'vue-router'
import AppNavbar from './components/AppNavbar.vue'
import AppFooter from './components/AppFooter.vue'
import LoginComponent from './components/LoginComponent.vue'

import { ref, computed } from 'vue'

const loginDialog = ref(false)
const profile = ref('')

const route = useRoute()
const isDashboard = computed(() => route.meta.hiddenLayout)

const openLogin = (value: string) => {
  loginDialog.value = true
  profile.value = value
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: var(--color-surface);
  color: var(--color-text-dark);
}

a {
  text-decoration: none;
  color: inherit;
}
</style>
