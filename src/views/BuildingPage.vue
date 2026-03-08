<template>
  <div class="building-page">
    <div class="building-page__content">
      <!-- Animated Icon -->
      <div class="icon-wrap">
        <div class="icon-ring icon-ring--1" />
        <div class="icon-ring icon-ring--2" />
        <div class="icon-ring icon-ring--3" />
        <div class="icon-core">
          <v-icon size="40" color="white">mdi-wrench-cog</v-icon>
        </div>
      </div>

      <!-- Text -->
      <h1 class="building-page__title">Page "{{ route?.name }}" en construction</h1>
      <p class="building-page__sub">
        Nous travaillons sur cette section.<br />
        Revenez bientôt !
      </p>

      <!-- Back button -->
      <v-btn
        rounded="pill"
        color="#D81B3F"
        elevation="0"
        class="back-btn"
        prepend-icon="mdi-arrow-left"
        @click="$router.push('/')"
      >
        Retour à l'accueil
      </v-btn>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vuetify/lib/composables/router.mjs'

const route = useRoute()

onMounted(() => {})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;700;800&display=swap');

.building-page {
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f8f9fc;
  font-family: 'Outfit', sans-serif;
}

.building-page__content {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 40px 24px;
  max-width: 420px;
}

/* ── Animated Icon ── */
.icon-wrap {
  position: relative;
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 36px;
}

.icon-core {
  width: 68px;
  height: 68px;
  background: #d81b3f;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 8px 28px rgba(216, 27, 63, 0.35);
  z-index: 2;
  animation: iconPulse 2.5s ease-in-out infinite;
}

.icon-ring {
  position: absolute;
  border-radius: 50%;
  border: 2px solid rgba(216, 27, 63, 0.2);
  animation: ringExpand 2.5s ease-out infinite;
}
.icon-ring--1 {
  width: 80px;
  height: 80px;
  animation-delay: 0s;
}
.icon-ring--2 {
  width: 96px;
  height: 96px;
  animation-delay: 0.6s;
}
.icon-ring--3 {
  width: 112px;
  height: 112px;
  animation-delay: 1.2s;
}

@keyframes ringExpand {
  0% {
    transform: scale(0.7);
    opacity: 0.6;
  }
  100% {
    transform: scale(1.3);
    opacity: 0;
  }
}
@keyframes iconPulse {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.06);
  }
}

/* ── Text ── */
.building-page__title {
  font-size: 1.8rem;
  font-weight: 800;
  color: #1c1e26;
  letter-spacing: -0.02em;
  margin-bottom: 12px;
}

.building-page__sub {
  font-size: 0.95rem;
  color: #6b7280;
  line-height: 1.7;
  margin-bottom: 32px;
}

.back-btn {
  padding: 15px;
}
</style>
