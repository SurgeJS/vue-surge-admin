import type {
  DialogProviderInst,
  LoadingBarProviderInst,
  MessageProviderInst,
  NotificationProviderInst,
} from 'naive-ui'

declare global {

  export interface Window {
    $loadingBar: LoadingBarProviderInst

    $dialog: DialogProviderInst

    $message: MessageProviderInst

    $notification: NotificationProviderInst
  }

  // 日期时间格式化
  type DateFormat =
    'YY' // 两位数的年份：18
    | 'YYYY' // 四位数的年份：2018
    | 'M' // 月份，从 1 开始： 1-12
    | 'MM' // 月份，两位数： 01-12
    | 'MMM' // 缩写的月份名称： 8月
    | 'MMMM' // 完整的月份名称： 八月
    | 'D' // 月份里的一天： 1-31
    | 'DD' // 月份里的一天，两位数：01-31
    | 'd' // 一周中的一天，星期天是 0：0-6
    | 'dd' // 最简写的星期几：二
    | 'ddd' // 简写的星期几：周二
    | 'dddd' // 星期几：星期二
    | 'H' // 小时：0-23
    | 'HH' // 小时，两位数：00-23
    | 'h' // 小时, 12 小时制：1-12
    | 'hh' // 小时, 12 小时制, 两位数：01-12
    | 'm' // 分钟：0-59
    | 'mm' // 分钟，两位数：00-59
    | 's' // 秒：0-59
    | 'ss' // 秒 两位数：00-59
    | 'SSS' // 毫秒 三位数：000-999
    | 'Z' // UTC 的偏移量，±HH:mm：+05:00
    | 'ZZ' // UTC 的偏移量，±HHmm：+0500
    | 'Q' // 季度：1-4
    | 'Do' // 带序数词的月份里的一天：27日
    | 'k' // 时，由 1 开始：1-24
    | 'kk' // 时，由 1 开始，两位数：01-24
    | 'X' // 秒为单位的 Unix 时间戳：1360013296
    | 'x' // 毫秒单位的 Unix 时间戳：1360013296123
    | 'YYYY-MM' // 年月：2024-08
    | 'YYYY-MM-DD' // 年月日：2024-08-01
    | 'YYYY-MM-DD HH' // 年月日小时：2024-08-01 12
    | 'YYYY-MM-DD HH:mm' // 年月日小时分钟：2024-08-01 12:15
    | 'YYYY-MM-DD HH:mm:ss' // 年月日小时分钟秒：2024-08-01 12:15:00
    | 'HH:mm' // 小时分钟：12:15
    | 'HH:mm:ss' // 小时分钟：12:15:00
    | string
}
