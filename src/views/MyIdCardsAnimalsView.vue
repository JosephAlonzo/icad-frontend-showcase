<template>
  <div v-for="animal in filteredAnimals" :key="animal.name" class="animal">
    <animal-card
      :name="animal.name"
      :emoji="animal.emoji"
      :meta="animal.meta"
      :id="animal.id"
      :status="animal.status"
      :chipClass="animal.chipClass"
      :chipIcon="animal.chipIcon"
    />
    <div class="card-animal">
      <carte-identification
        :insert="animal.insert"
        :detenteur="{
          civilite: detenteur.civilite,
          prenom: detenteur.prenom,
          nom: detenteur.nom,
          adresse: detenteur.adresse,
          ville: detenteur.ville,
          codePostal: detenteur.codePostal,
          pays: 'France',
          telephone: '06 30 00 00 01',
          courriel: 'contact@i-cad.fr',
        }"
        :animal="{
          type: animal.type,
          emoji: animal.emoji,
          dateIdentification: animal.dateIdentification,
          emplacement: animal.emplacement,
          dateNaissance: animal.dateNaissance,
          paysNaissance: animal.paysNaissance,
          nomUsage: animal.nomUsage,
          sexe: animal.sexe,
          sterilise: animal.sterilise,
          categorie: animal.categorie,
          livreOrigines: animal.livreOrigines,
          race: animal.race,
          poil: animal.poil,
          signesParticuliers: animal.signesParticuliers,
        }"
        :dateEdition="animal.dateEdition"
        :showActions="true"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import CarteIdentification from '@/components/dashboard/CarteIdentificationComponent.vue'
import AnimalCard from '@/components/dashboard/AnimalCard.vue'
import { animals, detenteur } from '@/data/dumpData.ts'
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const filteredAnimals = computed(() =>
  route.params.id ? animals.filter((a) => a.id === route.params.id) : animals,
)
</script>
<style scoped>
.animal {
  background-color: var(--color-surface);
  border: 1px solid #f0f0f0;
  border-radius: var(--radius-md);
  padding: 5px 15px;
  margin-bottom: var(--space-lg);
}

.card-animal {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: var(--color-surface-2);
}
</style>
