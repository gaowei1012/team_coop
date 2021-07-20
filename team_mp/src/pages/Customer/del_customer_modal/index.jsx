import React from 'react'
import CommonModal from '@/commonComponents/commonModal'
import dataSettingApi from '@/apiService/dataSettingApi'
import { message } from 'antd'

const DelCustomerModal = (props) => {
  const { del_visible, setDelVisible, del_customer_id, get_customer_list } = props

  const confirm = () => {
    dataSettingApi
      .del_customer(del_customer_id, '')
      .then((res) => {
        message.success(res.data.message)
        setDelVisible(false)
        get_customer_list()
      })
      .catch((err) => {
        message.error(err.data.message)
      })
  }

  return (
    <React.Fragment>
      <CommonModal
        title='删除'
        width={600}
        visible={del_visible}
        common_cancel={() => {
          setDelVisible(false)
        }}
        common_confirm={confirm}
        children={<div style={{ textAlign: 'center', paddingTop: 10, paddingBottom: 10 }}>确定要删除该客服吗？删除客服后他会立即退出所有客服群，系统会拉入新的客服解决处理中的工单</div>}
      />
    </React.Fragment>
  )
}

export default DelCustomerModal
