import { createApp } from "vue";
import Dashboard from "./components/Dashboard.vue";

export const mountDashboard = (el) => {
  const app = createApp(Dashboard);

  app.mount(el);
};

if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#_dashboard-dev-root");

  if (devRoot) mountDashboard(devRoot);
}
