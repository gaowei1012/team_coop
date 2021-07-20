import React from 'react'
import { Tabs } from 'antd'

import CustomerEffciency from './CustomerEffciency'
import KnowledgeQuality from './KnowledgeQuality'
import SatisfactionSurvey from './SatisfactionSurvey'
import WorkOrder from './WorkOrder'
import '@/style/datareport.scss'

const { TabPane } = Tabs

const DataReport = (props) => {
  return (
    <Tabs tabPosition='top' tabBarStyle={{ background: '#fff', paddingLeft: 10 }} style={{ background: '#fff' }}>
      <TabPane tab='工单趋势' key={1}>
        <WorkOrder {...props} />
      </TabPane>
      <TabPane tab='客服效率' key={2}>
        <CustomerEffciency {...props} />
      </TabPane>
      <TabPane tab='知识库质量' key={3}>
        <KnowledgeQuality {...props} />
      </TabPane>
      <TabPane tab='满意度调查' key={4}>
        <SatisfactionSurvey {...props} />
      </TabPane>
    </Tabs>
  )
}

export default React.memo(DataReport)
