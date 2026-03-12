<template>
  <div :key="name" class="animal-item">
    <div class="animal-avatar">🐈</div>
    <div class="animal-info">
      <div class="animal-name">{{ name }}</div>
      <div class="animal-meta">{{ meta }}</div>
    </div>
    <span class="animal-id">{{ id }}</span>
    <span class="chip chip-green">
      <v-icon size="11">mdi-check-circle</v-icon>
      {{ status }}
    </span>
  </div>
</template>
<script setup lang="ts">
defineProps<{
  name: string
  // emoji: string
  meta: string
  id: string
  status: string
  // chipClass: string
  // chipIcon: string
}>()
</script>
<style scoped>
.animal-item {
  display: flex;
  align-items: center;
  gap: var(--space-md);
  padding: 14px 0;
  border-bottom: 1px solid #f0f0f0;
}
.animal-item:last-child {
  border-bottom: none;
}

.animal-avatar {
  width: 44px;
  height: 44px;
  border-radius: var(--radius-md);
  background: #fce8ee;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
  flex-shrink: 0;
}

.animal-info {
  flex: 1;
  min-width: 0;
}
.animal-name {
  font-size: 0.9rem;
  font-weight: 700;
  color: var(--color-text-dark);
}
.animal-meta {
  font-size: 0.75rem;
  color: var(--color-text-dark-muted);
  margin-top: 2px;
}

.animal-id {
  font-size: 0.7rem;
  font-weight: 600;
  color: var(--color-text-dark-muted);
  background: var(--color-surface-2);
  padding: 3px 8px;
  border-radius: var(--radius-pill);
  font-family: monospace !important;
  white-space: nowrap;
}

.chip {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 3px 10px;
  border-radius: var(--radius-pill);
  font-size: 0.7rem;
  font-weight: 600;
}
.chip-green {
  background: #dcfce7;
  color: #16a34a;
}
.chip-orange {
  background: #fff3e0;
  color: #e65100;
}
</style>
