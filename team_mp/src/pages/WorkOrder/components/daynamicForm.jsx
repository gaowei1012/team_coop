import React from 'react'
import { Form, Input, Row, Col } from 'antd'

const DaynamicForm = (props) => {
  const form = Form.useForm()

  return (
    <Form layout='vertical' form={form}>
      <Row gutter={24}>
        <Col span={4}>
          <Form.Item label='用户'>
            <Input />
          </Form.Item>
        </Col>
        <Col span={4}>
          <Form.Item label='状态'>
            <Input />
          </Form.Item>
        </Col>
        <Col span={4}>
          <Form.Item label='用户满意度'>
            <Input />
          </Form.Item>
        </Col>
        <Col span={4}>
          <Form.Item label='语言'>
            <Input />
          </Form.Item>
        </Col>
        <Col span={4}>
          <Form.Item label='城市'>
            <Input />
          </Form.Item>
        </Col>
        <Col span={4}>
          <span>清除</span>
        </Col>
      </Row>
      <Row gutter={20}>
        <Col span={4}>
          <Form.Item label='渠道'>
            <Input />
          </Form.Item>
        </Col>
        <Col span={4}>
          <Form.Item label='标签'>
            <Input />
          </Form.Item>
        </Col>
        <Col span={4}>
          <Form.Item label='日期范围'>
            <Input />
          </Form.Item>
        </Col>
      </Row>
    </Form>
  )
}

export default DaynamicForm
