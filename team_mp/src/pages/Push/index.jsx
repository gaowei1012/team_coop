import React, { useState } from 'react'
import { Row, Col, Button } from 'antd'
import { PlusOutlined } from '@ant-design/icons'

const rowStyle = {
  margin: 10
}

const Push = (props) => {
  const [disabled, setDisabled] = useState(false)
  return (
    <div>
      <h3 style={{ margin: 20 }}>推送列表</h3>
      <Row style={rowStyle} gutter={24} justify='space-between'>
        <Col span={18}>
          <span style={{ display: 'inline-block', fontSize: 14 }}>管理员可以向可用范围内的用户群发通知，以告知业务相关消息或推广服务台。更多推广妙招，可查看手把手带你推广服务台。</span>
        </Col>
        <Col>
          <Button disabled={disabled} icon={<PlusOutlined />}>
            创建推送
          </Button>
        </Col>
      </Row>
    </div>
  )
}

export default React.memo(Push)
