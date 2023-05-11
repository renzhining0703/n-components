<template>
  <div class="header">
    <div @click="toggle">
      <el-icon-expand v-if="collapse"></el-icon-expand>
      <el-icon-fold v-else></el-icon-fold>
    </div>
    <div class="theme-item">
      <div class="theme-setting">
        <i :class="'iconfont icon-zhuti'" class="toolBar-icon" @click="openDrawer"></i>
      </div>
      <!-- <el-color-picker v-model="primary" :predefine="colorList" @change="changePrimary" />
      <SwitchDark /> -->
    </div>
  </div>
</template>

<script lang="ts" setup>
// import SwitchDark from '@/components/SwitchDark/index.vue'
import { DEFAULT_PRIMARY } from '@/config'
import { useTheme } from '@/hooks/useTheme'
import { useGlobalStore } from '@/stores/modules/global'
import { storeToRefs } from 'pinia'

import mittBus from '@/utils/mittBus'
const openDrawer = () => {
  mittBus.emit('openThemeDrawer')
}

let props = defineProps<{
  collapse: boolean
}>()
let emits = defineEmits(['update:collapse'])
let toggle = () => {
  // 需要修改父组件的数据
  emits('update:collapse', !props.collapse)
}

const { changePrimary } = useTheme()

const globalStore = useGlobalStore()
const { primary } = storeToRefs(globalStore)

// 预定义主题颜色
const colorList = [
  DEFAULT_PRIMARY,
  '#daa96e',
  '#0c819f',
  '#409eff',
  '#27ae60',
  '#ff5c93',
  '#e74c3c',
  '#fd726d',
  '#f39c12',
  '#9b59b6'
]
</script>

<style lang="scss" scoped>
.header {
  height: 60px;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* background-color: #001529;
  width: 100%; */
  .theme-item {
    font-size: 14px;
  }
}

svg {
  width: 1em;
  height: 1em;
  /* color: #fff; */
}
</style>
