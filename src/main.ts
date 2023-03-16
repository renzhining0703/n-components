import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
// import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { globalRegister } from './global';
import nUI from './components'

const app = createApp(App);

app.use(globalRegister);
app.use(router);
app.use(nUI);
app.mount('#app', true);

