<template>
  <el-config-provider :locale="locale">
    <router-view></router-view>
  </el-config-provider>
  <ThemeDrawer />
</template>
<script setup lang="ts">
import { computed } from 'vue'
import { ElConfigProvider } from 'element-plus'
import { useTheme } from '@/hooks/useTheme'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import ThemeDrawer from '@/views/ThemeDrawer/index.vue'

const { initTheme } = useTheme()
initTheme()

// element language
const locale = computed(() => {
  return zhCn
})
</script>

<style lang="scss">
@import './styles/base';
@import './styles/ui';
.notification-popper-class {
  padding: 0 !important;
}
</style>
