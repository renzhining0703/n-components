
<template>
  <div class="demo-progress">
    <n-progress type="dashboard" :percentage="percentage" :color="colors" />
    <n-progress type="dashboard" :percentage="percentage2" :color="colors" />
    <div>
      <!-- <el-button-group> -->
      <el-button @click="decrease"> - </el-button>
      <el-button @click="increase"> + </el-button>
      <!-- </el-button-group> -->
    </div>
  </div>
</template>

<script lang='ts' setup>
import { ref, onMounted } from 'vue'
// import { Minus, Plus } from '@element-plus/icons-vue'

const percentage = ref(10)
const percentage2 = ref(0)

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

const changeCity = (val: any) => {
  console.log('changeCity', val)
}

const changeProvince = (val: any) => {
  console.log('changeProvince', val)
}

let changeArea = (val: any) => {
  console.log('changeArea', val)
}
let visible = ref(false)

let clickItem = (val: any) => {
  console.log('clickItem', val)
}
let clickAction = (val: any) => {
  console.log('clickAction', val)
}
</script>

<style scoped>
/* .demo-progress .el-progress--line {
  margin-bottom: 15px;
  width: 350px;
}

.demo-progress .el-progress--circle {
  margin-right: 15px;
} */
</style>
