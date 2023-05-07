<template>
  <n-menu :collapse="collapse" :data="data" router :defaultActive="$route.path"></n-menu>
</template>

<script lang='ts' setup>
let props = defineProps<{
  collapse: boolean
}>()

let data = [
  {
    icon: 'HomeFilled',
    name: '首页',
    index: '/'
  },
  {
    icon: 'Box',
    name: '节流按钮',
    index: '/button'
  },
  {
    icon: 'IceCreamRound',
    name: '获取验证码按钮',
    index: '/time-button'
  },
  {
    icon: 'Van',
    name: '图标选择器',
    index: '/chooseIcon'
  },
  {
    icon: 'Menu',
    name: '导航菜单', 
    index: '/menu'
  },
  {
    icon: 'DArrowRight',
    name: '进度条',
    index: '/progress'
  },
  // {
  //   icon: 'Setting',
  //   name: '表单',
  //   index: '/form'
  // },
  {
    icon: 'ShoppingBag',
    name: '表格',
    index: '/table'
  }
]
</script>

<style lang='scss' scoped></style>