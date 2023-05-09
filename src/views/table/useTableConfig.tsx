import { ElMessage } from 'element-plus'
import { ColumnProps } from '/@/components/ProTable/interface'
import { ref, reactive } from 'vue'
import { getUserList } from '/@/api/user'
import { User } from '/@/api/interface/index'
import DateTimePicker from '../../components/DateTimePicker'

export function useTableConfig() {
  // 表格配置项
  const columns: ColumnProps<User.ResUserList>[] = [
    { type: 'selection', fixed: 'left', width: 55 },
    { type: 'index', label: '序号', width: 80 },
    {
      prop: 'username',
      label: '用户姓名',
      search: {
        el: 'input',
        render: (form: any) => {
          return (
            <el-form-item label="用户姓名 :">
              <el-input vModel_trim={form.username} placeholder="我是render渲染出来的" />
            </el-form-item>
          )
        }
      },
      render: (scope: any) => {
        return (
          <el-button
            type="primary"
            link
            onClick={() => ElMessage.success('我是通过 render 渲染的内容')}
          >
            {scope.row.username}
          </el-button>
        )
      }
    },
    {
      prop: 'gender',
      label: '性别',
      width: 80,
      // 字典数据
      // enum: genderType,
      // 字典请求不带参数
      // enum: getUserGender,
      enum: [
        { codeName: '全部', codeId: 0 },
        { codeName: '男', codeId: 1 },
        { codeName: '女', codeId: 2 }
      ],
      // 字典请求携带参数
      // enum: () => getUserGender({ id: 1 }),
      search: { el: 'select', props: { filterable: true }, defaultValue: 0 },
      fieldNames: { label: 'codeName', value: 'codeId' }
    },
    // 多级 prop
    { prop: 'age', label: '年龄', width: 80, search: { el: 'input' } },
    { prop: 'idCard', label: '身份证号', search: { el: 'input' } },
    { prop: 'email', label: '邮箱' },
    { prop: 'address', label: '居住地址' },
    {
      prop: 'status',
      label: '用户状态',
      // enum: getUserStatus,
      enum: [
        { userLabel: '启用', userStatus: 1 },
        { userLabel: '禁用', userStatus: 0 }
      ],
      search: { el: 'tree-select', props: { filterable: true } },
      fieldNames: { label: 'userLabel', value: 'userStatus' },
      render: (scope: any) => {
        return (
          <el-tag type={scope.row.status ? 'success' : 'danger'}>
            {scope.row.status ? '启用' : '禁用'}
          </el-tag>
        )
      }
    },
    {
      prop: 'createTime',
      label: '创建时间',
      headerRender: (row: ColumnProps) => {
        return (
          <span
            style={{ color: '#27b57d' }}
            onClick={() => {
              ElMessage.success('我是通过 render 渲染的表头')
            }}
          >
            {row.label}
          </span>
        )
      },
      width: 180,
      search: {
        el: 'date-picker',
        span: 2,
        props: { type: 'datetimerange', valueFormat: 'YYYY-MM-DD HH:mm:ss' },
        render: (form: any) => {
          return (
            <el-form-item label="创建时间 :">
              <DateTimePicker vModel={form.createTime} type="datetimerange" />
            </el-form-item>
          )
        }
        // defaultValue: ['2023-01-01 11:35:00', '2023-12-30 11:35:00']
      }
    }
    // { prop: "operation", label: "操作", fixed: "right", width: 330 }
  ]

  /** buttons */
  const createButtons = () => {
    return [
      {
        label: '新增',
        icon: 'CirclePlus',
        handleClick: (scope: any) => {
          ElMessage.success('点击了新增哦~')
        }
      },
      {
        label: '修改',
        icon: 'CirclePlus',
        handleClick: (scope: any) => {
          console.log('scope', scope)
          const { selectedListIds, selectedList } = scope
          if (!selectedListIds.length) return ElMessage.error('请至少选择一条数据!')
          if (selectedListIds.length > 1) return ElMessage.error('只能选择一条数据!')
          ElMessage.warning(`选择的用户姓名为${selectedList[0].username}`)
        }
      },
      {
        label: '删除',
        icon: 'CirclePlus',
        handleClick: () => {
          ElMessage.success('点击了删除哦~')
        }
      },
      {
        label: '启用',
        icon: 'CirclePlus',
        handleClick: () => {
          ElMessage.success('点击了启用哦~')
        }
      },
      {
        label: '停用',
        type: 'primary',
        icon: 'CirclePlus',
        handleClick: () => {
          ElMessage.success('点击了停用哦~')
        }
      }
    ]
  }
  const buttons = createButtons()

  // 获取 ProTable 元素，调用其获取刷新数据方法（还能获取到当前查询参数，方便导出携带参数）
  const proTableRef = ref()

  // 如果表格需要初始化请求参数，直接定义传给 ProTable(之后每次请求都会自动带上该参数，此参数更改之后也会一直带上，改变此参数会自动刷新表格数据)
  const initParam = reactive({ type: 1 })
  // dataCallback 是对于返回的表格数据做处理，如果你后台返回的数据不是 list && total && pageNum && pageSize 这些字段，那么你可以在这里进行处理成这些字段
  // 或者直接去 hooks/useTable.ts 文件中把字段改为你后端对应的就行
  const dataCallback = (data: any) => {
    console.log('dataCallback', data)
    return {
      list: data.list,
      total: data.total,
      pageNum: data.pageNum,
      pageSize: data.pageSize
    }
  }

  /**
   * 获取列表数据方法
   * @param params 请求参数
   */
  const getTableList = (params: any) => {
    const newParams = JSON.parse(JSON.stringify(params))
    return getUserList(newParams)
  }

  return { columns, buttons, initParam, dataCallback, proTableRef, getTableList }
}
