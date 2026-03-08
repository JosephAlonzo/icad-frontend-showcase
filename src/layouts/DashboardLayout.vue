<template>
  <div class="dashboard-layout">
    <!-- ══ SIDEBAR ══ -->
    <SidebarComponent />

    <!-- ══ MAIN ══ -->
    <div class="dashboard-main">
      <!-- Topbar -->
      <TopBarComponent />
      <!-- Content -->
      <main class="dashboard-content">
        <RouterView />
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import TopBarComponent from '@/components/dashboard/TopBarComponent.vue'
import SidebarComponent from '@/components/dashboard/sidebarComponent.vue'
</script>

<style scoped>
.dashboard-layout {
  display: flex;
  min-height: 100vh;
  background: var(--color-surface-2);
}

/* ══ MAIN ══ */
.dashboard-main {
  margin-left: 260px;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.dashboard-content {
  padding: var(--space-xl);
  flex: 1;
}

/* ══ ALERT ══ */
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

/* ══ BTNS ══ */
.btn {
  display: inline-flex;
  align-items: center;
  gap: var(--space-sm);
  padding: 10px 20px;
  border-radius: var(--radius-md);
  font-size: 0.875rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  border: none;
  text-decoration: none;
}

.btn-white {
  background: #fff;
  color: var(--color-primary);
}
.btn-white:hover {
  filter: brightness(0.95);
  transform: translateY(-1px);
  box-shadow: var(--shadow-md);
}

.btn-ghost-white {
  background: rgba(255, 255, 255, 0.12);
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.25);
}
.btn-ghost-white:hover {
  background: rgba(255, 255, 255, 0.2);
}

.btn-primary {
  background: var(--color-primary);
  color: #fff;
  flex-shrink: 0;
}
.btn-primary:hover {
  background: var(--color-primary-dark);
  transform: translateY(-1px);
  box-shadow: var(--shadow-red);
}

/* ══ STATS ══ */
.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-md);
  margin-bottom: var(--space-lg);
}

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

/* ══ ANIMALS ══ */
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
