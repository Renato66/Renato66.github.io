import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    ssr: true,
    components,
    directives,
    theme: {
      defaultTheme: "customLight",
      themes: {
        customLight: {
          colors: {
            primary: "#22c6a0",
            secondary: "#0e0d1c",
            accent: "#82B1FF",
            error: "#FF5252",
            info: "#2196F3",
            success: "#4CAF50",
            warning: "#FFC107",
          },
          dark: false,
        },
        customDark: {
          colors: {
            primary: "#22c6a0",
            secondary: "#0e0d1c",
            accent: "#82B1FF",
            error: "#FF5252",
            info: "#2196F3",
            success: "#4CAF50",
            warning: "#FFC107",
          },
          dark: true,
        },
      },
    },
  });

  nuxtApp.vueApp.use(vuetify);
});
