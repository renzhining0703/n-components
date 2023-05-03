## 节流按钮

扩展 `element-plus` 中的 `el-button` , 当持续触发事件时，保证一定时间段内只调用一次事件处理函数。

### 按需引入

```js
import NButton from 'n-element-components/button'

// main.ts
app.use(NButton)
```

### 基本用法

<br />
<div>
    <el-form>
        <el-form-item label="throttle time">
            <el-input type="number" placeholder="请输入节流时间" v-model="throttle" style="width: 180px" />
        </el-form-item>
    </el-form>
<n-button @click="handleClick" type="primary" :throttle="throttle" style="marginTop: 20px;width: 180px">点我</n-button>

</div>

<script setup>
import { ElMessage } from 'element-plus'
import { ref } from 'vue'

const throttle = ref(1000)

const handleClick = () => {
ElMessage({
    message: `请等待${throttle.value}ms后再次点击`,
    grouping: true,
    type: 'success',
})
}
</script>

::: details 显示代码

```js
 <el-form>
    <el-form-item label="throttle time">
        <el-input type="number" placeholder="请输入节流时间" v-model="throttle" style="width: 180px" />
    </el-form-item>
</el-form>
<n-button @click="handleClick" type="primary" :throttle="throttle" style="marginTop: 20px;width: 180px">点我</n-button>

<script setup>
import { ElMessage } from 'element-plus'
import { ref } from 'vue'

const throttle = ref(1000)

const handleClick = () => {
ElMessage({
    message: `请等待${throttle.value}ms后再次点击`,
    grouping: true,
    type: 'success',
})
}
</script>

```

:::

#### Props

| 属性     | 说明     | 类型   | 可选值 | 默认值 |
| :------- | -------- | ------ | ------ | ------ |
| throttle | 节流时间 | number | -      | 1000   |

继承 `element-plus`中 `el-button`组件的所有属性
