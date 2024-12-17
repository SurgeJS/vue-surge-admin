// 响应结构
export function r(code: number, msg: string, data: any): Result {
  return {
    code,
    msg,
    result: data,
  }
}

// 操作成功
export const rSuccess = data => r(200, '操作成功', data)

// 操作失败
export const rFailure = data => r(500, '操作失败', data)
