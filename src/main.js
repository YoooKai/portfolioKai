import { createApp, watchEffect } from 'vue';  // Importar watchEffect
import i18n from "./i18n.ts";
import App from './App.vue';
import router from './router';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';  
import './styles.css'; 
import 'remixicon/fonts/remixicon.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const app = createApp(App);

watchEffect(() => {
    const currentRoute = router.currentRoute.value; 
    const lang = currentRoute.params.lang || "es"; 
    if (i18n.global.locale.value !== lang) {
        i18n.global.locale.value = lang; 
        localStorage.setItem("language", lang); 
    }
});

app.use(i18n);
app.use(router);

AOS.init();

app.mount('#app');
