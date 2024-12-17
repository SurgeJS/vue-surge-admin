// 正则工具类
class RegUtils {
  // 匹配全局数字
  static MATCH_GLOBAL_DIGITS = /^\d+$/g

  // 匹配全局非数字
  static MATCH_GLOBAL_NON_DIGITS = /\D+/g

  // 匹配URL
  static MATCH_URL = /^(((ht|f)tps?):\/\/)?([^!@#$%^&*?.\s-]([^!@#$%^&*?.\s]{1,64})?\.)+[a-z]{2,6}\/?/

  // 匹配 http 或 https 开头的 URL
  static MATCH_TEXT_URL = /(https?:\/\/\S+)/g

  // 匹配邮箱
  static MATCH_EMAIL = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\])|(([a-z\-0-9]+\.)+[a-z]{2,}))$/i

  // 匹配身份证号(2代,18位数字),最后一位是校验位,可能为数字或字符X
  static MATCH_ID_CARD = /^\d{6}((((((19|20)\d{2})(0[13-9]|1[012])(0[1-9]|[12]\d|30))|(((19|20)\d{2})(0[13578]|1[02])31)|((19|20)\d{2})02(0[1-9]|1\d|2[0-8])|((((19|20)([13579][26]|[2468][048]|0[48]))|(2000))0229))\d{3})|((((\d{2})(0[13-9]|1[012])(0[1-9]|[12]\d|30))|((\d{2})(0[13578]|1[02])31)|((\d{2})02(0[1-9]|1\d|2[0-8]))|(([13579][26]|[2468][048]|0[048])0229))\d{2}))([\dX])$/i

  // 匹配手机号(mobile phone)中国(严谨), 根据工信部2019年最新公布的手机号段
  static MATCH_PHONE = /^(?:(?:\+|00)86)?1(?:3\d|4[5-79]|5[0-35-9]|6[5-7]|7[0-8]|8\d|9[189])\d{8}$/

  // 匹配座机
  static MATCH_LANDLINE = /^(\+86|0)?(10|2\d|[3-9]\d{2})-(\d{7,8})(-\d{1,6})?$/

  // 匹配带有Params的路径
  static MATCH_PARAMS_PATH = /\/:[^/?]+/g

  // 提取数字
  static extractNumbers = (str: string) => Number(str.replace(this.MATCH_GLOBAL_NON_DIGITS, ''))

  // 从字符串中提取Url
  static extractUrl = (str: string) => this.extractUrls(str)[0]

  // 从字符串中提取多个Url
  static extractUrls = (str: string) => str.match(this.MATCH_TEXT_URL) || []

  // 在路径中去除params、query参数
  static removePathParams = (path: string) => {
    // 去除路径中的参数
    const cleanPath = path.replace(this.MATCH_PARAMS_PATH, '')

    // 去除查询参数
    const basePath = cleanPath.split('?')[0]

    // 去除多余的斜杠
    return basePath.replace(/\/{2,}/g, '/').replace(/\/$/, '')
  }
}

export default RegUtils
