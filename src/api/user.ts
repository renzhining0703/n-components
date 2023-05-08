import http from '/@/utils/request'
import { ResPage, User } from "/@/api/interface/index";

/**
 * 获取列表数据
 */
// export const getUserList = (pageNum, pagesize, data) => {
//   return request({
//     url: `/user/list/${pageNum}/${pagesize}`,
//     method: 'POST',
//     params: data
//   })
// }

/**
 * @name 用户管理模块
 */
// 获取用户列表
export const getUserList = (params: User.ReqUserParams) => {
  return http.post<ResPage<User.ResUserList>>(`/user/list`, params);
};
