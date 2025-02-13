import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import { createApp } from 'vue';
import App from './App.vue';
import router from '@/router';

createApp(App).use(router).mount('#app');

/* 환경변수 확인용 
console.log('import.meta.env.MODE', import.meta.env.MODE);
console.log('import.meta.env.BASE_URL', import.meta.env.BASE_URL);
console.log('import.meta.env.PROD', import.meta.env.PROD);
console.log('import.meta.env.DEV', import.meta.env.DEV);
console.log('VITE_APP_API_URL', import.meta.env.VITE_APP_API_URL); 
*/
