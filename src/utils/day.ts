// import day, { ConfigType } from 'dayjs'
// import isLeapYear from 'dayjs/plugin/isLeapYear'
// import relativeTime from 'dayjs/plugin/relativeTime'
// import 'dayjs/locale/zh-cn'
//
// const dayJsPlugin = [ isLeapYear, relativeTime ]
//
// dayJsPlugin.forEach(plugin => day.extend(plugin))
//
// export class DayJsUtils {
//     // 格式化日期
//     static format(date: ConfigType = new Date(), dateFormat: DateFormat = 'YYYY-MM-DD') {
//         return day(date).format(dateFormat)
//     }
//
//     // 格式化当前日期
//     static formatCurrent(dateFormat: DateFormat = 'YYYY-MM-DD') {
//         return day(new Date()).format(dateFormat)
//     }
//
//     // 返回现在到当前实例的相对时间
//     static fromNow(date?: ConfigType, noSuffix?: boolean) {
//         return day(date).fromNow(noSuffix)
//     }
//
//     // 返回 X 到当前实例的相对时间
//     static from(fromDate: ConfigType, date: ConfigType, noSuffix?: boolean) {
//         return day(date).from(fromDate, noSuffix)
//     }
//
//     // 返回当前实例到现在的相对时间
//     static toNow(date?: ConfigType, noSuffix?: boolean) {
//         return day(date).toNow(noSuffix)
//     }
//
//     // 返回当前实例到 X 的相对时间
//     static to(toDate: ConfigType, date: ConfigType, noSuffix?: boolean) {
//         return day(date).to(toDate, noSuffix)
//     }
//
//     // 返回指定单位下两个日期时间之间的差异
//     static diff(date1: ConfigType, date2: ConfigType, unit?: day.QUnitType, float?: boolean) {
//         return day(date1).diff(date2, unit, float)
//     }
// }
//
// export default day
