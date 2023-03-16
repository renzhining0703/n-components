<template>
  <div>
    <n-notification :value="50"></n-notification>
    <br />
    <br />
    <n-notification :value="100" :max="99"></n-notification>
    <br />
    <br />
    <n-notification :value="50" isDot></n-notification>
    <br />
    <br />
    <n-notification on="ChatRound" :value="50"></n-notification>
    <br />
    <br />
    <n-notification :value="50">
      <template #default>
        <n-list @clickItem="clickItem" @clickAction="clickAction" :list="list" :actions="actions"></n-list>
      </template>
    </n-notification>
  </div>
</template>

<script lang='ts' setup>
import { list, actions } from './data'

let clickItem = (val: any) => {
  console.log(val)
}
let clickAction = (val: any) => {
  console.log(val)
}
</script>

<style lang='scss' scoped>
</style>