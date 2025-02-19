import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from '@/router';
import globalComponents from './plugins/global-components';
import globalDirectives from './plugins/global-directives';
import dayjsPlugin from './plugins/dayjs';

const app = createApp(App);
app.use(globalDirectives);
app.use(dayjsPlugin);
app.use(globalComponents);
app.use(router);
app.use(createPinia());
app.mount('#app');
