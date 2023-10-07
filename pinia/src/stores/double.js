import { defineStore } from 'pinia'
export const useDouble = defineStore('double', {
  state: () => ({
    countNumber: 0
  }),
  actions: {
    increment() {
      this.countNumber++
    },
    subs() {
      this.countNumber--
    },
    randomCount() {
      this.countNumber = Math.round(100 * Math.random())
    }
  }
})
