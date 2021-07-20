import React from 'react'
import { Input, Form, Row, Col } from 'antd'
import { SnippetsOutlined } from '@ant-design/icons'

const ApiToken = (props) => {
  const [form] = Form.useForm()
  const addon_after = () => {
    return (
      <div style={{ cursor: 'pointer' }}>
        <SnippetsOutlined />
      </div>
    )
  }
  return (
    <div style={{ padding: 10 }}>
      <div>
        <h3>API凭证</h3>
        <p>ID 和 Token 用于调用服务台 Open API 鉴权，详情请查看服务台 Open API 文档</p>
      </div>
      <Form form={form} layout='vertical'>
        <Row gutter={24}>
          <Col span={24}>
            <Form.Item label='服务台 ID'>
              <Input placeholder='服务台 ID' addonAfter={addon_after()} />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={24}>
          <Col span={24}>
            <Form.Item label='服务台 Token'>
              <Input placeholder='服务台 Token' addonAfter={addon_after()} />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </div>
  )
}

export default ApiToken
