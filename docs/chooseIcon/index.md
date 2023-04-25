## 图标选择器

用户点击按钮, 弹出框显示所有图标, 点击图标可以复制图标代码

### 按需引入

```js
import chooseIcon from "n-element-components/chooseIcon";
import "n-element-components/chooseIcon/style.css";

// main.ts
app.use(chooseIcon);
```

### 基本用法

<br>
<!-- <div style="padding:1em;margin:1em;border:1px solid #eee"> -->
    <n-choose-icon title="选择图标" v-model:visible="visibile">选择图标</n-choose-icon>
<!-- </div> -->

### 代码示例

<script setup>
import { ref } from  'vue'

let visibile = ref(false)
</script>

```js

<n-choose-icon title="选择图标" v-model:visibile="visibile">
    选择图标
</n-choose-icon>

<script lang="ts" setup>
import { ref } from  'vue'

let visibile = ref<boolean>(false)
</script>
```
