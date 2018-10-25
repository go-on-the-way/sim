/**
 * Author: 欧阳建龙
 * Information：登录用户数据模型
 * Date: 2018/07/05/14:22:14
 */
export class Account {
  accountId: string; // 用户Id
  tenantId: string; // 租户Id
  accountName: string; // 登录名
  password: string; // 登录密码
  authCode: string; // 验证码
  rememberMe: boolean; // 保存密码
  userState: boolean; // 用户状态，1可用，0不可用
}
