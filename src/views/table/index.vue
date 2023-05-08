<template>
  <div class="table-box">
    <n-pro-table
      ref="proTable"
      title="用户列表"
      :columns="columns"
      :request-api="getTableList"
      :init-param="initParam"
      :buttons="buttons"
      :data-callback="dataCallback"
      rowKey="_id"
    >
    </n-pro-table>
  </div>
</template>

<script setup lang="tsx" name="useProTable">
import NProTable from '/@/components/ProTable/src/index.vue'
import { getUserList } from '/@/api/user.js'
import { useTableConfig } from './useTableConfig'

const { columns, buttons, initParam, dataCallback, proTable } = useTableConfig()

/**
 * 获取列表数据方法
 *
 * 如果你想在请求之前对当前请求参数做一些操作，可以自定义如下函数：params 为当前所有的请求参数（包括分页），最后返回请求列表接口
 * 默认不做操作就直接在 ProTable 组件上绑定	:requestApi="getUserList"
 * @param params 请求参数
 */
const getTableList = (params: any) => {
  console.log('params', params)
  let newParams = JSON.parse(JSON.stringify(params))
  return getUserList(newParams)
}
</script>
