import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { authService } from '@/api/auth'

interface User {
  email: string
  prenom: string
  nom: string
  profileType: string
}

interface RegisterData {
  email: string
  password: string
  civilite: string
  prenom: string
  nom: string
  adresse: string
  ville: string
  codePostal: string
  pays: string
  telephone: string
  profileType: string
}

export const useAuthStore = defineStore('auth', () => {
  const token = ref<string | null>(localStorage.getItem('token'))
  const user = ref<User | null>(null)

  const isAuthenticated = computed(() => !!token.value)

  async function login(email: string, password: string) {
    const response = await authService.login(email, password)
    token.value = response.token
    return response
  }

  async function register(userData: RegisterData) {
    await authService.register(userData)
  }

  function logout() {
    authService.logout()
    token.value = null
    user.value = null
  }

  function restoreSession() {
    const savedToken = localStorage.getItem('token')
    if (savedToken) {
      token.value = savedToken
    }
  }

  return {
    token,
    user,
    isAuthenticated,
    login,
    register,
    logout,
    restoreSession,
  }
})
