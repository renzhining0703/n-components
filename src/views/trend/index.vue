<template>
  <div>
    <el-divider>正常趋势</el-divider>
    <div class="flex">
      <div>
        <n-trend text="营业额"></n-trend>
      </div>
      <div>
        <n-trend text="销售额" type="down"></n-trend>
      </div>
    </div>
        <br />
    <el-divider>颜色翻转</el-divider>
    <div class="flex">
    <div><n-trend text="销售额" reverseColor></n-trend></div>
    <div><n-trend text="营业额" type="down" reverseColor></n-trend></div>
    </div>
    <br />
    <el-divider>自定义图标颜色</el-divider>
    <div class="flex">
      <div>
        <n-trend text="营业额" upIconColor="blue"></n-trend>
      </div>
      <div>
        <n-trend text="销售额" type="down" downIconColor="#123456"></n-trend>
      </div>
    </div>

    <br />
    <el-divider>自定义文字颜色</el-divider>
    <div class="flex">
    <div><n-trend text="营业额" upTextColor="blue"></n-trend></div>
    <div><n-trend text="销售额" type="down" downTextColor="yellow"></n-trend></div>
    </div>
    <br />
    <el-divider>自定义图标</el-divider>
    <div class="flex">
    <div><n-trend upIcon="CaretTop">营业额</n-trend></div>
    <div><n-trend type="down" downIcon="CaretBottom">销售额</n-trend></div>
  </div>
   </div>
</template>

<script lang='ts' setup>
</script>

<style lang='scss' scoped>
.flex {
  display: flex;
  div {
    margin-right: 10px;
  }
}
</style>