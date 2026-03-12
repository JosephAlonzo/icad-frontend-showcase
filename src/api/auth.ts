import api from './index'

interface LoginResponse {
  token: string
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

export const authService = {
  async login(email: string, password: string): Promise<LoginResponse> {
    const response = await api.post<LoginResponse>(
      '/auth/login',
      { email, password },
      {
        headers: { 'Content-Type': 'application/json' },
      },
    )
    localStorage.setItem('token', response.data.token)
    return response.data
  },

  async register(userData: RegisterData): Promise<void> {
    await api.post('/auth/register', userData, {
      headers: { 'Content-Type': 'application/json' },
    })
  },

  logout(): void {
    localStorage.removeItem('token')
  },

  isAuthenticated(): boolean {
    return !!localStorage.getItem('token')
  },
}
