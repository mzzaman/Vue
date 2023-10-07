const app = Vue.createApp({
  data() {
    return {
      fullName: "",
    };
  },
  watch: {
    name(value) {
      this.fullName = value;
    },
  },
});
app.mount("#waches");
