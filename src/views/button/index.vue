<template>
    <el-form>
        <el-form-item label="throttle time">
            <el-input type="number" placeholder="请输入节流时间" v-model="throttle" style="width: 180px" />
        </el-form-item>
    </el-form>

    <n-button @click="handleClick" type="primary" :throttle="throttle" style="marginTop: 20px;width: 180px">点我</n-button>
</template>

<script lant="ts" setup>
import NButton from '../../components/button/src/index'
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