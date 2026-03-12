<template>
  <!-- Loading -->
  <div v-if="animalStore.loading">Chargement...</div>

  <!-- Error -->
  <div v-else-if="animalStore.error">{{ animalStore.error }}</div>

  <!-- Animals -->
  <div v-else>
    {{ animalStore.animals?.length > 0 ? 'ok' : 'no' }}

    <div v-for="animal in animalStore.animals" :key="animal.identificationNumber" class="animal">
      <animal-card
        :name="animal.name"
        :meta="`${animal.type} · ${animal.race}`"
        :id="animal.identificationNumber"
        :status="animal.status"
      />

      <div class="card-animal">
        <div class="animal-info-grid">
          <div class="info-item">
            <span class="info-key">Race</span>
            <span class="info-val">{{ animal.race }}</span>
          </div>
          <div class="info-item">
            <span class="info-key">Date de naissance</span>
            <span class="info-val">{{ animal.dateNaissance }}</span>
          </div>
          <div class="info-item">
            <span class="info-key">Sexe</span>
            <span class="info-val">{{ animal.sexe }}</span>
          </div>
          <div class="info-item">
            <span class="info-key">Stérilisé</span>
            <span class="info-val">{{ animal.sterilise ? 'Oui' : 'Non' }}</span>
          </div>
          <div class="info-item">
            <span class="info-key">Poil</span>
            <span class="info-val">{{ animal.poil }}</span>
          </div>
          <div class="info-item">
            <span class="info-key">Pays de naissance</span>
            <span class="info-val">{{ animal.paysNaissance }}</span>
          </div>
        </div>

        <router-link
          :to="{ name: 'dashboard-id-card', params: { id: animal.id } }"
          class="btn btn-primary"
        >
          <v-icon size="16">mdi-card-account-details-outline</v-icon>
          Voir la carte d'identification
        </router-link>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted } from 'vue'
import AnimalCard from '@/components/dashboard/AnimalCard.vue'
import { useAnimalStore } from '@/stores/animalsStore'

const animalStore = useAnimalStore()

onMounted(async () => {
  await animalStore.fetchAnimals()
})
</script>
<style scoped>
.animal {
  background-color: var(--color-surface);
  border: 1px solid #f0f0f0;
  border-radius: var(--radius-md);
  padding: 15px;
  margin-bottom: var(--space-lg);
}

.card-animal {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 25px;
  background-color: var(--color-surface-2);
}

.animal-info-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px 24px;
  flex: 1;
}

.info-item {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.info-key {
  font-size: 0.65rem;
  font-weight: 700;
  color: var(--color-text-dark-muted);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.info-val {
  font-size: 0.82rem;
  font-weight: 600;
  color: var(--color-text-dark);
}
</style>
