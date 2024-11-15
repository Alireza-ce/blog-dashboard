import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { plugin, defaultConfig } from "@formkit/vue";
import formKitConfig from "../formkit.config.js";
import { VueQueryPlugin } from "@tanstack/vue-query";
import { SnackbarService } from "vue3-snackbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import "./core/styles/reset.css";
import "./core/styles/global.css";
import "./core/styles/formkit.css";
import "vue3-snackbar/styles";

const app = createApp(App);

app.use(router);
app.use(
  plugin,
  defaultConfig({
    config: formKitConfig.config,
  }),
);
app.use(VueQueryPlugin);
app.use(SnackbarService);

app.mount("#app");
