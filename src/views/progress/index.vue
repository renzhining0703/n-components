<template>
  <div>
    <n-progress isAnimate :percentage="60" :time="1000"></n-progress>
    <br />
    <n-progress isAnimate status="success" :stroke-width="20" :percentage="60"></n-progress>
    <br />
    <n-progress :time="2000" type="circle" isAnimate :percentage="60"></n-progress>
  </div>
</template>

<script lang='ts' setup>
</script>

<style lang='scss' scoped>
</style>