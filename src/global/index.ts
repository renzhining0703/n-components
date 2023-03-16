import { App } from 'vue';
import registerElement from './register-element';
import registerIcons from './register-icons';

// 进行全局注册
export function globalRegister(app: App): void {
  app.use(registerElement);
  app.use(registerIcons);
}
