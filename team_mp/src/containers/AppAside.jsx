import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Layout, Menu, Dropdown, Tag } from 'antd'
import CustomMenu from '@/components/CustomMenu'
import logo from '@/assets/images/logo.png'
import { RightOutlined } from '@ant-design/icons'

const { Sider } = Layout
const { Item, SubMenu } = Menu

const AppAside = (props) => {
  let { menuToggle, menu, navigation } = props
  const goBackHome = () => {
    navigation.history.push('/workorder')
  }
  const lgm = () => (
    <Menu style={{ borderRadius: 10, overflow: 'hidden' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 60, marginBottom: 10, background: '#35385d', padding: 10, marginTop: -6 }}>
        <span style={{ display: 'inline-block', background: '#35385d' }}>
          {/* <img
            style={{ display: 'inline-block', width: 40, height: 40, objectFit: 'cover' }}
            src='https://s3-fs.pstatp.com/static-resource/v1/c17cb196-de58-4a02-b0c9-9006d6b07f2g~?image_size=240x240&cut_type=&quality=&format=image&sticker_format=.webp'
            alt=''
          /> */}
          <img style={{ display: 'inline-block', width: 40, height: 40, objectFit: 'cover' }} onClick={goBackHome} src={logo} alt='' />
        </span>
        <span style={{ display: 'block', color: '#fff' }}>中台处理程序</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 40, cursor: 'pointer', padding: 10 }}>
        <span>状态:</span>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Tag color='orange'>待申请</Tag>
          <RightOutlined />
        </div>
      </div>
      <Menu.Divider />
      <div style={{ height: 36, display: 'flex', alignItems: 'center', justifyContent: 'flex-start', cursor: 'pointer', color: '#3370ff', padding: 10 }}>切换或创建服务台</div>
    </Menu>
  )
  return (
    <Sider className='aside' collapsed={menuToggle}>
      <div className='logo' style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Dropdown overlay={lgm} overlayStyle={{ width: '20rem' }}>
          {/* <img
            style={{ display: 'inline-block', objectFit: 'cover' }}
            src='https://s3-fs.pstatp.com/static-resource/v1/c17cb196-de58-4a02-b0c9-9006d6b07f2g~?image_size=240x240&cut_type=&quality=&format=image&sticker_format=.webp'
            alt=''
          /> */}
          <img style={{ display: 'inline-block', width: 40, height: 40, objectFit: 'cover' }} onClick={goBackHome} src={logo} alt='' />
        </Dropdown>
        <span>中台处理程序</span>
      </div>
      <CustomMenu menuToggle={menuToggle} menu={menu} />
    </Sider>
  )
}

AppAside.propTypes = {
  menuToggle: PropTypes.bool,
  menu: PropTypes.array.isRequired
}

export default AppAside
