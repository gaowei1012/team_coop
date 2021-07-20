import React from 'react'
import { DatePicker, Form, Tag, Tooltip } from 'antd'
import 'moment/locale/zh-cn'
import locale from 'antd/es/date-picker/locale/zh_CN'
import { InfoCircleOutlined } from '@ant-design/icons'

const { Item } = Form
const { RangePicker } = DatePicker

const SelectDatePicker = (props) => {
  const [form] = Form.useForm()
  const renderExtraFooter = () => {
    return (
      <React.Fragment>
        <Tag color='cyan'>Tag</Tag>
        <Tag color='geekblue'>Tag</Tag>
        <Tag color='blue'>Tag</Tag>
        <Tag color='gold'>Tag</Tag>
      </React.Fragment>
    )
  }
  return (
    <Form style={{ marginLeft: 20 }} layout='inline' form={form}>
      <Item label='日期范围' name='datapicker'>
        <RangePicker allowClear locale={locale} format='YYYY-MM-DD HH:mm' renderExtraFooter={renderExtraFooter} />
      </Item>
      <Item
        label={
          <React.Fragment>
            <span style={{ display: 'inline-block', fontSize: 14, color: '#1f2329' }}>(GMT+08:00) 中国标准时间 - 北京</span>
            &nbsp; &nbsp;
            <Tooltip placement='top' title='你当前查看的时间和日期处于服务台设定的时区。若要修改时区，请前往“设置中心”-“工作时间”。'>
              <InfoCircleOutlined rotate={15} />
            </Tooltip>
          </React.Fragment>
        }
        colon={false}
      />
    </Form>
  )
}

export default SelectDatePicker
