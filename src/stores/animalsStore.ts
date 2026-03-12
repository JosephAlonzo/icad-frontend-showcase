import { defineStore } from 'pinia'
import { ref } from 'vue'
import { animalService, type Animal } from '@/api/animals'

export const useAnimalStore = defineStore('animals', () => {
  const animals = ref<Animal[]>([])
  const currentAnimal = ref<Animal | null>(null)
  const loading = ref(false)
  const error = ref<string | null>(null)

  async function fetchAnimals() {
    loading.value = true
    error.value = null
    try {
      animals.value = await animalService.getAll()
      console.log('Animaux chargés :', animals.value)
    } catch (e) {
      error.value = 'Erreur lors du chargement des animaux'
    } finally {
      loading.value = false
    }
  }

  async function fetchAnimal(id: number) {
    loading.value = true
    try {
      currentAnimal.value = await animalService.getOne(id)
    } catch (e) {
      error.value = 'Animal introuvable'
    } finally {
      loading.value = false
    }
  }

  async function createAnimal(animalData: Omit<Animal, 'id' | 'owner' | 'card'>) {
    loading.value = true
    try {
      const newAnimal = await animalService.create(animalData)
      animals.value.push(newAnimal)
      return newAnimal
    } catch (e) {
      error.value = 'Erreur lors de la création'
    } finally {
      loading.value = false
    }
  }

  async function updateAnimal(id: number, animalData: Partial<Animal>) {
    loading.value = true
    try {
      const updated = await animalService.update(id, animalData)
      const index = animals.value.findIndex((a) => a.id === id)
      if (index !== -1) animals.value[index] = updated
      return updated
    } catch (e) {
      error.value = 'Erreur lors de la mise à jour'
    } finally {
      loading.value = false
    }
  }

  async function deleteAnimal(id: number) {
    loading.value = true
    try {
      await animalService.delete(id)
      animals.value = animals.value.filter((a) => a.id !== id)
    } catch (e) {
      error.value = 'Erreur lors de la suppression'
    } finally {
      loading.value = false
    }
  }

  return {
    animals,
    currentAnimal,
    loading,
    error,
    fetchAnimals,
    fetchAnimal,
    createAnimal,
    updateAnimal,
    deleteAnimal,
  }
})
