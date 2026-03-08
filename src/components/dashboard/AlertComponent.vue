<template>
  <div class="alert-card">
    <v-icon size="22" color="var(--color-primary)">{{ icon }}</v-icon>
    <div class="alert-card__text">
      <div class="alert-card__title">{{ title }}</div>
      <div class="alert-card__desc">{{ description }}</div>
    </div>
    <button class="btn btn-primary">Voir les détails</button>
  </div>
</template>
<script setup lang="ts">
defineProps<{
  title: string
  description: string
  icon: string
}>()
</script>
<style scoped>
.alert-card {
  background: linear-gradient(135deg, #fff1f4 0%, #fce8ee 100%);
  border: 1px solid var(--color-primary-light);
  border-radius: var(--radius-md);
  padding: 16px var(--space-lg);
  display: flex;
  align-items: center;
  gap: var(--space-md);
  margin-bottom: var(--space-lg);
}

.alert-card__text {
  flex: 1;
}
.alert-card__title {
  font-size: 0.875rem;
  font-weight: 700;
  color: var(--color-primary-dark);
  margin-bottom: 2px;
}
.alert-card__desc {
  font-size: 0.78rem;
  color: var(--color-text-dark-muted);
}
</style>
