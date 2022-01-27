<template>
  <App @change-theme="changeTheme" />
</template>

<script>
import EventBus from "./AppEventBus";
import App from "./App";

export default {
  methods: {
    changeTheme(event) {
      let themeElement = document.getElementById("theme-link");
      themeElement.setAttribute(
        "href",
        themeElement
          .getAttribute("href")
          .replace(this.$appState.theme, event.theme)
      );
      this.$appState.theme = event.theme;
      this.$appState.darkTheme = event.dark;
      EventBus.emit("change-theme", event);

      if (event.theme.startsWith("md")) {
        this.$primevue.config.ripple = true;
      }
    },
  },
  components: {
    App,
  },
};
</script>
