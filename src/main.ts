import { createApp } from 'vue'
import App from '@/App.vue'
import { createPinia } from 'pinia'

const pinia = createPinia() // use Pinia for state management
const app = createApp(App)

app.use(pinia)
app.mount('#app')
