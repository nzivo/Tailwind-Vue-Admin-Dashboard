import { createApp } from "vue";
import "./assets/css/satoshi.css";
import "./assets/css/style.css";
import VueApexCharts from "vue3-apexcharts";
import App from "./App.vue";
import router from "./router";
import store from "./store";

createApp(App).use(store).use(router).use(VueApexCharts).mount("#app");
