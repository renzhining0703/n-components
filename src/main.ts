import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { globalRegister } from './global'
import nUI from './components'

/** 引入全量打包的文件 使用测试 */
// import nUI from '../n-ui/n-element-components.es'
// import '../n-ui/style.css'

/** 单独引入组件 使用测试 */
// import chooseIcon from '../n-ui/chooseIcon/index.es.js'
// import '../n-ui/chooseIcon/style.css'

const app = createApp(App)

app.use(globalRegister)
app.use(router)
// .use(chooseIcon)
app.use(nUI)
app.mount('#app', true)
