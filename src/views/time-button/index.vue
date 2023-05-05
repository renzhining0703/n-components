<template>
    <div>
        <n-time-button type="success" @click="clickBtn" ref="timerBtn" style="width: 180px"/>
        <n-button  type="primary" :throttle="throttle" style="marginTop: 20px;width: 180px" @click="clickBtn">重置倒计时</n-button>
    </div>
</template>

<script lant="ts" setup>
import NTimeButton from '../../components/time-button/src/index'
import NButton from '../../components/button/src/index'
import { ref } from 'vue'

const throttle = ref(0)
const timerBtn = ref(null)

const clickBtn = () => {
    console.log('reset', timerBtn.value.$.exposed)
    timerBtn.value.$.exposed.reset()
}
</script>