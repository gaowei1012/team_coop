/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { Form, Select, DatePicker, Row, Col, Radio, message } from 'antd'
import CommonModal from '@/commonComponents/commonModal'
import dataSettingApi from '@/apiService/dataSettingApi'
import locale from 'antd/es/date-picker/locale/zh_CN'
import 'moment/locale/zh-cn'
import config from '@/config'
import moment from 'moment'
import _ from 'lodash'

const { RangePicker } = DatePicker

const { Option } = Select
const radioStyle = {
  display: 'block',
  height: '30px',
  lineHeight: '30px'
}

const EditCustomerModal = (props) => {
  const { edit_visible, setEditVisible, edit_customer_obj, get_customer_list } = props
  const [customer_name, setCustomerName] = useState(null)
  const [form] = Form.useForm()

  useEffect(() => {
    setCustomerName(edit_customer_obj.customer_name)
    // _.map(edit_customer_obj.service_period_date, function (c) {
    //   console.log('c=====>>>', c)
    //   return moment(c.end_time)
    // })
    delete edit_customer_obj.service_period_date
    form.setFieldsValue(edit_customer_obj)
  }, [edit_customer_obj])

  const confirm = () => {
    form
      .validateFields()
      .then((values) => {
        values.service_period_date = {
          start_time: moment(values.service_period_date[0]).format('hh:mm:ss'),
          end_time: moment(values.service_period_date[1]).format('hh:mm:ss')
        }
        values.service_period_date = [values.service_period_date]
        console.log('``=====>>>', values)
        dataSettingApi
          .put_customer(edit_customer_obj.customer_id, values, '')
          .then((res) => {
            message.success(res.data.message)
            setEditVisible(false)
            get_customer_list()
          })
          .catch((err) => {
            message.error(err.data.message)
          })
      })
      .catch((info) => {
        console.log('info=====>>>', info)
      })
  }

  return (
    <React.Fragment>
      <CommonModal
        title='修改客服信息'
        width={600}
        visible={edit_visible}
        common_cancel={() => {
          setEditVisible(false)
        }}
        common_confirm={confirm}
        children={
          <Form layout='vertical' form={form}>
            <Form.Item label='客服' name='customer_name'>
              <span>{customer_name}</span>
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
                  <Form.Item noStyle name='service_period_date' rules={[{ message: '选择日期', required: true }]}>
                    <RangePicker allowClear={false} locale={locale} picker='time' style={{ width: '100%' }} />
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

export default EditCustomerModal
