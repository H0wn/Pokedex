/* import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app') */
import './assets/base.css';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index';

const app = createApp(App);

app.use(router);

app.mount('#app');
