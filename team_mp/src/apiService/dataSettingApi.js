import config from '../config'
import { request } from './request'
import domain from './deployENV'

const apiPath = domain + config.apiModulePath.dataSettingsPath

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  // ----------------------------- 客服管理 ---------------------------

  /**
   * 添加客服
   * @param {*} data
   * @returns
   */
  add_customer(data, token) {
    return request(apiPath + 'customer', 'POST', data, token)
  },

  /**
   * 获取客服列表
   * @param {*} token
   * @returns
   */
  get_customer(token) {
    return request(apiPath + 'customer', 'GET', {}, token)
  },

  // 删除客服
  del_customer(customer_id, token) {
    return request(apiPath + 'customer/' + customer_id, 'DELETE', {}, token)
  },

  // 更新客服
  put_customer(customer_id, data, token) {
    return request(apiPath + 'customer/' + customer_id, 'PUT', data, token)
  }
}
