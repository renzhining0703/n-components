<template>
  <div class="table-wrapper">
    <n-pro-table
      ref="proTable"
      title="用户列表"
      :columns="columns"
      :request-api="getTableList"
      :init-param="initParam"
      :buttons="buttons"
      :data-callback="dataCallback"
      rowKey="id"
    />
  </div>
</template>

<script setup lang="tsx" name="useProTable">
import NProTable from '/@/components/ProTable/src/index.vue'
import { useTableConfig } from './useTableConfig'

const { columns, buttons, initParam, dataCallback, proTable, getTableList } = useTableConfig()
</script>
