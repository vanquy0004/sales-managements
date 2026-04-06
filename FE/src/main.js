import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import AuthLayout from './layouts/AuthLayout.vue'
import ClientLayout from './layouts/ClientLayout.vue'
import AdminLayout from './layouts/AdminLayout.vue'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.component("default-layout", ClientLayout);
app.component("admin-layout", AdminLayout);
app.component("nocore-layout", AuthLayout);

app.mount('#app')
