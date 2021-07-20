import React, { useState } from 'react'
import { ReloadOutlined } from '@ant-design/icons'
import { Table, Form, Row, Col, Input, Select, DatePicker } from 'antd'
import FilterCondition from '../components/filterCondition'
import locale from 'antd/es/date-picker/locale/zh_CN'
import 'moment/locale/zh-cn'

const rowStyle = {
  paddingLeft: 10
}
const rowColStyle = {
  marginTop: 10,
  marginBottom: 10,
  marginLeft: 10
}
const { Option } = Select
const { RangePicker } = DatePicker

const Robot = (props) => {
  const { is_robot_show } = props
  const [content, setContent] = useState([])
  const [form] = Form.useForm()
  const columns = [
    {
      title: '对话',
      dataIndex: '',
      key: '',
      align: 'left',
      width: 200
    },
    {
      title: '客服',
      dataIndex: '',
      key: '',
      align: 'left',
      width: 200
    },
    {
      title: '状态',
      dataIndex: '',
      key: '',
      align: 'left',
      width: 200
    },
    {
      title: '用户满意度',
      dataIndex: '',
      key: '',
      align: 'left',
      width: 200
    },
    {
      title: '语言',
      dataIndex: '',
      key: '',
      align: 'left',
      width: 200
    },
    {
      title: '城市',
      dataIndex: '',
      key: '',
      align: 'left',
      width: 200
    },
    {
      title: '部门',
      dataIndex: '',
      key: '',
      align: 'left',
      width: 200
    },
    {
      title: '渠道',
      dataIndex: '',
      key: '',
      align: 'left',
      width: 200
    },
    {
      title: '标签',
      dataIndex: '',
      key: '',
      align: 'left',
      width: 200
    },
    {
      title: '创建时间',
      dataIndex: '',
      key: '',
      align: 'left',
      width: 200
    },
    {
      title: '更新时间',
      dataIndex: '',
      key: '',
      align: 'left',
      width: 200
    },
    {
      title: '结束时间',
      dataIndex: '',
      key: '',
      align: 'left',
      width: 200
    },
    {
      title: '结束人',
      dataIndex: '',
      key: '',
      align: 'left',
      width: 200
    }
  ]
  const clear_content = () => {
    form.resetFields()
  }
  const get_robot_value = (changeValue, allValues) => {
    console.log('changeValue=====>>>', changeValue)
    if (changeValue.username) {
      content.push({
        label: '用户',
        text: changeValue.username
      })
      setContent([...content])
    }
  }

  const filter_condition = (idx) => {
    const fl = [...content]
    fl.splice(idx, 1)
    setContent([...fl])
  }

  const daynamic_form = () => {
    return (
      <Form layout='vertical' style={{ paddingTop: 10 }} form={form} onValuesChange={get_robot_value}>
        <Row style={rowStyle} gutter={24}>
          <Col span={4}>
            <Form.Item label='用户' name='username'>
              <Input allowClear placeholder='请输入用户姓名' />
            </Form.Item>
          </Col>
          <Col span={4}>
            <Form.Item label='客服' name='customer'>
              <Input allowClear placeholder='请输入客服姓名' />
            </Form.Item>
          </Col>
          <Col span={4}>
            <Form.Item label='状态' name='status'>
              <Select allowClear placeholder='请选择状态'>
                <Option>全部</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={4}>
            <Form.Item label='用户满意度' name='satisfaction'>
              <Select allowClear placeholder='请选择用户满意度'>
                <Option>全部</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={4}>
            <Form.Item label='语言' name='language'>
              <Input allowClear placeholder='搜索 语言' />
            </Form.Item>
          </Col>
          <Col span={4}>
            <div style={{ marginLeft: 80, cursor: 'pointer' }} onClick={clear_content}>
              <span />
              <React.Fragment>
                <ReloadOutlined style={{ marginRight: 6 }} />
                <span>清除</span>
              </React.Fragment>
            </div>
          </Col>
        </Row>
        <Row style={rowStyle} gutter={20}>
          <Col span={4}>
            <Form.Item label='城市' name='city'>
              <Input allowClear placeholder='搜索 城市' />
            </Form.Item>
          </Col>
          <Col span={4}>
            <Form.Item label='渠道' name='channel'>
              <Select allowClear placeholder='请选择渠道'>
                <Option>全部</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={4}>
            <Form.Item label='标签' name='label'>
              <Input allowClear placeholder='搜索 标签' />
            </Form.Item>
          </Col>
          <Col span={4}>
            <Form.Item label='日期范围' name='date_range'>
              <RangePicker allowClear locale={locale} />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    )
  }
  return (
    <div>
      {is_robot_show ? (
        <div>
          <div style={{ backgroundColor: '#f0f4fe' }}>{daynamic_form()}</div>
          <Row style={rowColStyle} gutter={24}>
            {content.map((item, idx) => (
              <FilterCondition filter_condition={() => filter_condition(idx)} text={item.text} label={item.label} />
            ))}
          </Row>
        </div>
      ) : null}
      <Table scroll bordered={false} dataSource={[]} columns={columns} />
    </div>
  )
}

export default Robot
