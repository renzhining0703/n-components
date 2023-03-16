<template>
    <n-choose-icon title="选择图标" v-model:visible="visible">
        选择图标
    </n-choose-icon>
</template>

<script lant="ts" setup>
import nChooseIcon from '../../components/chooseIcon/src/index.vue' 
import { ref } from 'vue'

let visible = ref(false)
</script>