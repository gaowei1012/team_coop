import React from 'react'
import { Modal, Button } from 'antd'
import '@/style/modal.scss'

const CommonModal = (props) => {
  const { title, visible, centered, common_cancel, common_confirm, width, children } = props
  return (
    <Modal closable={false} width={width} visible={visible} centered={centered} footer={null}>
      <div className='modal-container'>
        <div className='modal-header'>
          <span />
          <span className='title'>{title}</span>
          <span onClick={common_cancel} className='icon'>
            X
          </span>
        </div>
        <div className='modal-content'>{children}</div>
        <div className='modal-footer'>
          <Button className='btn' type='default' onClick={common_cancel}>
            取消
          </Button>
          <span className='space' />
          <Button className='btn' type='primary' onClick={common_confirm}>
            确认
          </Button>
        </div>
      </div>
    </Modal>
  )
}

export default CommonModal
