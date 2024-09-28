import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import {i18n} from "./i18n.js";
import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/aura-light-green/theme.css';

import InputText from "primevue/inputtext";
import Panel from "primevue/panel";
import Button from "primevue/button";
import Card from "primevue/card";
import Password from 'primevue/password';

import { GoogleMap } from 'vue3-google-map'
import Paginator from 'primevue/paginator';

createApp(App)
    .use(router)
    .use(PrimeVue)
    .use(i18n)
    .use(GoogleMap, {
        load: {
            key: 'AIzaSyBWlzfRtgnZqbDJfUg0mvaSaumzuwhVHYI',
            libraries: ['places'],
        },
    })
    .component('pv-input-text', InputText)
    .component('pv-panel', Panel)
    .component('pv-button', Button)
    .component('pv-card', Card)
    .component('pv-password', Password)
    .component('pv-paginator', Paginator)
    .mount('#app')
