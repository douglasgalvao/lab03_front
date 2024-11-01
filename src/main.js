import './assets/main.css'

import { createApp } from 'vue'
import PrimeVue from "primevue/config";
import App from './App.vue'
import router from './router'
import Aura from '@primevue/themes/aura';
import ToastService from 'primevue/toastservice';
import Toast from 'primevue/toast';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';



const app = createApp(App)
app.use(PrimeVue, {
    theme: {
        preset: Aura
    },
    options:{
        darkModeSelector: ''
    }
});

app.use(ToastService);
app.component('Toast', Toast);
app.use(router)

app.mount('#app')
