<template>
    <n-choose-icon title="选择图标" v-model:visible="visible">
        选择图标
    </n-choose-icon>
    <n-button @click="handleClick" type="primary" :throttle="5000">按钮</n-button>
</template>

<script lant="ts" setup>
import nChooseIcon from '../../components/chooseIcon/src/index.vue'
import NButton from '../../components/button/src/index.tsx'
import { ref } from 'vue'

let visible = ref(false)

const handleClick = () => {
    console.log('触发了')
}
</script>