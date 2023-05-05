## 获取验证码按钮

扩展 `element-plus` 中的 `el-button` , 实现业务中经常使用到的获取验证码功能。

### 按需引入

```js
import NTimeButton from 'n-element-components/time-button'

// main.ts
app.use(NTimeButton)
```

### 基本用法

<br />
<div>
    <n-time-button type="success" @click="clickBtn" ref="timerBtn" style="width: 180px"/>
    <n-button  type="primary" :throttle="throttle" style="marginTop: 20px;width: 180px" @click="clickBtn">重置倒计时</n-button>
</div>

<script setup>
import { ref } from 'vue'

const throttle = ref(0)
const timerBtn = ref(null)

const clickBtn = () => {
    timerBtn.value.$.exposed.reset()
}
</script>

::: details 显示代码

```js
 <div>
        <n-time-button type="success" @click="clickBtn" ref="timerBtn" style="width: 180px"/>
        <n-button  type="primary" :throttle="throttle" style="marginTop: 20px;width: 180px" @click="clickBtn">重置倒计时</n-button>
    </div>

<script setup>
import { ref } from 'vue'

const throttle = ref(0)
const timerBtn = ref(null)

const clickBtn = () => {
    timerBtn.value.$.exposed.reset()
}
</script>

```

:::

#### Props

| 属性   | 说明          | 类型   | 可选值 | 默认值 |
| :----- | ------------- | ------ | ------ | ------ |
| second | 倒计时时间(s) | number | -      | 60     |
