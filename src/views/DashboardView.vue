<template>
  <!-- Alert -->
  <alert-component
    icon="mdi-alert-circle-outline"
    title="Rappel vaccin — Luna"
    description="Le rappel annuel de Luna arrive à échéance dans 15 jours."
  ></alert-component>

  <!-- Welcome Banner -->
  <div class="welcome-banner">
    <div class="welcome-banner__text">
      <div class="welcome-banner__eyebrow">Bonjour, Marie 👋</div>
      <div class="welcome-banner__title">Bienvenue dans votre espace</div>
      <div class="welcome-banner__sub">
        {{ animals.length }} animaux enregistrés · Tout est à jour
      </div>
    </div>
    <div class="welcome-banner__actions">
      <button class="btn btn-white"><v-icon size="16">mdi-paw</v-icon> Mes animaux</button>
      <button class="btn btn-ghost-white">
        <v-icon size="16">mdi-plus</v-icon> Ajouter un animal
      </button>
    </div>
  </div>

  <!-- Stats -->
  <div class="stats-grid">
    <div v-for="stat in stats" :key="stat.label">
      <stat-card
        :label="stat.label"
        :value="stat.value"
        :icon="stat.icon"
        :trend="stat.trend"
        :trendUp="stat.trendUp"
      ></stat-card>
    </div>
  </div>

  <!-- Two columns -->
  <div class="two-col">
    <!-- Animals -->
    <div class="card">
      <div class="card__header">
        <div>
          <div class="card__title">Mes animaux</div>
          <div class="card__subtitle">3 animaux enregistrés dans le fichier I-CAD</div>
        </div>
        <a href="#" class="see-all">Voir tous <v-icon size="14">mdi-arrow-right</v-icon></a>
      </div>
      <div class="card__body">
        <div v-for="animal in animals" :key="animal.name">
          <animal-card
            :name="animal.name"
            :emoji="animal.emoji"
            :meta="animal.meta"
            :id="animal.id"
            :status="animal.status"
            :chipClass="animal.chipClass"
            :chipIcon="animal.chipIcon"
          ></animal-card>
        </div>
      </div>
    </div>

    <!-- Right column -->
    <div class="right-col">
      <!-- Quick actions -->
      <div class="card">
        <div class="card__header">
          <div class="card__title">Actions rapides</div>
        </div>
        <div class="card__body">
          <div class="quick-actions">
            <div v-for="action in quickActions" :key="action.label" class="quick-action-btn">
              <v-icon size="22" color="var(--color-primary)">{{ action.icon }}</v-icon>
              <span v-html="action.label"></span>
            </div>
          </div>
        </div>
      </div>

      <!-- Activity -->
      <div class="card">
        <div class="card__header">
          <div class="card__title">Activité récente</div>
        </div>
        <div class="card__body">
          <div v-for="item in activity" :key="item.time" class="activity-item">
            <div class="activity-dot">
              <v-icon size="15" color="var(--color-primary)">{{ item.icon }}</v-icon>
            </div>
            <div>
              <div class="activity-text" v-html="item.text"></div>
              <div class="activity-time">{{ item.time }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import AnimalCard from '@/components/dashboard/AnimalCard.vue'
import StatCard from '@/components/dashboard/StatCard.vue'
import AlertComponent from '@/components/dashboard/AlertComponent.vue'
import { stats, animals, quickActions, activity } from '@/data/dumpData.ts'
</script>

<style scoped>
/* ══ WELCOME ══ */
.welcome-banner {
  background: linear-gradient(
    135deg,
    var(--color-primary) 0%,
    var(--color-primary-dark) 50%,
    #7a0a2a 100%
  );
  border-radius: var(--radius-lg);
  padding: 30px 36px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: var(--space-lg);
  position: relative;
  overflow: hidden;
}

.welcome-banner::before {
  content: '';
  position: absolute;
  right: -60px;
  top: -80px;
  width: 300px;
  height: 300px;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.08) 0%, transparent 65%);
  pointer-events: none;
}

.welcome-banner__text {
  position: relative;
  z-index: 1;
}

.welcome-banner__eyebrow {
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 6px;
}

.welcome-banner__title {
  font-size: 1.5rem;
  font-weight: 800;
  color: #fff;
  margin-bottom: 6px;
  letter-spacing: -0.02em;
}

.welcome-banner__sub {
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.7);
}
.welcome-banner__actions {
  display: flex;
  gap: var(--space-sm);
  position: relative;
  z-index: 1;
}

/* ══ STATS ══ */
.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-md);
  margin-bottom: var(--space-lg);
}

/* ══ TWO COL ══ */
.two-col {
  display: grid;
  grid-template-columns: 1fr 360px;
  gap: var(--space-lg);
}
.right-col {
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
}

/* ══ CARD ══ */
.card {
  background: var(--color-surface);
  border-radius: var(--radius-md);
  border: 1px solid #ebebeb;
  box-shadow: var(--shadow-sm);
  overflow: hidden;
}

.card__header {
  padding: var(--space-lg) var(--space-lg) 0;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}

.card__title {
  font-size: 0.95rem;
  font-weight: 700;
  color: var(--color-text-dark);
}
.card__subtitle {
  font-size: 0.75rem;
  color: var(--color-text-dark-muted);
  margin-top: 2px;
}
.card__body {
  padding: var(--space-lg);
}

.see-all {
  font-size: 0.78rem;
  font-weight: 600;
  color: var(--color-primary);
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 4px;
}
.see-all:hover {
  text-decoration: underline;
}

/* ══ QUICK ACTIONS ══ */
.quick-actions {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-sm);
}

.quick-action-btn {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--space-xs);
  padding: 18px var(--space-sm);
  border-radius: var(--radius-md);
  border: 1px solid #ebebeb;
  background: var(--color-surface-2);
  cursor: pointer;
  transition: all 0.2s;
  text-align: center;
}

.quick-action-btn:hover {
  background: #fce8ee;
  border-color: var(--color-primary-light);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(204, 22, 74, 0.1);
}
.quick-action-btn span {
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--color-text-dark);
  line-height: 1.3;
}

/* ══ ACTIVITY ══ */
.activity-item {
  display: flex;
  gap: var(--space-md);
  padding: 12px 0;
  border-bottom: 1px solid #f0f0f0;
}
.activity-item:last-child {
  border-bottom: none;
}

.activity-dot {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: #fce8ee;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  margin-top: 2px;
}

.activity-text {
  font-size: 0.82rem;
  color: var(--color-text-dark);
  line-height: 1.5;
}
.activity-time {
  font-size: 0.7rem;
  color: var(--color-text-dark-muted);
  margin-top: 2px;
}
</style>
