import { createApp } from "vue";
import App from "./App.vue";
import "./main.css";

const vueApp = createApp(App);

import CardVue from "./components/Card.vue";
import ExperienceItemVue from "./components/ExperienceItem.vue";
import EducationItemVue from "./components/EducationItem.vue";
vueApp.component("Card", CardVue);
vueApp.component("ExperienceItem", ExperienceItemVue);
vueApp.component("EducationItem", EducationItemVue);

vueApp.mount("#app");
