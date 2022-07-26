import { createApp } from 'vue'
import App from './App.vue'
import Maska from 'maska'


//createApp(App).mount('#app')


const app = createApp(App)

app.use(Maska)

app.mount('#app')