import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

// PrimeVue
import PrimeVue from 'primevue/config';

import App from './App.vue'
import router from './router'


const app = createApp(App)

// Registering PrimeVue
app.use(PrimeVue, {
    theme: 'none'
});


app.use(createPinia())
app.use(router)

app.mount('#app')
