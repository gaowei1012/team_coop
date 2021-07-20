import React from 'react'
import SelectDatePicker from '../components/SelectDatePicker'
import { InfoCircleOutlined, DownloadOutlined } from '@ant-design/icons'
import { Statistic, Row, Col, Button, Tabs, Tooltip } from 'antd'
import '@/style/datareport.scss'
const { TabPane } = Tabs
const tips = [
  { num: 0, title: '发送调查数', icon: false, tip: '' },
  { num: null, title: '完成调查数', icon: false, tip: '' },
  { num: null, title: '"满意"评价占比', icon: true, tip: '评价为"满意"的工单数 / 已完成满意度调查的工单数' },
  { num: null, title: '"一般"评价占比', icon: true, tip: '评价为“一般”的工单数 / 已完成满意度调查的工单数' },
  { num: null, title: '"不满意"评价占比', icon: true, tip: '评价为“不满意”的工单数 / 已完成满意度调查的工单数' }
]
const rowStyle = {
  margin: 10
}
const colStyle = {
  background: '#fff',
  height: 300,
  padding: 10
}

const SatisfactionSurvey = (props) => {
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
                    {t.icon ? (
                      <Tooltip placement='top' title={t.tip}>
                        <InfoCircleOutlined rotate={15} />
                      </Tooltip>
                    ) : null}
                  </React.Fragment>
                }
                value={t.num == null ? '-' : t.num}
              />
            </Col>
          ))}
        </Row>
        <Row style={rowStyle} gutter={24}>
          <Col style={colStyle} span={24}>
            <span className='title'>满意度日趋势</span>
            <div className='empty-box'>
              <span className='pmpty'>暂无数据。</span>
            </div>
          </Col>
        </Row>
        <Row style={rowStyle} gutter={24}>
          <Col style={colStyle} span={24}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span className='title'>不满意原因</span>
              <Button icon={<DownloadOutlined />} type='default'>
                下载详情
              </Button>
            </div>
            <Tabs animated defaultActiveKey={1}>
              <TabPane tab='中文' key={1}>
                <div className='empty-box'>
                  <span className='pmpty'>暂无数据。</span>
                </div>
              </TabPane>
              <TabPane tab='英文' key={2}>
                <div className='empty-box'>
                  <span className='pmpty'>暂无数据。</span>
                </div>
              </TabPane>
            </Tabs>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default SatisfactionSurvey
