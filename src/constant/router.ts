// 路由常量
export default class RouterConstant {
  // 授权路径
  static AUTH_ROUTE = '/auth'

  // 登录路径
  static LOGIN_PATH = `${this.AUTH_ROUTE}/pwdLogin`

  // 首页路径
  static HOME_PATH = '/home'

  static NOT_FOUND_TITLE = '404'

  // 基础布局菜单容器的路由后缀
  static CONTAINER_SUFFIX = '-container'
}
