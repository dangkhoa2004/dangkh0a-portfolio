import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index.js';
import './assets/main.css';
import './assets/markdown-styles.css';
import { createPinia } from 'pinia';

const app = createApp(App);
const pinia = createPinia();
app.use(pinia);
app.use(router);
app.mount('#app');