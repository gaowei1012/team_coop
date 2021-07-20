const config = {
  dataServer: {
    host: '127.0.0.1',
    // host: '192.168.3.18',
    port: '5080'
  },
  dataServerDev: {
    host: '39.99.241.232',
    port: '5080'
  },
  apiModulePath: {
    dataSettingsPath: '/api/v1.0.0/auth/data/',
    authPath: '/api/v1.0.0/'
  },
  dataApi: {
    app: 'app/'
  },
  auth_scope_code: '109090909',
  period: ['每天', '工作日', '周末', '星期一', '星期二', '星期三', '星期四', '星期五'],
  catagoriesTag: ['magenta', 'red', 'volcano', 'orange', 'gold', 'lime', 'green', 'cyan', 'blue', 'geekblue', 'purple'],
  formItemLayout: {
    labelCol: { span: 3 },
    wrapperCol: { span: 22, offset: 1 }
  },
  smalFormItemLayout: {
    labelCol: { span: 4 },
    wrapperCol: { span: 20, offset: 1 }
  },
  maxFormItemLayout: {
    labelCol: { span: 6 },
    wrapperCol: { span: 18, offset: 1 }
  },
  rule_message: '数据格式不正确'
}

module.exports = config
