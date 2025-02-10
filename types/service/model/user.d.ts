// 用户模型
import type { RoleEnum } from '@/enums/auth'

declare global {
  namespace UserModel {
    // 密码登录参数
    interface PasswordLoginParams {
      // 用户名
      username: string
      // 密码
      password: string
    }

    // 密码登录模型
    interface PasswordLoginModel {
      // token
      token: string
    }

    // 用户详情模型
    interface UserDetailsModel {
      // 权限
      permissions: string[]
      // 角色
      roles: RoleEnum[]
      // 用户信息
      userinfo: {
        userId: number
        // 用户名
        username: string
        // 头像
        avatar: string
      }
    }

    // 路由模型
    type UserRoutesModel = AppRouteRecordRaw[]
  }
}
