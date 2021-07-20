import React, { useState } from 'react'
import { Tabs, Button } from 'antd'
import { ExportOutlined, AlignCenterOutlined } from '@ant-design/icons'
import '@/style/workorder.scss'
import Human from './human'
import Robot from './robot'

const { TabPane } = Tabs

const WorkOrder = (props) => {
  const [is_show, setIsShow] = useState(false)
  const [is_robot_show, setIsRobotShow] = useState(false)
  const [tab_key, setTabKey] = useState('1')

  const tab_switch = (key) => {
    setTabKey(key)
  }

  const right_content = () => {
    // 筛选
    const filter = () => {
      if (tab_key == '1') {
        setIsShow(!is_show)
      } else {
        setIsRobotShow(!is_robot_show)
      }
    }
    return (
      <div className='rendertab-box'>
        <div className='filter' onClick={filter}>
          <AlignCenterOutlined className='filter-icon' />
          <span className='filter-text'>筛选</span>
        </div>
        <Button onClick={() => {}} type='default' icon={<ExportOutlined />}>
          导出
        </Button>
      </div>
    )
  }

  return (
    <div className='workorder-container'>
      <Tabs onTabClick={tab_switch} animated size='small' style={{ background: '#fff' }} tabBarExtraContent={{ right: right_content() }}>
        <TabPane tab='人工服务' key='1'>
          <Human {...props} is_show={is_show} />
        </TabPane>
        <TabPane tab='机器人服务' key='2'>
          <Robot {...props} is_robot_show={is_robot_show} />
        </TabPane>
      </Tabs>
    </div>
  )
}

export default React.memo(WorkOrder)
