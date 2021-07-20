import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Menu, Dropdown, Layout, Avatar, Switch, Tooltip } from 'antd'
import { MenuFoldOutlined, BulbOutlined, MenuUnfoldOutlined, InfoCircleOutlined } from '@ant-design/icons'
import CommonModal from '@/commonComponents/commonModal'
import hBg from '@/assets/images/h-bg.png'

const { Header } = Layout

const AppHeader = (props) => {
  let { menuClick, avatar, menuToggle, loginOut } = props
  const [visible, setVisible] = useState(false)
  const [defaultChecked, setDefaultChecked] = useState(true)
  const change_switch = (checked) => {
    checked ? setVisible(false) : setVisible(true)
  }
  const confirm = () => {
    setVisible(false)
    setDefaultChecked(true)
  }
  const menu = (
    <Menu style={{ borderRadius: 10, overflow: 'hidden' }}>
      <div style={{ width: '100%', background: '#3370ff', backgroundImage: `url(${hBg})`, display: 'flex', flexDirection: 'column', padding: 10, marginTop: -10 }}>
        <span style={{ display: 'block', color: '#fff' }}>王</span>
        <span style={{ display: 'block', color: '#fff' }}>执念的团队</span>
      </div>
      <div style={{ margin: 10, display: 'flex', justifyContent: 'space-between' }}>
        <span>当前状态: 在线</span>
        <Switch defaultChecked={defaultChecked} onChange={change_switch}></Switch>
      </div>
      <Menu.SubMenu title='语言'>
        <Menu.Item style={{ paddingLeft: 10, paddingRight: 10, width: 120 }}>英文</Menu.Item>
        <Menu.Item style={{ paddingLeft: 10, paddingRight: 10, width: 120 }}>中文</Menu.Item>
        <Menu.Item style={{ paddingLeft: 10, paddingRight: 10, width: 120 }}>其他</Menu.Item>
      </Menu.SubMenu>
      <Menu.Divider />
      <Menu.Item>
        <span style={{ display: 'inline-block', width: '100%', color: 'red' }} onClick={loginOut}>
          退出登录
        </span>
      </Menu.Item>
    </Menu>
  )
  const rlc = () => (
    <Menu style={{ borderRadius: 10, overflow: 'hidden' }}>
      <Menu.Item>功能简介</Menu.Item>
      <Menu.Item>快速入门</Menu.Item>
      <Menu.Item>功能简介</Menu.Item>
      <Menu.Item>联系我们</Menu.Item>
    </Menu>
  )
  return (
    <React.Fragment>
      <Header className='header'>
        <div className='left'>
          <div style={{ cursor: 'pointer' }} onClick={menuClick}>
            {menuToggle ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          </div>
        </div>
        <div className='right'>
          <div className='mr15'>
            <Dropdown placement='bottomCenter' overlay={rlc} overlayStyle={{ width: '10rem' }}>
              <InfoCircleOutlined />
            </Dropdown>
          </div>
          <div className='mr15'>
            <Tooltip placement='bottom' title='功能更新'>
              <BulbOutlined />
            </Tooltip>
          </div>
          <div>
            <Dropdown placement='bottomCenter' overlay={menu} overlayStyle={{ width: '20rem' }}>
              <div className='ant-dropdown-link'>
                <Avatar icon='user' src={avatar} alt='avatar' style={{ cursor: 'pointer' }} />
              </div>
            </Dropdown>
          </div>
        </div>
      </Header>
      <CommonModal
        title='离线'
        width={600}
        visible={visible}
        common_cancel={() => {
          setVisible(false)
          setDefaultChecked(false)
        }}
        common_confirm={confirm}
        children={<div style={{ textAlign: 'center', marginBottom: 20 }}>离线后，系统将告知管理员你已离线，你将不会接到新工单。</div>}
      />
    </React.Fragment>
  )
}

AppHeader.propTypes = {
  menuClick: PropTypes.func,
  avatar: PropTypes.string,
  menuToggle: PropTypes.bool,
  loginOut: PropTypes.func
}

export default AppHeader
