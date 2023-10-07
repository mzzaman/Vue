import { defineStore } from 'pinia'

export const useStore = defineStore('storeId', {
  // arrow function recommended for full type inference
  state: () => {
    return {
      count: 0,
      name: 'Moniruzzaman',
      isAdmin: true,
      items: [],
      hashChange: true
    }
  }
})
