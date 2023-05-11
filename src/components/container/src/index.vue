<template>
  <el-container class="layout">
    <el-aside width="auto">
      <!-- <div class="header-lf" v-if="!isCollapse">
        <div class="logo flx-center">
          <img class="logo-img" src="@/assets/images/logo.svg" alt="logo" />
          <span class="logo-text">n-components</span>
        </div>
      </div> -->
      <nav-side :collapse="isCollapse"></nav-side>
    </el-aside>
    <el-container>
      <el-header>
        <nav-header v-model:collapse="isCollapse"></nav-header>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import NavHeader from './navHeader/index.vue'
import NavSide from './navSide/index.vue'

let isCollapse = ref(false)
</script>

<style lang="scss" scoped>
.el-header {
  padding: 0;
  border-bottom: 1px solid #eee;
}
.header-lf {
  display: flex;
  align-items: center;
  overflow: hidden;
  white-space: nowrap;
  .logo {
    flex-shrink: 0;
    /* width: 210px; */
    margin-right: 16px;
    .logo-img {
      width: 28px;
      object-fit: contain;
      margin-right: 6px;
    }
    .logo-text {
      font-size: 21.5px;
      font-weight: bold;
      color: #333;
      white-space: nowrap;
    }
  }
  .tool-bar-lf {
    .collapse-icon {
      color: #e5eaf3;
    }
    .el-breadcrumb__inner.is-link {
      color: #e5eaf3;
      &:hover {
        color: var(--el-color-primary);
      }
    }
    .el-breadcrumb__item:last-child .el-breadcrumb__inner,
    .el-breadcrumb__item:last-child .el-breadcrumb__inner:hover {
      color: #cfd3dc;
    }
  }
}
</style>
