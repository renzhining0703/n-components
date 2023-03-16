import { App } from 'vue';
import * as Icons from '@element-plus/icons'
import { toLine } from '../utils'

export default function (vm: App): void {
    // 全局注册图标 牺牲一点性能
    for (let i in Icons) {
    // 注册全部Icon组件 el-icon-xxx
    vm.component(`el-icon-${toLine(i)}`, (Icons as any)[i])
    }
  }