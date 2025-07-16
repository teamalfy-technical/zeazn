import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import AOS from 'aos'
import 'aos/dist/aos.css'
import router from './router' // Import the router

// Initialize AOS
AOS.init()

// Create and configure Vue app
const app = createApp(App)

app.use(router)         // ✅ Use router BEFORE mounting
app.mount('#app')       // ✅ Then mount the app
