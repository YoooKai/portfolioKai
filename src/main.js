import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css' 
import 'bootstrap'  
import './styles.css' 
import 'remixicon/fonts/remixicon.css';



createApp(App).use(router).mount('#app')
