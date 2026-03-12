<template>
  <v-dialog v-model="dialog" max-width="1000px">
    <v-card rounded="lg" class="content">
      <div class="login-card">
        <div class="login-title">ACCÉDER À MON ESPACE {{ profile.toUpperCase() }}</div>

        <div class="field-label">Email</div>
        <v-text-field
          v-model="email"
          placeholder="votre@email.fr"
          variant="outlined"
          density="comfortable"
          clearable
          :error-messages="errors.email"
        />

        <div class="field-label">Mot de passe</div>
        <v-text-field
          v-model="password"
          placeholder="••••••••"
          type="password"
          variant="outlined"
          density="comfortable"
          clearable
          :error-messages="errors.password"
        />
        <v-btn
          color="primary"
          block
          class="continuer-btn"
          elevation="0"
          @click="login"
          :loading="loading"
        >
          CONTINUER
        </v-btn>

        <v-alert v-if="errors.global" type="error" density="compact">
          {{ errors.global }}
        </v-alert>

        <div class="no-number">Mot de passe oublié ?</div>
      </div>
      <div class="img">
        <img src="@/assets/espace-detenteur.png" alt="space-detenteur" width="100%" />
      </div>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
import { ref, computed, reactive } from 'vue'
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

const email = ref('pierre@icad.fr')
const password = ref('Password123!')
const loading = ref(false)
const errors = reactive({
  email: '',
  password: '',
  global: '',
})

async function login() {
  // Reset errores
  errors.email = ''
  errors.password = ''
  errors.global = ''

  // Validación básica
  if (!email.value) {
    errors.email = 'Email requis'
    return
  }
  if (!password.value) {
    errors.password = 'Mot de passe requis'
    return
  }

  loading.value = true
  try {
    await authStore.login(email.value, password.value)
    router.push({ name: 'dashboard' })
    dialog.value = false
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (e) {
    errors.global = 'Email ou mot de passe incorrect'
  } finally {
    loading.value = false
  }
}
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
