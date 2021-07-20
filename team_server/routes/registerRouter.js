const index = require('./index')

const settingUserApi = require('./admin/settingApi/user')
const customerApi = require('./admin/settingApi/customer')
const catagoryApi = require('./admin/settingApi/catagory')
const problemApi = require('./admin/settingApi/problem')

const config = require('../config')

module.exports = function(app) {
  // token 权限拦截
  // app.use(`/api/${config.version}`, index)

  app.use(`/api/${config.version}/auth/data/user`, settingUserApi)
  app.use(`/api/${config.version}/auth/data/customer`, customerApi)
  app.use(`/api/${config.version}/auth/data/problem`, problemApi)
  app.use(`/api/${config.version}/auth/data/catahory`, catagoryApi)
}
