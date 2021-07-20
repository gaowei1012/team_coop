import React from 'react'
import SelectDatePicker from '../components/SelectDatePicker'
import { InfoCircleOutlined } from '@ant-design/icons'
import { Row, Col, Statistic, Tabs, Tooltip } from 'antd'
import '@/style/datareport.scss'
import moment from 'moment'

const { TabPane } = Tabs
const tips = [
  { num: 0, title: '用户提问数', tip: '用户通过手动输入直接向机器人提问的次数' },
  { num: null, title: '问题命中概率', tip: '所选时间段内，命中知识库中至少1个问题的用户提问数 / 用户提问数' },
  { num: null, title: '问题卡片点击率', tip: '用户至少点击任意问题 1 次的问题卡片数 / 展示的问题卡片数' },
  { num: null, title: '知识库问题总数', tip: '所选时段结束时，知识库中问题的总数' },
  { num: null, title: '知识库新增问题数', tip: '所选时段内，知识库中新增的问题数' }
]
const rowStyle = {
  margin: 10
}
const colStyle = {
  background: '#fff',
  height: 300
}

const KnowledgeQuality = (props) => {
  return (
    <div className='data-container'>
      <SelectDatePicker />
      <div className='content'>
        <Row style={rowStyle} gutter={22} justify='space-between'>
          {tips.map((t) => (
            <Col style={{ background: '#fff', padding: 6 }} key={t.num} span={4}>
              <Statistic
                title={
                  <React.Fragment>
                    <span className='h-row-title'>{t.title}</span>
                    <Tooltip placement='top' title={t.tip}>
                      <InfoCircleOutlined rotate={15} />
                    </Tooltip>
                  </React.Fragment>
                }
                value={t.num == null ? '-' : t.num}
              />
            </Col>
          ))}
        </Row>
        <Row style={rowStyle} gutter={24}>
          <Col style={colStyle} span={24}>
            <span className='title'>用户提问和问题命中率日趋势</span>
            <div className='empty-box'>
              <span className='pmpty'>暂无数据。</span>
            </div>
          </Col>
        </Row>
        <Row style={rowStyle} gutter={24}>
          <Col style={colStyle} span={24}>
            <span className='title'>问题卡片数和卡片点击率日趋势</span>
            <div className='empty-box'>
              <span className='pmpty'>暂无数据。</span>
            </div>
          </Col>
        </Row>
        <Row style={rowStyle} gutter={24}>
          <Col style={colStyle} span={24}>
            <span>用户提问中的热门关键词</span>
            <Tabs defaultActiveKey={1} animated>
              <TabPane tab='30天' key={1}>
                <Row gutter={24}>
                  <Col style={{ height: 200, borderRightWidth: 1, borderRightColor: '#ddd', borderRightStyle: 'solid' }} span={12}>
                    <div className='empty-box'>
                      <span className='pmpty'>暂无数据。</span>
                    </div>
                  </Col>
                  <Col span={12}>
                    <div className='empty-box'>
                      <span className='pmpty'>暂无数据。</span>
                    </div>
                  </Col>
                </Row>
              </TabPane>
              <TabPane tab='7天' key={2}>
                <Row gutter={24}>
                  <Col style={{ height: 200, borderRightWidth: 1, borderRightColor: '#ddd', borderRightStyle: 'solid' }} span={12}>
                    <div className='empty-box'>
                      <span className='pmpty'>暂无数据。</span>
                    </div>
                  </Col>
                  <Col span={12}>
                    <div className='empty-box'>
                      <span className='pmpty'>暂无数据。</span>
                    </div>
                  </Col>
                </Row>
              </TabPane>
              <TabPane tab={<React.Fragment>一天 ({moment().format('YYYY/MM/DD')})</React.Fragment>} key={3}>
                <Row gutter={24}>
                  <Col style={{ height: 200, borderRightWidth: 1, borderRightColor: '#ddd', borderRightStyle: 'solid' }} span={12}>
                    <div className='empty-box'>
                      <span className='pmpty'>暂无数据。</span>
                    </div>
                  </Col>
                  <Col span={12}>
                    <div className='empty-box'>
                      <span className='pmpty'>暂无数据。</span>
                    </div>
                  </Col>
                </Row>
              </TabPane>
            </Tabs>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default KnowledgeQuality
