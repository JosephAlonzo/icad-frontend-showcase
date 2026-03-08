<template>
  <aside class="sidebar">
    <div class="sidebar__logo">
      <img src="@/assets/logo_icad_inverted.png" alt="I-CAD" height="36" />
      <div class="sidebar__logo-sub">Identification Carnivores</div>
    </div>

    <div class="sidebar__user">
      <div class="sidebar__avatar">{{ detenteur.prenom.charAt(0) + detenteur.nom.charAt(0) }}</div>
      <div>
        <div class="sidebar__user-name">{{ detenteur.prenom }} {{ detenteur.nom }}</div>
        <div class="sidebar__user-role">Détenteur · Particulier</div>
      </div>
    </div>

    <nav class="sidebar__nav">
      <div class="sidebar__section-label">Principal</div>
      <router-link to="/dashboard" class="sidebar__item" exact-active-class="active">
        <v-icon size="18">mdi-view-dashboard-outline</v-icon> Tableau de bord
      </router-link>
      <router-link to="/dashboard/my-animals" class="sidebar__item" active-class="active">
        <v-icon size="18">mdi-paw</v-icon> Mes animaux
        <span class="sidebar__badge">3</span>
      </router-link>
      <router-link to="/dashboard/documents" class="sidebar__item" active-class="active">
        <v-icon size="18">mdi-file-document-outline</v-icon> Documents
      </router-link>
      <router-link to="/dashboard/notifications" class="sidebar__item" active-class="active">
        <v-icon size="18">mdi-bell-outline</v-icon> Notifications
        <span class="sidebar__badge">2</span>
      </router-link>

      <div class="sidebar__section-label">Démarches</div>
      <router-link to="/dashboard/lost-found" class="sidebar__item" active-class="active">
        <v-icon size="18">mdi-map-marker-alert-outline</v-icon> Signaler perdu / trouvé
      </router-link>
      <router-link to="/dashboard/transfer" class="sidebar__item" active-class="active">
        <v-icon size="18">mdi-account-arrow-right-outline</v-icon> Cession de propriété
      </router-link>
      <router-link to="/dashboard/id-card" class="sidebar__item" active-class="active">
        <v-icon size="18">mdi-card-account-details-outline</v-icon> Carte d'identification
      </router-link>
      <router-link to="/dashboard/update-info" class="sidebar__item" active-class="active">
        <v-icon size="18">mdi-update</v-icon> Mettre à jour infos
      </router-link>

      <div class="sidebar__section-label">Compte</div>
      <router-link to="/dashboard/profile" class="sidebar__item" active-class="active">
        <v-icon size="18">mdi-account-outline</v-icon> Mon profil
      </router-link>
      <router-link to="/dashboard/faq" class="sidebar__item" active-class="active">
        <v-icon size="18">mdi-help-circle-outline</v-icon> Aide & FAQ
      </router-link>
    </nav>

    <div class="sidebar__footer">
      <a href="#" @click="logout" class="sidebar__item sidebar__item--logout">
        <v-icon size="18">mdi-logout</v-icon> Déconnexion
      </a>
    </div>
  </aside>
</template>
<script setup lang="ts">
import { detenteur } from '@/data/dumpData'
import { useAuthStore } from '@/stores/authStore'
import { useRouter } from 'vue-router'
const authStore = useAuthStore()
const router = useRouter()

async function logout() {
  //const data = await authService.login(identification.value)
  authStore.logout()
  router.push({ name: 'home' })
}
</script>
<style scoped>
.sidebar {
  width: 260px;
  background: var(--color-dark);
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 100;
  overflow: hidden;
}

.sidebar::after {
  content: '';
  position: absolute;
  top: -100px;
  right: -100px;
  width: 280px;
  height: 280px;
  background: radial-gradient(circle, rgba(204, 22, 74, 0.18) 0%, transparent 70%);
  pointer-events: none;
}

.sidebar__logo {
  padding: 28px 24px 20px;
  border-bottom: 1px solid var(--color-border);
}

.sidebar__logo-sub {
  font-size: 0.62rem;
  color: var(--color-text-muted);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-top: 6px;
}

.sidebar__user {
  padding: 18px 24px;
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  border-bottom: 1px solid var(--color-border);
}

.sidebar__avatar {
  width: 38px;
  height: 38px;
  border-radius: var(--radius-md);
  background: linear-gradient(135deg, var(--color-primary), var(--color-accent));
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 0.9rem;
  color: #fff;
  flex-shrink: 0;
}

.sidebar__user-name {
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--color-text);
}
.sidebar__user-role {
  font-size: 0.68rem;
  color: var(--color-text-muted);
}

.sidebar__nav {
  flex: 1;
  padding: var(--space-md) var(--space-sm);
  overflow-y: auto;
}

.sidebar__nav::-webkit-scrollbar {
  width: 3px;
}
.sidebar__nav::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
}

.sidebar__section-label {
  font-size: 0.6rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.25);
  padding: 12px var(--space-sm) 6px;
}

.sidebar__item {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  padding: 9px var(--space-sm);
  border-radius: var(--radius-sm);
  cursor: pointer;
  color: var(--color-text-muted);
  font-size: 0.875rem;
  font-weight: 500;
  transition: all 0.2s;
  text-decoration: none;
  margin-bottom: 2px;
  position: relative;
}

.sidebar__item:hover {
  background: rgba(255, 255, 255, 0.06);
  color: var(--color-text);
}

.sidebar__item.active {
  background: rgba(204, 22, 74, 0.18);
  color: var(--color-text);
}

.sidebar__item.active::before {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 3px;
  height: 55%;
  background: var(--color-primary);
  border-radius: 0 4px 4px 0;
}

.sidebar__item--logout {
  color: #ff6b6b !important;
}

.sidebar__badge {
  margin-left: auto;
  background: var(--color-primary);
  color: #fff;
  font-size: 0.6rem;
  font-weight: 700;
  padding: 2px 7px;
  border-radius: var(--radius-pill);
}

.sidebar__footer {
  padding: var(--space-md) var(--space-sm);
  border-top: 1px solid var(--color-border);
}
</style>
