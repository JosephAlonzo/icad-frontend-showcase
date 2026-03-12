import api from './index'

export interface Animal {
  id?: number
  name: string
  nomUsage: string
  type: string
  race: string
  sexe: string
  poil: string
  dateNaissance: string
  dateIdentification: string
  paysNaissance: string
  status: string
  sterilise: boolean
  categorie: string
  livreOrigines: boolean
  signesParticuliers?: string
  identificationNumber: string
  owner?: string
  card?: IdentificationCard
}

export interface IdentificationCard {
  id?: number
  dateEdition?: string
  emplacement: string
  signesParticuliers?: string
  paysNaissance: string
  pdfPath?: string
}

export interface HydraCollection<T> {
  member: T[]
  totalItems: number
}

export const animalService = {
  async getAll(): Promise<Animal[]> {
    const response = await api.get<HydraCollection<Animal>>('/animals')
    return response.data['member'] ?? []
  },

  async getOne(id: number): Promise<Animal> {
    const response = await api.get<Animal>(`/animals/${id}`)
    return response.data
  },

  async create(animalData: Omit<Animal, 'id' | 'owner' | 'card'>): Promise<Animal> {
    const response = await api.post<Animal>('/animals', animalData)
    return response.data
  },

  async update(id: number, animalData: Partial<Animal>): Promise<Animal> {
    const response = await api.patch<Animal>(`/animals/${id}`, animalData, {
      headers: { 'Content-Type': 'application/merge-patch+json' },
    })
    return response.data
  },

  async delete(id: number): Promise<void> {
    await api.delete(`/animals/${id}`)
  },
}
