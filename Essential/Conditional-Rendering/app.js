const app = Vue.createApp({
  data() {
    return {
      addGoals: "",
      goals: [],
    };
  },
  methods: {
    addGoalsItem() {
      this.goals.push(this.addGoals);
    },
    removeItem(index) {
      this.goals.splice(index);
    },
  },
});

app.mount("#user-goals");
