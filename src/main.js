import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./styles.css";
import "@fortawesome/fontawesome-free/css/all.css";
import 'typeface-montserrat';


createApp(App).use(router).mount("#app");
