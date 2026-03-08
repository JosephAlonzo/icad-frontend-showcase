<template>
  <div class="faq-page">
    <!-- Header -->
    <div class="faq-header">
      <div class="faq-header__icon">
        <v-icon size="28" color="var(--color-primary)">mdi-help-circle-outline</v-icon>
      </div>
      <div>
        <h1 class="faq-header__title">Aide & FAQ</h1>
        <p class="faq-header__sub">Trouvez rapidement une réponse à vos questions</p>
      </div>
    </div>

    <!-- Search -->
    <div class="faq-search">
      <v-text-field
        v-model="search"
        placeholder="Rechercher une question..."
        variant="outlined"
        density="comfortable"
        prepend-inner-icon="mdi-magnify"
        clearable
        hide-details
        rounded="lg"
      />
    </div>

    <!-- Categories -->
    <div class="faq-cats">
      <button
        v-for="cat in categories"
        :key="cat.key"
        class="faq-cat"
        :class="{ active: selectedCat === cat.key }"
        @click="selectedCat = cat.key"
      >
        <v-icon size="16">{{ cat.icon }}</v-icon>
        {{ cat.label }}
      </button>
    </div>

    <!-- Questions -->
    <div class="faq-list">
      <div
        v-for="item in filteredFaq"
        :key="item.question"
        class="faq-item"
        :class="{ open: item.open }"
        @click="item.open = !item.open"
      >
        <div class="faq-item__header">
          <span class="faq-item__question">{{ item.question }}</span>
          <v-icon size="18" class="faq-item__chevron">
            {{ item.open ? 'mdi-chevron-up' : 'mdi-chevron-down' }}
          </v-icon>
        </div>
        <div class="faq-item__body" v-show="item.open">
          <p>{{ item.answer }}</p>
        </div>
      </div>

      <div v-if="filteredFaq.length === 0" class="faq-empty">
        <v-icon size="40" color="#d0d0d0">mdi-text-search</v-icon>
        <p>Aucune question trouvée pour "{{ search }}"</p>
      </div>
    </div>

    <!-- Contact -->
    <alert-component
      title="Vous n'avez pas trouvé votre réponse ?"
      description="Notre équipe est disponible du lundi au vendredi, 9h–17h"
      icon="mdi-headset"
    ></alert-component>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { faq } from '@/data/dumpData.ts'
import AlertComponent from '@/components/dashboard/AlertComponent.vue'

const search = ref('')
const selectedCat = ref('all')

const categories = [
  { key: 'all', label: 'Toutes', icon: 'mdi-view-grid-outline' },
  { key: 'identification', label: 'Identification', icon: 'mdi-paw' },
  { key: 'compte', label: 'Mon compte', icon: 'mdi-account-outline' },
  { key: 'demarches', label: 'Démarches', icon: 'mdi-file-document-outline' },
  { key: 'carte', label: 'Carte', icon: 'mdi-card-account-details-outline' },
]

const fqalocal = ref(faq.map((item) => ({ ...item, open: false })))

const filteredFaq = computed(() => {
  return fqalocal.value.filter((item) => {
    const matchCat = selectedCat.value === 'all' || item.category === selectedCat.value
    const matchSearch =
      search.value === '' ||
      item.question.toLowerCase().includes(search.value.toLowerCase()) ||
      item.answer.toLowerCase().includes(search.value.toLowerCase())
    return matchCat && matchSearch
  })
})
</script>

<style scoped>
.faq-page {
  max-width: 760px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: var(--space-lg);
}

/* Header */
.faq-header {
  display: flex;
  align-items: center;
  gap: var(--space-md);
}

.faq-header__icon {
  width: 52px;
  height: 52px;
  background: #fce8ee;
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.faq-header__title {
  font-size: 1.4rem;
  font-weight: 800;
  color: var(--color-text-dark);
  letter-spacing: -0.02em;
}

.faq-header__sub {
  font-size: 0.875rem;
  color: var(--color-text-dark-muted);
  margin-top: 2px;
}

/* Categories */
.faq-cats {
  display: flex;
  gap: var(--space-sm);
  flex-wrap: wrap;
}

.faq-cat {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 7px 14px;
  border-radius: var(--radius-pill);
  border: 1px solid #e5e7eb;
  background: var(--color-surface);
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--color-text-dark-muted);
  cursor: pointer;
  transition: all 0.2s;
}

.faq-cat:hover {
  border-color: var(--color-primary-light);
  color: var(--color-primary);
  background: #fce8ee;
}

.faq-cat.active {
  background: var(--color-primary);
  color: #fff;
  border-color: var(--color-primary);
}

/* List */
.faq-list {
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
}

.faq-item {
  background: var(--color-surface);
  border: 1px solid #e5e7eb;
  border-radius: var(--radius-md);
  overflow: hidden;
  cursor: pointer;
  transition: all 0.2s;
}

.faq-item:hover {
  border-color: var(--color-primary-light);
  box-shadow: 0 2px 12px rgba(204, 22, 74, 0.08);
}

.faq-item.open {
  border-color: var(--color-primary-light);
}

.faq-item__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 20px;
  gap: var(--space-md);
}

.faq-item__question {
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--color-text-dark);
  line-height: 1.4;
}

.faq-item.open .faq-item__question {
  color: var(--color-primary);
}

.faq-item__chevron {
  color: var(--color-text-dark-muted);
  flex-shrink: 0;
  transition: transform 0.2s;
}

.faq-item__body {
  padding: 0 20px 16px;
  border-top: 1px solid #f0f0f0;
}

.faq-item__body p {
  font-size: 0.875rem;
  color: var(--color-text-dark-muted);
  line-height: 1.7;
  padding-top: 12px;
}

/* Empty */
.faq-empty {
  text-align: center;
  padding: 48px;
  color: var(--color-text-dark-muted);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-md);
  font-size: 0.875rem;
}
</style>
