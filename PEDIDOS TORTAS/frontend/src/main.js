import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

//PRIMEVUE
import PrimeVue from 'primevue/config'
import Aura from "@primeuix/themes/aura"; //importacion correcta segun documentacion
//import '@primevue/themes/saga-blue.css' //version 2025
//import 'primevue/resources/themes/saga-blue/theme.css'//version antigua
//import 'primevue/resources/primevue.css' //2025
//import 'primevue/resources/primevue.min.css' //antiguo
//import 'primeicons/primeicons.css' //se mantiene



const app = createApp(App);
app.use(PrimeVue, {
    theme: {
        preset: Aura, // Aura
        ripple: true,
    },
});
app.use(router);
app.mount('#app');

