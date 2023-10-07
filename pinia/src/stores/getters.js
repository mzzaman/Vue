import { defineStore } from 'pinia'
export const useGetters = defineStore('counter', {
  state: () => ({
    count: 10
  }),
  getters: {
    doubleCount: (state) => state.count * 2
  }
})
