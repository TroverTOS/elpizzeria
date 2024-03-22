// hi
import { createApp } from 'vue'
import appComponent from './App.vue'
import router from './router.js'
import './index.css';
const app = createApp(appComponent).use(router)

app.mount('#app')
