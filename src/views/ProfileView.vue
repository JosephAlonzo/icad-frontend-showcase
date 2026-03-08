<template>
  <div class="profile-page">
    <!-- Header -->
    <div class="profile-header">
      <div class="profile-avatar">
        {{ initiales }}
      </div>
      <div class="profile-header__info">
        <h1 class="profile-header__name">
          {{ detenteur.civilite }} {{ detenteur.prenom }} {{ detenteur.nom }}
        </h1>
        <p class="profile-header__sub">
          Détenteur · {{ animals.length }} animal{{ animals.length > 1 ? 'x' : '' }} enregistré{{
            animals.length > 1 ? 's' : ''
          }}
        </p>
      </div>
      <button class="btn-edit" @click="editing = !editing">
        <v-icon size="16">{{ editing ? 'mdi-close' : 'mdi-pencil-outline' }}</v-icon>
        {{ editing ? 'Annuler' : 'Modifier' }}
      </button>
    </div>

    <!-- Infos personnelles -->
    <div class="card">
      <div class="card__header">
        <div>
          <div class="card__title">Informations personnelles</div>
          <div class="card__subtitle">Vos coordonnées enregistrées dans le fichier I-CAD</div>
        </div>
      </div>
      <div class="card__body">
        <div class="info-grid">
          <div class="info-field">
            <label class="info-field__label">Civilité</label>
            <div v-if="!editing" class="info-field__val">{{ form.civilite }}</div>
            <v-select
              v-else
              v-model="form.civilite"
              :items="['Monsieur', 'Madame']"
              variant="outlined"
              density="compact"
              hide-details
            />
          </div>

          <div class="info-field">
            <label class="info-field__label">Prénom</label>
            <div v-if="!editing" class="info-field__val">{{ form.prenom }}</div>
            <v-text-field
              v-else
              v-model="form.prenom"
              variant="outlined"
              density="compact"
              hide-details
            />
          </div>

          <div class="info-field">
            <label class="info-field__label">Nom</label>
            <div v-if="!editing" class="info-field__val">{{ form.nom }}</div>
            <v-text-field
              v-else
              v-model="form.nom"
              variant="outlined"
              density="compact"
              hide-details
            />
          </div>

          <div class="info-field info-field--full">
            <label class="info-field__label">Adresse</label>
            <div v-if="!editing" class="info-field__val">{{ form.adresse }}</div>
            <v-text-field
              v-else
              v-model="form.adresse"
              variant="outlined"
              density="compact"
              hide-details
            />
          </div>

          <div class="info-field">
            <label class="info-field__label">Ville</label>
            <div v-if="!editing" class="info-field__val">{{ form.ville }}</div>
            <v-text-field
              v-else
              v-model="form.ville"
              variant="outlined"
              density="compact"
              hide-details
            />
          </div>

          <div class="info-field">
            <label class="info-field__label">Code postal</label>
            <div v-if="!editing" class="info-field__val">{{ form.codePostal }}</div>
            <v-text-field
              v-else
              v-model="form.codePostal"
              variant="outlined"
              density="compact"
              hide-details
            />
          </div>

          <div class="info-field">
            <label class="info-field__label">Pays</label>
            <div v-if="!editing" class="info-field__val">{{ form.pays }}</div>
            <v-text-field
              v-else
              v-model="form.pays"
              variant="outlined"
              density="compact"
              hide-details
            />
          </div>

          <div class="info-field">
            <label class="info-field__label">Téléphone</label>
            <div v-if="!editing" class="info-field__val">{{ form.telephone }}</div>
            <v-text-field
              v-else
              v-model="form.telephone"
              variant="outlined"
              density="compact"
              hide-details
            />
          </div>

          <div class="info-field info-field--full">
            <label class="info-field__label">Courriel</label>
            <div v-if="!editing" class="info-field__val">{{ form.courriel }}</div>
            <v-text-field
              v-else
              v-model="form.courriel"
              variant="outlined"
              density="compact"
              hide-details
            />
          </div>
        </div>

        <!-- Save -->
        <div class="card__actions" v-if="editing">
          <button class="btn-save" @click="sauvegarder">
            <v-icon size="16">mdi-check</v-icon>
            Sauvegarder les modifications
          </button>
        </div>
      </div>
    </div>

    <!-- Mes animaux -->
    <div class="card">
      <div class="card__header">
        <div>
          <div class="card__title">Mes animaux</div>
          <div class="card__subtitle">
            {{ animals.length }} animal{{ animals.length > 1 ? 'x' : '' }} enregistré{{
              animals.length > 1 ? 's' : ''
            }}
          </div>
        </div>
        <router-link to="/dashboard/my-animals" class="see-all">
          Gérer <v-icon size="14">mdi-arrow-right</v-icon>
        </router-link>
      </div>
      <div class="card__body">
        <div class="animals-list">
          <div v-for="animal in animals" :key="animal.id" class="animal-row">
            <div class="animal-row__avatar">{{ animal.emoji }}</div>
            <div class="animal-row__info">
              <div class="animal-row__name">{{ animal.name }}</div>
              <div class="animal-row__meta">{{ animal.meta }}</div>
            </div>
            <span class="chip" :class="animal.chipClass">
              <v-icon size="11">{{ animal.chipIcon }}</v-icon>
              {{ animal.status }}
            </span>
            <router-link
              :to="{ name: 'dashboard-id-card', params: { id: animal.id } }"
              class="animal-row__link"
            >
              <v-icon size="16">mdi-card-account-details-outline</v-icon>
            </router-link>
          </div>
        </div>
      </div>
    </div>

    <!-- Zone danger -->
    <div class="card card--danger">
      <div class="card__header">
        <div>
          <div class="card__title card__title--danger">Zone de danger</div>
          <div class="card__subtitle">Actions irréversibles sur votre compte</div>
        </div>
      </div>
      <div class="card__body">
        <div class="danger-actions">
          <div class="danger-item">
            <div>
              <div class="danger-item__title">Changer le mot de passe</div>
              <div class="danger-item__sub">
                Vous recevrez un email avec un lien de réinitialisation
              </div>
            </div>
            <button class="btn-danger-outline">
              <v-icon size="15">mdi-lock-outline</v-icon>
              Changer
            </button>
          </div>
          <div class="danger-divider"></div>
          <div class="danger-item">
            <div>
              <div class="danger-item__title">Se déconnecter</div>
              <div class="danger-item__sub">Fermer la session en cours</div>
            </div>
            <button class="btn-danger-outline" @click="logout">
              <v-icon size="15">mdi-logout</v-icon>
              Déconnexion
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { animals, detenteur } from '@/data/dumpData.ts'
import { useAuthStore } from '@/stores/authStore'
import { useRouter } from 'vue-router'
const authStore = useAuthStore()
const router = useRouter()

const editing = ref(false)

const form = ref({ ...detenteur })

const initiales = computed(() => `${detenteur.prenom[0]}${detenteur.nom[0]}`.toUpperCase())

function sauvegarder() {
  editing.value = false
}

async function logout() {
  authStore.logout()
  router.push({ name: 'home' })
}
</script>

<style scoped>
.profile-page {
  max-width: 760px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: var(--space-lg);
}

/* ══ HEADER ══ */
.profile-header {
  display: flex;
  align-items: center;
  gap: var(--space-md);
}

.profile-avatar {
  width: 64px;
  height: 64px;
  border-radius: 18px;
  background: linear-gradient(135deg, var(--color-primary), var(--color-accent));
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
  font-weight: 800;
  color: #fff;
  flex-shrink: 0;
}

.profile-header__info {
  flex: 1;
}

.profile-header__name {
  font-size: 1.3rem;
  font-weight: 800;
  color: var(--color-text-dark);
  letter-spacing: -0.02em;
}

.profile-header__sub {
  font-size: 0.82rem;
  color: var(--color-text-dark-muted);
  margin-top: 3px;
}

.btn-edit {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 9px 18px;
  border: 1px solid #e5e7eb;
  background: var(--color-surface);
  border-radius: var(--radius-md);
  font-size: 0.82rem;
  font-weight: 600;
  color: var(--color-text-dark);
  cursor: pointer;
  transition: all 0.2s;
}

.btn-edit:hover {
  background: #fce8ee;
  border-color: var(--color-primary-light);
  color: var(--color-primary);
}

/* ══ CARD ══ */
.card {
  background: var(--color-surface);
  border-radius: var(--radius-md);
  border: 1px solid #ebebeb;
  box-shadow: var(--shadow-sm);
  overflow: hidden;
}

.card--danger {
  border-color: #fecdd3;
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
.card__title--danger {
  color: var(--color-primary);
}
.card__subtitle {
  font-size: 0.75rem;
  color: var(--color-text-dark-muted);
  margin-top: 2px;
}
.card__body {
  padding: var(--space-lg);
}

.card__actions {
  margin-top: var(--space-md);
  display: flex;
  justify-content: flex-end;
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

/* ══ INFO GRID ══ */
.info-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-md);
}

.info-field--full {
  grid-column: 1 / -1;
}

.info-field__label {
  display: block;
  font-size: 0.65rem;
  font-weight: 700;
  color: var(--color-text-dark-muted);
  text-transform: uppercase;
  letter-spacing: 0.06em;
  margin-bottom: 4px;
}

.info-field__val {
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--color-text-dark);
  padding: 6px 0;
  border-bottom: 1px solid #f0f0f0;
}

/* ══ BTN SAVE ══ */
.btn-save {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 22px;
  background: var(--color-primary);
  color: #fff;
  border: none;
  border-radius: var(--radius-md);
  font-size: 0.875rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
}

.btn-save:hover {
  background: var(--color-primary-dark);
  transform: translateY(-1px);
  box-shadow: var(--shadow-red);
}

/* ══ ANIMALS ══ */
.animals-list {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.animal-row {
  display: flex;
  align-items: center;
  gap: var(--space-md);
  padding: 12px 0;
  border-bottom: 1px solid #f5f5f5;
}

.animal-row:last-child {
  border-bottom: none;
}

.animal-row__avatar {
  width: 38px;
  height: 38px;
  background: #fce8ee;
  border-radius: var(--radius-sm);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  flex-shrink: 0;
}

.animal-row__info {
  flex: 1;
}
.animal-row__name {
  font-size: 0.875rem;
  font-weight: 700;
  color: var(--color-text-dark);
}
.animal-row__meta {
  font-size: 0.72rem;
  color: var(--color-text-dark-muted);
  margin-top: 1px;
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

.animal-row__link {
  width: 32px;
  height: 32px;
  border-radius: var(--radius-sm);
  border: 1px solid #e5e7eb;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-text-dark-muted);
  text-decoration: none;
  transition: all 0.2s;
}

.animal-row__link:hover {
  background: #fce8ee;
  color: var(--color-primary);
  border-color: var(--color-primary-light);
}

/* ══ DANGER ══ */
.danger-actions {
  display: flex;
  flex-direction: column;
}

.danger-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-md);
  padding: 12px 0;
}

.danger-item__title {
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--color-text-dark);
}
.danger-item__sub {
  font-size: 0.75rem;
  color: var(--color-text-dark-muted);
  margin-top: 2px;
}

.danger-divider {
  height: 1px;
  background: #f5f5f5;
}

.btn-danger-outline {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 16px;
  border: 1px solid #fecdd3;
  background: #fff1f4;
  border-radius: var(--radius-md);
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--color-primary);
  cursor: pointer;
  transition: all 0.2s;
  white-space: nowrap;
  flex-shrink: 0;
}

.btn-danger-outline:hover {
  background: var(--color-primary);
  color: #fff;
  border-color: var(--color-primary);
}
</style>
