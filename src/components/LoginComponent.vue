<template>
  <v-dialog v-model="dialog" max-width="1000px">
    <v-card rounded="lg" class="content">
      <div class="login-card">
        <div class="login-title">ACCÉDER À MON ESPACE {{ profile.toUpperCase() }}</div>

        <div class="field-label">
          Numéro d'identification
          <v-icon size="16" class="ml-1">mdi-information-outline</v-icon>
        </div>
        <v-text-field
          v-model="identification"
          placeholder="Numéro d'insert/puce ou tatouage"
          variant="outlined"
          density="comfortable"
          clearable
          class="mb-4"
        />

        <v-btn color="primary" block class="continuer-btn" elevation="0" @click="login">
          CONTINUER
        </v-btn>

        <div class="no-number">Je n'ai pas ce numéro</div>
      </div>
      <div class="img">
        <img src="@/assets/espace-detenteur.png" alt="space-detenteur" width="100%" />
      </div>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useAuthStore } from '@/stores/authStore'
import { useRouter } from 'vue-router'
const emits = defineEmits(['update:dialog'])
const props = defineProps<{ dialog: boolean; profile: string }>()
const authStore = useAuthStore()
const router = useRouter()

const dialog = computed({
  get: () => props.dialog,
  set: (value: boolean) => emits('update:dialog', value),
})

async function login() {
  //const data = await authService.login(identification.value)
  const data = { name: props.profile, token: 'fake-jwt-token' } // Simulated response
  authStore.login({ name: data.name, token: data.token })
  router.push({ name: 'dashboard' })
  dialog.value = false
}

const identification = ref('151391519506888521')
</script>

<style scoped>
.content {
  display: flex;
  flex-direction: row;
  gap: 15px;
  padding: 1rem 2rem;
  align-items: center;
  overflow: visible;
}

.img {
  display: flex;
  justify-content: center;
  width: 100%;
}

.img img {
  max-width: 1000px;
  object-fit: contain;
}

.login-card {
  min-width: 340px;
  max-width: 380px;
  display: flex;
  flex-direction: column;
  border: 1px solid #c0c0c0;
  box-shadow: var(--shadow-md);
  border-radius: 16px;
  padding: 24px;
  position: relative;
  align-self: center;
  overflow: visible;
  margin-top: 30px;
}

.login-title {
  border: 2px solid var(--color-primary);
  color: var(--color-primary);
  font-weight: 700;
  font-size: 0.95rem;
  text-align: center;
  padding: 14px 16px;
  border-radius: 8px;
  margin-bottom: 24px;
  position: absolute;
  top: -30px;
  left: 24px;
  width: calc(100% - 48px);
  background-color: #fff;
}

.field-label {
  color: var(--color-primary);
  font-weight: 600;
  font-size: 0.9rem;
  margin-bottom: 6px;
  display: flex;
  align-items: center;
  margin-top: 50px;
}

.continuer-btn {
  background-color: var(--color-primary) !important;
  color: white !important;
  font-weight: 700;
  letter-spacing: 0.05em;
  border-radius: 8px;
  margin-bottom: 16px;
}

.no-number {
  color: var(--color-primary);
  text-align: center;
  font-size: 0.9rem;
  cursor: pointer;
  padding-bottom: 20px;
}

.no-number:hover {
  text-decoration: underline;
}
</style>
