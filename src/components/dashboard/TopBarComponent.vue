<template>
  <header class="topbar">
    <div class="topbar__breadcrumb">
      <span>Espace Détenteur</span>
      <span class="sep">›</span>
      <strong>{{ currentPageName }}</strong>
      <template v-if="route.params?.length != undefined">
        <span class="sep">›</span>
        <strong>{{ route.params.id }}</strong>
      </template>
    </div>
    <div class="topbar__right">
      <div class="topbar__icon-btn">
        <v-icon size="18">mdi-magnify</v-icon>
      </div>
      <div class="topbar__icon-btn">
        <v-icon size="18">mdi-bell-outline</v-icon>
        <span class="notif-dot"></span>
      </div>
      <div class="topbar__divider"></div>
      <div class="topbar__user-chip">
        <div class="topbar__chip-avatar">
          {{ detenteur.prenom.charAt(0) + detenteur.nom.charAt(0) }}
        </div>
        <span class="topbar__chip-name">{{ detenteur.prenom }} {{ detenteur.nom }}</span>
      </div>
    </div>
  </header>
</template>
<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { detenteur } from '@/data/dumpData'

const route = useRoute()

const routeNames: Record<string, string> = {
  dashboard: 'Tableau de bord',
  'dashboard-animals': 'Mes animaux',
  'dashboard-documents': 'Documents',
  'dashboard-notifications': 'Notifications',
  'dashboard-lost-found': 'Signaler perdu / trouvé',
  'dashboard-transfer': 'Cession de propriété',
  'dashboard-id-card': "Carte d'identification",
  'dashboard-update-info': 'Mettre à jour infos',
  'dashboard-profile': 'Mon profil',
  'dashboard-faq': 'Aide & FAQ',
}

const currentPageName = computed(() => {
  return routeNames[route.name as string] ?? 'Tableau de bord'
})
</script>
<style scoped>
.topbar {
  background: var(--color-surface);
  border-bottom: 1px solid #ebebeb;
  padding: 0 var(--space-xl);
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 50;
}

.topbar__breadcrumb {
  display: flex;
  align-items: center;
  gap: var(--space-xs);
  font-size: 0.875rem;
  color: var(--color-text-dark-muted);
}

.topbar__breadcrumb strong {
  color: var(--color-text-dark);
  font-weight: 600;
}
.topbar__breadcrumb .sep {
  color: #ddd;
}
.topbar__right {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
}

.topbar__icon-btn {
  width: 36px;
  height: 36px;
  border-radius: var(--radius-sm);
  border: 1px solid #e5e7eb;
  background: var(--color-surface-2);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: var(--color-text-dark-muted);
  transition: all 0.2s;
  position: relative;
}

.topbar__icon-btn:hover {
  background: #fce8ee;
  color: var(--color-primary);
  border-color: var(--color-primary-light);
}

.notif-dot {
  position: absolute;
  top: 5px;
  right: 5px;
  width: 7px;
  height: 7px;
  background: var(--color-primary);
  border-radius: 50%;
  border: 1.5px solid var(--color-surface);
}

.topbar__divider {
  width: 1px;
  height: 24px;
  background: #e5e7eb;
  margin: 0 4px;
}

.topbar__user-chip {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  padding: 5px 12px 5px 6px;
  border-radius: var(--radius-pill);
  border: 1px solid #e5e7eb;
  cursor: pointer;
  transition: all 0.2s;
}

.topbar__user-chip:hover {
  background: #fce8ee;
  border-color: var(--color-primary-light);
}

.topbar__chip-avatar {
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--color-primary), var(--color-accent));
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.68rem;
  font-weight: 700;
  color: #fff;
}

.topbar__chip-name {
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--color-text-dark);
}
</style>
