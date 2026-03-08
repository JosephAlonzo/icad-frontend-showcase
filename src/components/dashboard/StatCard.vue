<template>
  <div :key="label" class="stat-card">
    <div class="stat-card__icon">
      <v-icon size="18" color="var(--color-primary)">{{ icon }}</v-icon>
    </div>
    <div class="stat-card__value">{{ value }}</div>
    <div class="stat-card__label">{{ label }}</div>
    <div class="stat-card__trend" :class="trendUp ? 'trend-up' : 'trend-down'">
      <v-icon size="13">{{ trendUp ? 'mdi-trending-up' : 'mdi-alert' }}</v-icon>
      {{ trend }}
    </div>
  </div>
</template>
<script setup lang="ts">
defineProps<{
  label: string
  value: string
  icon: string
  trend: string
  trendUp: boolean
}>()
</script>
<style scoped>
.stat-card {
  background: var(--color-surface);
  border-radius: var(--radius-md);
  padding: 22px var(--space-lg);
  border: 1px solid #ebebeb;
  box-shadow: var(--shadow-sm);
  transition: all 0.25s;
  position: relative;
  overflow: hidden;
}

.stat-card:hover {
  box-shadow: 0 6px 24px rgba(204, 22, 74, 0.1);
  transform: translateY(-2px);
}

.stat-card::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: var(--color-primary);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.3s ease;
}

.stat-card:hover::after {
  transform: scaleX(1);
}

.stat-card__icon {
  width: 40px;
  height: 40px;
  border-radius: var(--radius-sm);
  background: #fce8ee;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: var(--space-md);
}

.stat-card__value {
  font-size: 1.9rem;
  font-weight: 800;
  color: var(--color-text-dark);
  line-height: 1;
  margin-bottom: 4px;
  letter-spacing: -0.03em;
}
.stat-card__label {
  font-size: 0.78rem;
  color: var(--color-text-dark-muted);
  font-weight: 500;
}

.stat-card__trend {
  position: absolute;
  top: 20px;
  right: 18px;
  font-size: 0.72rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 2px;
}

.trend-up {
  color: #16a34a;
}
.trend-down {
  color: var(--color-primary);
}
</style>
