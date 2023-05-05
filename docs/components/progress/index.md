## 进度条

对`element-plus`中的 `progress`进行优化, 可动态加载的进度条 , 支持更多自定义

### 按需引入

```js
import progress from 'n-element-components/progress'
import 'n-element-components/progress/style.css'

// main.ts
app.use(progress)
```

### 基本用法

<br />
  <div class="demo-progress">
    <n-progress isAnimate :percentage="50" />
    <n-progress isAnimate :percentage="100" :format="format" />
    <n-progress isAnimate :percentage="100" status="success" />
    <n-progress isAnimate :percentage="100" status="warning" />
    <n-progress isAnimate :percentage="50" status="exception" />
  </div>

<script lang="ts" setup>
const format = (percentage) => (percentage === 100 ? 'Full' : `${percentage}%`)
</script>

<style scoped>
.demo-progress .el-progress--line {
  margin-bottom: 15px;
  width: 350px;
}
</style>

### 代码示例

```js
 <div class="demo-progress">
    <n-progress isAnimate :percentage="50" />
    <n-progress isAnimate :percentage="100" :format="format" />
    <n-progress isAnimate :percentage="100" status="success" />
    <n-progress isAnimate :percentage="100" status="warning" />
    <n-progress isAnimate :percentage="50" status="exception" />
  </div>

<script lang="ts" setup>
const format = (percentage) => (percentage === 100 ? 'Full' : `${percentage}%`)
</script>

<style scoped>
.demo-progress .el-progress--line {
  margin-bottom: 15px;
  width: 350px;
}
```

### 未使用动画

<br />
<div class="demo-progress" >
    <n-progress type="dashboard" :percentage="percentage" :color="colors" />
    <n-progress type="dashboard" :percentage="percentage2" :color="colors" />
    <div>
      <el-button-group>
        <el-button @click="decrease"> - </el-button>
        <el-button @click="increase"> + </el-button>
      </el-button-group>
    </div>
  </div>

<script lang='ts'>
import { ref, onMounted } from 'vue'

const percentage = ref(80)
const percentage2 = ref(55)

const colors = [
  { color: '#f56c6c', percentage: 20 },
  { color: '#e6a23c', percentage: 40 },
  { color: '#5cb87a', percentage: 60 },
  { color: '#1989fa', percentage: 80 },
  { color: '#6f7ad3', percentage: 100 },
]

const increase = () => {
  percentage.value += 10
  if (percentage.value > 100) {
    percentage.value = 100
  }
}
const decrease = () => {
  console.log('decrease')
  percentage.value -= 10
  if (percentage.value < 0) {
    percentage.value = 0
  }
}
onMounted(() => {
  setInterval(() => {
    percentage2.value = (percentage2.value % 100) + 10
  }, 500)
})
</script>

<style scoped>
.demo-progress .el-progress--line {
  margin-bottom: 15px;
  width: 350px;
}

.demo-progress .el-progress--circle {
  margin-right: 15px;
}
</style>

### 代码示例

```js
<div class="demo-progress" >
    <n-progress type="dashboard" :percentage="percentage" :color="colors" />
    <n-progress type="dashboard" :percentage="percentage2" :color="colors" />
    <div>
      <el-button-group>
        <el-button @click="decrease" > - </el-button>
        <el-button @click="increase" > + </el-button>
      </el-button-group>
    </div>
  </div>

<script lang='ts'>
import { ref, onMounted } from 'vue'

const percentage = ref(80)
const percentage2 = ref(55)

const colors = [
  { color: '#f56c6c', percentage: 20 },
  { color: '#e6a23c', percentage: 40 },
  { color: '#5cb87a', percentage: 60 },
  { color: '#1989fa', percentage: 80 },
  { color: '#6f7ad3', percentage: 100 },
]

const increase = () => {
  percentage.value += 10
  if (percentage.value > 100) {
    percentage.value = 100
  }
}
const decrease = () => {
  console.log('decrease')
  percentage.value -= 10
  if (percentage.value < 0) {
    percentage.value = 0
  }
}
onMounted(() => {
  setInterval(() => {
    percentage2.value = (percentage2.value % 100) + 10
  }, 500)
})
</script>

<style scoped>
.demo-progress .el-progress--line {
  margin-bottom: 15px;
  width: 350px;
}

.demo-progress .el-progress--circle {
  margin-right: 15px;
}
</style>
```

### Api

#### Props

| 属性       | 说明           | 类型    | 可选值       | 默认值 |
| :--------- | -------------- | ------- | ------------ | ------ |
| percentage | 进度条进度     | number  | 必填         | -      |
| isAnimate  | 是否动态加载   | boolean | true / false | false  |
| time       | 动画时长(毫秒) | number  | -            | 3000   |

继承 `element-plus`中 `progress`组件的所有属性
