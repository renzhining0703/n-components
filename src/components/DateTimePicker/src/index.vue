<template>
  <el-date-picker
    :value="localValue"
    :type="dateType"
    :shortcuts="shortcuts"
    :range-separator="rangeSeparator"
    :start-placeholder="startPlaceholder"
    :end-placeholder="endPlaceholder"
    :default-time="defaultTime"
    :value-format="valueFormat"
    :disabledDate="disabledDate"
    align="right"
    :size="size"
    :clearable="clearable"
    :editable="editable"
    :popper-class="`hd-date-picker ${popperClass} ${isHideClearBtn ? 'hide-clear' : ''}`"
    @focus="focus"
    @input="handleChange"
  />
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import type { PropType } from 'vue'
import { isEqual } from 'lodash'
import { getShortcuts, ShortcutType, validateCustomDateRange, isDisabledDates } from './service'
import { createTipsElement } from './tips-element'
import { createUuid } from '@/utils'

enum Format {
  DateTime = 'YYYY-MM-DD HH:mm:ss',
  Date = 'YYYY-MM-DD',
  Month = 'YYYY-MM',
  Year = 'YYYY'
}

const props = defineProps({
  value: {
    type: [Array, String] as PropType<string[] | string>,
    default: ''
  },
  type: {
    type: String,
    default: 'datetimerange',
    validator: (val: string) => ['datetimerange', 'daterange', 'monthrange', 'year'].includes(val)
  },
  // 现在支持一年，一个月，2个月，3个月
  shortcutType: {
    type: String as PropType<(typeof ShortcutType)[keyof typeof ShortcutType]>,
    default: 'year'
  },
  size: {
    type: String,
    default: 'mini'
  },
  rangeSeparator: {
    type: String,
    default: '至'
  },
  startPlaceholder: {
    type: String,
    default: '开始时间'
  },
  endPlaceholder: {
    type: String,
    default: '结束时间'
  },
  clearable: {
    type: Boolean,
    default: false
  },
  editable: {
    type: Boolean,
    default: false
  },
  // 是否根据快捷面板时间范围，禁止选择时间
  isDisabledDate: {
    type: Boolean,
    default: false
  },
  disabledDate: {
    type: Function
  },
  // 时间范围禁止时间, year, month 或者任意数字
  disabledDateDaysRange: {
    type: String,
    default: 'year',
    validator: (val: string) => ['year', 'month'].includes(val) || typeof Number(val) === 'number'
  },
  isHideClearBtn: {
    type: Boolean,
    default: true
  },
  tips: String
})
const emits = defineEmits(['input', 'change'])
const localValue = ref(props.value)
const handleChange = (val: string[]) => {
  if (!validateCustomDateRange(props.disabledDateDaysRange, val)) return

  localValue.value = val
  emits('input', val)
  emits('change', val)
}

const defaultTime = ref([new Date(0, 0, 0, 0, 0, 0), new Date(0, 0, 0, 23, 59, 59)])

watch(
  () => props.value!,
  (val: string[] | string) => {
    if (!isEqual(props.value, localValue.value)) {
      localValue.value = props.value
    }
  },
  {
    deep: true
  }
)

const formatMap = new Map([
  ['datetimerange', Format.DateTime],
  ['daterange', Format.Date],
  ['monthrange', Format.Month],
  ['year', Format.Year]
])
const valueFormat = computed(() => formatMap.get(props.type))
const dateType = computed(() => props.type)

const shortcuts = getShortcuts(props.shortcutType, props.type)
// const pickerOptions = {
//   shortcuts,
//   disabledDate: (dateTime: Date) => disabledDate(props.disabledDate, shortcuts, dateTime)
// }

// const disabledDate: (dateTime: Date) => isDisabledDates(props.isDisabledDate, shortcuts, dateTime)

let added = false
const popperClass = ref(`hd-date-picker-${createUuid(6)}`)
const focus = () => {
  props.tips && !added && addFooterTips()
}

const addFooterTips = () => {
  const footerEle = document.querySelector(`.${popperClass.value} .el-picker-panel__footer`)

  if (footerEle) {
    footerEle.classList.add('has-tips')
    const btnEle = document.querySelector(`.${popperClass.value} .el-picker-panel__link-btn`)
    footerEle.insertBefore(createTipsElement(props.tips!), btnEle)
    added = true
  }
}
</script>
<script lang="ts">
export default {
  name: 'HdDateTimePicker'
}
</script>

<style lang="scss">
.hd-date-picker .el-picker-panel__footer.has-tips {
  display: flex;
  justify-content: space-between;

  .footer-tips {
    flex: 1;
    font-size: 14px;
    display: flex;
    align-items: center;

    img {
      width: 20px;
      height: 20px;
      margin: 0 6px;
    }
  }
}
.hd-date-picker.hide-clear {
  .el-picker-panel__footer .el-button--text {
    display: none;
  }
}
.el-date-editor .el-range-separator {
  padding: 0px;
}
</style>
