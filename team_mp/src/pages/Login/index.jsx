import React, { useState } from 'react'
import dataSettingApi from '@/apiService/dataSettingApi'
import { Layout, Input, Button, Divider, message, Form } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import '@/style/view-style/login.scss'
import config from '@/config'

const Login = (props) => {
  const [loading, setLoading] = useState(false)

  /**
   * 登录
   * @param {*} e
   */
  const handleSubmit = (e) => {
    setLoading(true)
    props.history.push('/workorder')
    localStorage.setItem('user', JSON.stringify('auth'))
    // dataSettingApi
    //   .login(e)
    //   .then((res) => {
    //     setLoading(false)
    //     message.success(res.data.message)
    //     res.data.data.profile.authority_map = config.authority[res.data.data.profile.authority]
    //     localStorage.setItem('jwt', res.data.data.jwttoken)
    //     localStorage.setItem('user', JSON.stringify('auth'))
    //     localStorage.setItem('user_data', JSON.stringify(res.data.data.profile))

    //     if (res.data.data.profile.authority === 3) {
    //       props.history.push('/usercenter')
    //     } else {
    //       props.history.push('/')
    //     }
    //   })
    //   .catch((err) => {
    //     message.warning(err.message)
    //     setLoading(false)
    //   })
  }

  return (
    <Layout className='login animated fadeIn'>
      <div className='model'>
        <div className='login-form'>
          <h3 style={{ textAlign: 'center' }}>登录</h3>
          <Divider />
          <Form onFinish={handleSubmit}>
            <Form.Item
              name='username'
              rules={[
                {
                  required: true,
                  message: '请输入用户名'
                }
              ]}>
              <Input prefix={<UserOutlined style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder='请输入用户名' />
            </Form.Item>
            <Form.Item
              name='password'
              rules={[
                {
                  required: true,
                  message: '请输入密码'
                }
              ]}>
              <Input prefix={<LockOutlined style={{ color: 'rgba(0,0,0,.25)' }} />} type='password' placeholder='请输入密码' />
            </Form.Item>
            <Form.Item>
              <Button loading={loading} block type='primary' htmlType='submit'>
                登录
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </Layout>
  )
}

export default Login
