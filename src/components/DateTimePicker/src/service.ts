import dayjs from 'dayjs'
import { ElMessage } from 'element-plus'

enum DateTimePickerShortcuts {
  Today= 'today',
  LastWeek= 'lastWeek',
  LastMonth= 'lastMonth',
  ThisMonth= 'thisMonth',
  TheLastMonth= 'theLastMonth',
  LastTwoMonths= 'lastTwoMonths',
  LastThreeMonths= 'lastThreeMonths',
  LastYear= 'lastYear'
}

export const dateTimePickerShortcutYear = [
  DateTimePickerShortcuts.Today,
  DateTimePickerShortcuts.LastWeek,
  DateTimePickerShortcuts.LastMonth,
  DateTimePickerShortcuts.ThisMonth,
  DateTimePickerShortcuts.TheLastMonth,
  DateTimePickerShortcuts.LastThreeMonths,
  DateTimePickerShortcuts.LastYear
]
export const dateTimePickerShortcut2Months = [
  DateTimePickerShortcuts.Today,
  DateTimePickerShortcuts.LastWeek,
  DateTimePickerShortcuts.LastMonth,
  DateTimePickerShortcuts.ThisMonth,
  DateTimePickerShortcuts.TheLastMonth,
  DateTimePickerShortcuts.LastTwoMonths
]
export const dateTimePickerShortcut3Months = [
  DateTimePickerShortcuts.Today,
  DateTimePickerShortcuts.LastWeek,
  DateTimePickerShortcuts.LastMonth,
  DateTimePickerShortcuts.ThisMonth,
  DateTimePickerShortcuts.TheLastMonth,
  DateTimePickerShortcuts.LastThreeMonths
]
export const dateTimePickerShortcutMonth = [
  DateTimePickerShortcuts.Today,
  DateTimePickerShortcuts.LastWeek,
  DateTimePickerShortcuts.LastMonth,
  DateTimePickerShortcuts.ThisMonth
]

const DATE_TIME_FORMAT = 'YYYY-MM-DD HH:mm:ss'
const DATE_FORMAT = 'YYYY-MM-DD'
const DATE_MONTH_FORMAT = 'YYYY-MM'
const MOMENT_DAY = 'day'
const MOMENT_DAY_ABBR = 'd'
const MOMENT_MONTH = 'month'
const MOMENT_MONTH_ABBR = 'M'

const defaultEnd = dayjs().endOf(MOMENT_DAY)
const formatTime = (dateFormat: string) => (start: any, end = defaultEnd) =>
  [start.format(dateFormat), end.format(dateFormat)]

export enum ShortcutType {
  Null = 'null',
  Year = 'year',
  Month = 'month',
  '2Months' = '2months',
  '3Months' = '3months'
}

export const getShortcuts = (type: typeof ShortcutType[keyof typeof ShortcutType], dateType: string) => {
  const formatMap = new Map([
    ['datetimerange', DATE_TIME_FORMAT],
    ['daterange', DATE_FORMAT],
    ['monthrange', DATE_MONTH_FORMAT]
  ])
  const dateFormat = formatMap.get(dateType)!
  const allShortcuts = [
    {
      key: DateTimePickerShortcuts.Today,
      text: '今天',
      value: new Date(),
    },
    {
      key: DateTimePickerShortcuts.LastWeek,
      text: '近一周',
      value: () => {
        const start = dayjs().startOf(MOMENT_DAY).subtract(7, MOMENT_DAY_ABBR)
        return formatTime(dateFormat)(start)
      }
    },
    {
      key: DateTimePickerShortcuts.LastMonth,
      text: '近一月',
      value: () => {
        const start = dayjs().startOf(MOMENT_DAY).subtract(1, MOMENT_MONTH_ABBR)
        return formatTime(dateFormat)(start)
      }
    },
    {
      key: DateTimePickerShortcuts.ThisMonth,
      text: '本月',
      value: () => {
        const start = dayjs().startOf(MOMENT_MONTH)
        return formatTime(dateFormat)(start)
      }
    },
    {
      key: DateTimePickerShortcuts.TheLastMonth,
      text: '上月',
      value: () => {
        const start = type === ShortcutType.Month
          ? dayjs().startOf(MOMENT_DAY).subtract(1, MOMENT_MONTH_ABBR)
          : dayjs().startOf(MOMENT_MONTH).subtract(1, MOMENT_MONTH_ABBR)

        const end = dayjs().startOf(MOMENT_DAY).subtract(1, MOMENT_MONTH_ABBR).endOf(MOMENT_MONTH)

        return formatTime(dateFormat)(start, end)
      }
    },
    {
      key: DateTimePickerShortcuts.LastTwoMonths,
      text: '近两月',
      value: () => {
        const start = dayjs().startOf(MOMENT_DAY).subtract(2, MOMENT_MONTH_ABBR)

        return formatTime(dateFormat)(start)
      }
    },
    {
      key: DateTimePickerShortcuts.LastThreeMonths,
      text: '近三月',
      value: () => {
        const start = dayjs().startOf(MOMENT_DAY).subtract(3, MOMENT_MONTH_ABBR)
        return formatTime(dateFormat)(start)
      }
    },
    {
      key: DateTimePickerShortcuts.LastYear,
      text: '近一年',
      value: () => {
        const start = dayjs().startOf(MOMENT_DAY).subtract(12, MOMENT_MONTH_ABBR)

        return formatTime(dateFormat)(start)
      }
    }
  ]

  const shortcutsMap = new Map([
    [ShortcutType.Year, dateTimePickerShortcutYear],
    [ShortcutType['2Months'], dateTimePickerShortcut2Months],
    [ShortcutType['3Months'], dateTimePickerShortcut3Months],
    [ShortcutType.Month, dateTimePickerShortcutMonth]
  ])
  const shortcuts = type === ShortcutType.Null ? null : allShortcuts.filter(i => shortcutsMap.get(type)?.includes(i.key))

  return shortcuts
}

const endTimeStamp = defaultEnd.valueOf()
export const isDisabledDates = (disabled: boolean, shortcuts: ReturnType<typeof getShortcuts>, dateTime: Date) => {
  if (!disabled) {
    return false
  }

  if (!shortcuts) {
    return false
  }

  const targetTimeStamp = dayjs(dateTime).valueOf()
  const lastItem = shortcuts[shortcuts.length - 1]

  if (targetTimeStamp > endTimeStamp) {
    return true
  }

  // 近一个月
  if ([DateTimePickerShortcuts.ThisMonth, DateTimePickerShortcuts.TheLastMonth].includes(lastItem.key)) {
    const startTimeStamp = dayjs().startOf(MOMENT_DAY).subtract(1, MOMENT_MONTH_ABBR).valueOf()

    return targetTimeStamp < startTimeStamp
  }

  // 近2个月
  if ([DateTimePickerShortcuts.LastTwoMonths].includes(lastItem.key)) {
    const startTimeStamp = dayjs().startOf(MOMENT_DAY).subtract(2, MOMENT_MONTH_ABBR).valueOf()

    return targetTimeStamp < startTimeStamp
  }

  // 近3个月
  if ([DateTimePickerShortcuts.LastThreeMonths].includes(lastItem.key)) {
    const startTimeStamp = dayjs().startOf(MOMENT_DAY).subtract(3, MOMENT_MONTH_ABBR).valueOf()

    return targetTimeStamp < startTimeStamp
  }

  // 近一年
  if ([DateTimePickerShortcuts.LastYear].includes(lastItem.key)) {
    const startTimeStamp = dayjs().startOf(MOMENT_DAY).subtract(12, MOMENT_MONTH_ABBR).valueOf()

    return targetTimeStamp < startTimeStamp
  }
}

enum DateCumstomRange {
  Year = 'year',
  Month = 'month',
}

const MAX_YEAR_DAYS = 366
const MAX_MONTH_DAYS = 32
const ONE_DAY_MILLISECOND = 86400000
// 校验时间范围
export const validateCustomDateRange = (range: string, val: string[]) => {
  if (!range || !val) {
    return true
  }

  const [startDate, endDate] = val
  if (range === DateCumstomRange.Year) {
    const diffTime = dayjs(endDate).valueOf() - dayjs(startDate).valueOf()
    const rangeTime = MAX_YEAR_DAYS * ONE_DAY_MILLISECOND

    if (diffTime > rangeTime) {
      ElMessage.warning('时间间隔不能超过一年')
      return false
    }
    return true
  }

  if (range === DateCumstomRange.Month) {
    const diffTime = dayjs(endDate).valueOf() - dayjs(startDate).valueOf()
    const rangeTime = MAX_MONTH_DAYS * ONE_DAY_MILLISECOND

    if (diffTime > rangeTime) {
      ElMessage.warning('时间间隔不能超过一个月')
      return false
    }
    return true
  }

  if (typeof Number(range) === 'number') {
    const diffTime = dayjs(endDate).valueOf() - dayjs(startDate).valueOf()
    const rangeTime = Number(range) * ONE_DAY_MILLISECOND

    if (diffTime > rangeTime) {
      ElMessage.warning(`时间间隔不能超过${range}天`)
      return false
    }
    return true
  }

  return true
}
