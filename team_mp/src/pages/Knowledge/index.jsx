import React, { useState, useEffect } from 'react'
import { ExportOutlined, DownOutlined } from '@ant-design/icons'
import { Tabs, Table, Button, Row, Col, Dropdown, Menu, Collapse } from 'antd'

import Classification from './Classification'

const { TabPane } = Tabs
const { Panel } = Collapse

const columns = [
  {
    title: '问题',
    dataIndex: 'problem',
    key: 'problem',
    align: 'left'
  },
  {
    title: '分类',
    dataIndex: 'sort',
    key: 'sort',
    align: 'left'
  },
  {
    title: '关键词',
    dataIndex: 'keyword',
    key: 'keyword',
    align: 'left'
  },
  {
    title: '更新时间',
    dataIndex: 'updateTime',
    key: 'updateTime',
    align: 'left'
  }
]

const Knowledge = (props) => {
  // 添加
  const [visible, setVisible] = useState(false)

  const menu = () => {
    return (
      <Menu>
        <Menu.Item>单个问题</Menu.Item>
        <Menu.Item>批量添加</Menu.Item>
      </Menu>
    )
  }

  const renderRightCompnent = () => {
    return (
      <Row>
        <Dropdown overlay={menu}>
          <Button>
            添加问题
            <DownOutlined />
          </Button>
        </Dropdown>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Button icon={<ExportOutlined />}>导出</Button>
      </Row>
    )
  }

  return (
    <div className='settings-container'>
      开发中
      {/* <Tabs animated style={{ background: '#fff', padding: 10 }} defaultActiveKey='1' tabBarExtraContent={renderRightCompnent()}>
        <TabPane tab='中文（默认）' key='1'>
          <Row gutter={24}>
            <Col span={5}>
              <Classification visible={visible} setVisible={setVisible} />
            </Col>
            <Col span={19}>
              <Table dataSource={[]} columns={columns} />
            </Col>
          </Row>
        </TabPane>
        <TabPane tab='英文' key='2'>
          <Row gutter={24}>
            <Col span={5}>18</Col>
            <Col span={19}>
              <Table dataSource={[]} columns={columns} />
            </Col>
          </Row>
        </TabPane>
      </Tabs> */}
    </div>
  )
}

export default React.memo(Knowledge)
