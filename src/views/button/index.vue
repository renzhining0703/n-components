<template>
    <el-form-item>
        <el-input placeholder="请输入节流时间" v-model="throttle" style="width: 180px" />
    </el-form-item>

    <n-button @click="handleClick" type="primary" :throttle="throttle" style="marginTop: 20px">按钮</n-button>
</template>

<script lant="ts" setup>
import NButton from '../../components/button/src/index'
import { ElMessage } from 'element-plus'
import { ref } from 'vue'

const throttle = ref(1000)


const handleClick = () => {
    ElMessage({
        message: `节流时间${throttle.value}ms`,
        grouping: true,
        type: 'success',
    })
}
</script>