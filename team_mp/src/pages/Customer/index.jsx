import React, { useState, useEffect } from 'react'
import { Button, Table, Tag, Dropdown, Menu } from 'antd'
import { PlusOutlined, EllipsisOutlined } from '@ant-design/icons'
import dataSettingApi from '@/apiService/dataSettingApi'
import AddCustomerModal from './add_customer_modal'
import EditCustomerModal from './edit_customer_modal'
import DelCustomerModal from './del_customer_modal'
import '@/style/customer.scss'

const Customer = (props) => {
  // 添加客服
  const [visible, setVisible] = useState(false)
  const [customer_list, setCustomerList] = useState([])

  // 编辑客服信息
  const [edit_visible, setEditVisible] = useState(false)
  const [edit_customer_obj, setEditCustomerObj] = useState({})

  // 删除
  const [del_visible, setDelVisible] = useState(false)
  const [del_customer_id, setCustomerId] = useState(null)

  useEffect(() => {
    get_customer_list()
  }, [])

  /**
   * 获取列表
   */
  const get_customer_list = () => {
    dataSettingApi
      .get_customer()
      .then((res) => {
        setCustomerList(res.data.data)
        console.log('res=====>>>', res.data.data)
      })
      .catch((err) => {
        console.log('err=====>>>', err)
      })
  }

  /**
   * 添加客服
   */
  const add_customer = () => {
    setVisible(true)
  }

  /**
   * 编辑
   * @param {*} record
   */
  const edit_customer = (record) => {
    setEditCustomerObj(record)
    setEditVisible(true)
  }

  /**
   * 删除
   * @param {*} record
   */
  const delete_customer = (record) => {
    setCustomerId(record.customer_id)
    setDelVisible(true)
  }

  const customer_edit = (record) => (
    <Menu>
      <Menu.Item onClick={() => edit_customer(record)}>修改</Menu.Item>
      <Menu.Item onClick={() => delete_customer(record)}>删除</Menu.Item>
    </Menu>
  )

  const columns = [
    {
      title: '客服',
      dataIndex: 'customer_name',
      key: 'customer_name',
      align: 'left'
    },
    {
      title: '服务时间段',
      dataIndex: 'service_period',
      key: 'service_period',
      align: 'left'
    },
    {
      title: '技能',
      dataIndex: 'skill',
      key: 'skill',
      align: 'left',
      render: (r) => {
        return (
          <React.Fragment>
            {r.map((l, i) => (
              <Tag color='blue' key={i}>
                {l}
              </Tag>
            ))}
          </React.Fragment>
        )
      }
    },
    {
      title: '工单权限',
      dataIndex: 'authority',
      key: 'authority',
      align: 'left'
    },
    {
      title: '',
      align: 'left',
      render: (text, record, idx) => (
        <Dropdown overlay={() => customer_edit(record)} placement='bottomLeft'>
          <EllipsisOutlined style={{ cursor: 'pointer' }} rotate={90} />
        </Dropdown>
      )
    }
  ]

  return (
    <div className='customer-container'>
      <div className='tips'>
        <span className='wapr'>
          当服务台的<span className='work-time'>工作时间</span>结束时，客服状态将显示为离线，即使该客服的服务时间还未结束。
        </span>
        <Button onClick={add_customer} icon={<PlusOutlined />} type='default'>
          添加客服
        </Button>
      </div>
      <Table dataSource={customer_list} columns={columns} />
      <AddCustomerModal visible={visible} setVisible={setVisible} get_customer_list={get_customer_list} />
      <EditCustomerModal edit_visible={edit_visible} setEditVisible={setEditVisible} edit_customer_obj={edit_customer_obj} get_customer_list={get_customer_list} />
      <DelCustomerModal del_visible={del_visible} setDelVisible={setDelVisible} del_customer_id={del_customer_id} get_customer_list={get_customer_list} />
    </div>
  )
}

export default React.memo(Customer)
