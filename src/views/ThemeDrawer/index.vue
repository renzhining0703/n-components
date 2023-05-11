<template>
  <el-drawer v-model="drawerVisible" title="布局设置" size="300px">
    <!-- 全局主题 -->
    <el-divider class="divider" content-position="center"> 全局主题 </el-divider>
    <div class="theme-item">
      <span>主题颜色</span>
      <el-color-picker v-model="primary" :predefine="colorList" @change="changePrimary" />
    </div>
    <div class="theme-item">
      <span>暗黑模式</span>
      <SwitchDark />
    </div>
    <div class="theme-item">
      <span>灰色模式</span>
      <el-switch v-model="isGrey" @change="changeGreyOrWeak('grey', !!$event)" />
    </div>
    <div class="theme-item">
      <span>色弱模式</span>
      <el-switch v-model="isWeak" @change="changeGreyOrWeak('weak', !!$event)" />
    </div>
    <div class="theme-item mb40">
      <span>
        侧边栏反转色
        <el-tooltip effect="dark" content="该属性目前只在纵向布局模式下生效" placement="top">
          <el-icon><QuestionFilled /></el-icon>
        </el-tooltip>
      </span>
      <el-switch
        v-model="asideInverted"
        :disabled="layout !== 'vertical'"
        @change="setAsideTheme"
      />
    </div>
  </el-drawer>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useTheme } from '@/hooks/useTheme'
import { useGlobalStore } from '@/stores/modules/global'
import { DEFAULT_PRIMARY } from '@/config'
import mittBus from '@/utils/mittBus'
import SwitchDark from '@/components/SwitchDark/index.vue'

const { changePrimary, changeGreyOrWeak, setAsideTheme } = useTheme()

const globalStore = useGlobalStore()
const { layout, primary, isGrey, isWeak, asideInverted } = storeToRefs(globalStore)

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

// 打开主题设置
const drawerVisible = ref(false)
mittBus.on('openThemeDrawer', () => {
  console.log('haha')
  return (drawerVisible.value = true)
})
</script>

<style scoped lang="scss">
@import './index.scss';
</style>
