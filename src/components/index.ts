import { defineAsyncComponent, App } from 'vue'
import { camelCaseToHyphen } from '/@/utils/index'

export default {
  install(app: App): void {
    // 获取当前路径任意文件夹下的 index.vue 文件
    let components = import.meta.glob('./*/src/index.vue')
    const tsx = import.meta.glob('./*/src/index.tsx')
    components = { ...components, ...tsx }
    // 遍历获取到的组件模块
    for (const [key, value] of Object.entries(components)) {
      // 拼接组件注册的 name
      const componentName = 'n-' + camelCaseToHyphen(key.replace('./', '').split('/')[0])
      // 通过 defineAsyncComponent 异步导入指定路径下的组件
      app.component(componentName, defineAsyncComponent(value))
    }
  }
}

// import { App } from 'vue'
// import chooseArea from './chooseArea'
// import chooseIcon from './chooseIcon'
// import trend from './trend'
// import notification from './notification'
// import list from './list'
// import menu from './menu'
// // import chooseTime from './chooseTime'
// // import chooseDate from './chooseDate'
// import progress from './progress'
// import chooseCity from './chooseCity'
// import form from './form'
// import modalForm from './modalForm'
// import table from './table'
// // import calendar from './calendar'

// const components = [
//   chooseArea,
//   chooseIcon,
//   trend,
//   notification,
//   list,
//   menu,
// //   chooseTime,
// //   chooseDate,
//   chooseCity,
//   progress,
//   form,
//   modalForm,
//   table,
// //   calendar
// ]

// export default {
//   install(app: App) {
//     components.map(item => {
//       app.use(item)
//     })
//   }
// }
