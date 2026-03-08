<template>
  <div class="flip-wrapper">
    <div class="flip-inner" :class="{ flipped: isActive }" :style="{ '--card-color': color }">
      <div class="flip-front">
        <div class="profile-card__icon">
          <v-icon size="48" color="white">{{ icon }}</v-icon>
        </div>
        <h3 class="profile-card__title">{{ title }}</h3>
      </div>

      <div class="flip-back" :class="{ active: isActive }">
        <div class="content">
          <div class="profile-card__icon small">
            <v-icon size="28" color="white">{{ icon }}</v-icon>
          </div>
          <h3 class="profile-card__title">{{ title }}</h3>
        </div>
        <p class="profile-card__desc">{{ desc }}</p>
        <div class="profile-card__arrow">
          <v-icon size="18">mdi-arrow-right</v-icon>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  title: string
  desc: string
  icon: string
  color: string
  isActive: boolean
}>()
</script>

<style scoped>
.flip-wrapper {
  perspective: 1000px;
  cursor: pointer;
  height: 220px;
}

.flip-inner {
  position: relative;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: transform 0.9s cubic-bezier(0, 0, 1, 1);
}

.flip-wrapper:hover .flip-inner,
.flip-inner.flipped {
  transform: rotateY(180deg);
}
/* Estilos comunes frente y dorso */
.flip-front,
.flip-back {
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 20px;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 28px;
  box-sizing: border-box;
}

.flip-back .content {
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
}

/* FRENTE */
.flip-front {
  background: #fff;
  border: 2px solid #e5e7eb;
}

/* DORSO */
.flip-back {
  background: var(--card-color);
  transform: rotateY(180deg);
  align-items: flex-start;
  justify-content: flex-start;
}

.flip-back .profile-card__title {
  color: #fff;
}

.flip-back .profile-card__desc {
  color: rgba(255, 255, 255, 0.85);
}

.flip-back .profile-card__arrow {
  color: #fff;
  position: absolute;
  bottom: 24px;
  right: 24px;
}

/* Elementos internos */
.profile-card__icon {
  width: 72px;
  height: 72px;
  border-radius: 20px;
  background: var(--card-color);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
}

.profile-card__icon.small {
  width: 48px;
  height: 48px;
  background: rgba(255, 255, 255, 0.25);
}

.profile-card__title {
  font-family: 'Outfit', sans-serif;
  font-size: 1.1rem;
  font-weight: 700;
  color: #1c1e26;
  margin-bottom: 8px;
  text-align: center;
}

.flip-back .profile-card__title {
  text-align: left;
}

.profile-card__desc {
  font-size: 0.875rem;
  color: #6b7280;
  line-height: 1.6;
}
</style>
