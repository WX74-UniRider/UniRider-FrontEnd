import { createApp } from 'vue';
import App from './app.vue';
import router from "./router/index.js";
import './style.css';
import { i18n } from './i18n.js';

// PrimeVue
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';
import 'primeicons/primeicons.css'; // PrimeIcons para íconos
import 'primeflex/primeflex.css'; // PrimeFlex para clases utilitarias

// PrimeVue Components
import InputText from 'primevue/inputtext';
import Panel from 'primevue/panel';
import Button from 'primevue/button';
import Card from 'primevue/card';
import Select from 'primevue/select';
import Password from 'primevue/password';
import Paginator from 'primevue/paginator';

// Google Maps
import { GoogleMap } from 'vue3-google-map';

// Crear instancia de la aplicación
const app = createApp(App);

// Configuración y uso de PrimeVue
app.use(PrimeVue, { theme: { preset: Aura }, ripple: true });

// Uso de plugins adicionales
app.use(router);
app.use(i18n);
app.use(GoogleMap, {
    load: {
        key: 'AIzaSyBWlzfRtgnZqbDJfUg0mvaSaumzuwhVHYI',
        libraries: ['places'],
    },
});

// Registro de componentes de PrimeVue
app.component('pv-input-text', InputText)
    .component('pv-panel', Panel)
    .component('pv-button', Button)
    .component('pv-card', Card)
    .component('pv-password', Password)
    .component('pv-select', Select)
    .component('pv-paginator', Paginator);

// Montar la aplicación
app.mount('#app');
