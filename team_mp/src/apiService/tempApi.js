import config from '../config'
import { request } from './request'
import domain from './deployENV'

const apiPath = domain + config.apiModulePath.dataSettingsPath

export default {
  // -------------------  引导页 --------------------
  /**
   * 引导页
   * @param {*} data
   */
  post_basic_tempapp(data, token) {
    return request(apiPath + 'tempapp/nextstep', 'POST', data, token)
  },

  /**
   * 完成提交
   * @param {*} token
   */
  post_submitform(data, token) {
    return request(apiPath + 'tempapp/submitform', 'POST', data, token)
  },

  /**
   * 获取该用户创建中的应用
   * @param {*} token
   */
  get_processing_guide(token) {
    return request(apiPath + 'tempapp/processingguide', 'GET', {}, token)
  },

  /**
   * 临时表中删除该用户创建中的应用
   * @param {*} token
   */
  delete_processing_guide(id, token) {
    return request(apiPath + 'tempapp/processingguide/' + id, 'DELETE', {}, token)
  }
}
