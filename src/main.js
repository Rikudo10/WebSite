import './assets/main.css'
// main.js

import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Make sure you import your router configuration

const app = createApp(App);
app.use(router);
app.mount('#app');
