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
      <!-- 通过 props + Header 来渲染表头 titleHeader -->
      <template #titleHeader="scope">
        <span @click="ElMessage.success('我是通过作用域插槽渲染的表头')" style="color: #27b57d">
          {{ scope.row.label }}
        </span>
      </template>
    </n-pro-table>
  </div>
</template>

<script setup lang="tsx" name="useProTable">
// import { ColumnProps } from '/@/components/ProTable/interface'
// import { useHandleData } from '/@/hooks/useHandleData'
// import { useDownload } from '/@/hooks/useDownload'
import { ElMessage } from 'element-plus'
import NProTable from '/@/components/ProTable/src/index.vue'
import { getArticleList } from '/@/api/article.js'
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
  return getArticleList(newParams)
}
</script>
