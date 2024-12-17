import { defineStore } from "pinia";

export const useSettingsStore = defineStore("settings", {
  state: () => ({
    bubblesEnabled: JSON.parse(localStorage.getItem("bubblesEnabled")) ?? true,
  }),
  actions: {
    toggleBubbles() {
      this.bubblesEnabled = !this.bubblesEnabled;
      localStorage.setItem("bubblesEnabled", JSON.stringify(this.bubblesEnabled));
    },
    setBubblesEnabled(value) {
      this.bubblesEnabled = value;
      localStorage.setItem("bubblesEnabled", JSON.stringify(this.bubblesEnabled));
    },
  },
});
