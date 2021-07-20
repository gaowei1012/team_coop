/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { Form, Input, Select, DatePicker, Row, Col, Radio, message } from 'antd'
import CommonModal from '@/commonComponents/commonModal'
import locale from 'antd/es/date-picker/locale/zh_CN'
import dataSettingApi from '@/apiService/dataSettingApi'
import 'moment/locale/zh-cn'
import config from '@/config'
import moment from 'moment'

const { Option } = Select
const { RangePicker } = DatePicker

const radioStyle = {
  display: 'block',
  height: '30px',
  lineHeight: '30px'
}

const AddCustomerModal = (props) => {
  const { visible, setVisible, get_customer_list } = props
  const [form] = Form.useForm()

  useEffect(() => {
    form.resetFields()
  }, [visible])

  const confirm = () => {
    form
      .validateFields()
      .then((values) => {
        values.service_period_date = {
          start_time: moment(values.service_period_date[0]).format('hh:mm:ss'),
          end_time: moment(values.service_period_date[1]).format('hh:mm:ss')
        }
        values.service_period_date = [values.service_period_date]
        console.log('=====>>>', values)
        dataSettingApi
          .add_customer(values, 'token')
          .then((res) => {
            message.success(res.data.message)
            get_customer_list()
          })
          .catch((err) => {
            console.log('err=====>>>', err)
          })
        setVisible(false)
      })
      .catch((info) => {})
  }

  const suffix_icon = () => {
    return <div style={{ width: 30, color: 'blue', cursor: 'pointer', zIndex: 10 }}>全天</div>
  }

  return (
    <React.Fragment>
      <CommonModal
        title='添加客服'
        width={600}
        visible={visible}
        common_cancel={() => {
          setVisible(false)
        }}
        common_confirm={confirm}
        children={
          <Form layout='vertical' form={form}>
            <Form.Item label='客服' name='customer_name'>
              <Input placeholder='请输入客服姓名。最多可一个可添加10个客服' />
            </Form.Item>
            <Form.Item label='服务时间段'>
              <Row>
                <Col span={8}>
                  <Form.Item noStyle name='service_period'>
                    <Select placeholder='请选择时间段'>
                      {config.period.map((p) => (
                        <Option key={p}>{p}</Option>
                      ))}
                    </Select>
                  </Form.Item>
                </Col>
                <Col offset={2} span={14}>
                  <Form.Item noStyle name='service_period_date'>
                    <RangePicker allowClear={false} locale={locale} picker='time' style={{ width: '100%' }} suffixIcon={suffix_icon()} />
                  </Form.Item>
                </Col>
              </Row>
            </Form.Item>
            <Form.Item
              name='skill'
              label={
                <div className='jineng'>
                  <span>技能</span>
                  <span>工单将会根据以下技能设定分配给该客服. 查看技能</span>
                </div>
              }>
              <Select mode='multiple' placeholder='请选择技能'>
                <Option key='技术服务与支持'>技术服务与支持</Option>
                <Option key='测试'>测试</Option>
              </Select>
            </Form.Item>
            <Form.Item
              label={
                <div>
                  <div>工单权限</div>
                  <span>可设置客服在工单中心查看和操作工单的范围</span>
                </div>
              }
              name='authority'>
              <Radio.Group>
                <Radio style={radioStyle} value='所分配工单'>
                  所分配工单
                </Radio>
                <Radio style={radioStyle} value='所在技能组工单'>
                  所在技能组工单
                </Radio>
                <Radio style={radioStyle} value='所有工单'>
                  所有工单
                </Radio>
              </Radio.Group>
            </Form.Item>
          </Form>
        }
      />
    </React.Fragment>
  )
}

export default AddCustomerModal
