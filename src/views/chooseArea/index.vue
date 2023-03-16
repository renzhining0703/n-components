<template>
  <n-choose-area @change="changeArea"></n-choose-area>
</template>

<script lang='ts' setup>
let changeArea = (val: any) => {
  console.log('changeArea',val)
}
</script>

<style lang='scss' scoped>
</style>