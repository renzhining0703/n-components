import request from '/@/utils/request'

/**
 * 获取列表数据
 */
export const getUserList = (pageNum, pagesize, data) => {
  return request({
    url: `/user/list/${pageNum}/${pagesize}`,
    method: 'POST',
    params: data
  })
}
