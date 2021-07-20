import React from 'react'
import SelectDatePicker from '../components/SelectDatePicker'
import { InfoCircleOutlined } from '@ant-design/icons'
import { Row, Col, Statistic, Tooltip, Tabs } from 'antd'
import '@/style/datareport.scss'

const { TabPane } = Tabs

const tips = [
  { num: 1, title: '创建工单数', tip: '所选时间段内，创建的工单总数' },
  { num: 0, title: '工单解决率', tip: '所选时间段内，结束的工单数 / 创建的工单数。工单结束表明问题已得到解决' },
  { num: 10, title: '机器人拦截率', tip: '所选时间段内，结束的机器人工单数 / 创建的工单数' },
  { num: 10, title: '每周繁忙日', tip: '所选时间段内，每周平均创建工单数最多的一天' },
  { num: 18, title: '每天繁忙时段', tip: '所选时间段内，每天平均创建工单数最多的一个小时' }
]

const rowStyle = {
  margin: 10
}

const colStyle = {
  padding: 10,
  background: '#fff',
  height: 368,
  width: '100%'
}

const halfColStyle = {
  background: '#fff',
  height: 368,
  padding: 10
}

const WorkOrder = (props) => {
  return (
    <div className='data-container'>
      <SelectDatePicker />
      <div className='content'>
        <Row style={rowStyle} gutter={22} justify='space-between'>
          {tips.map((t) => (
            <Col style={{ background: '#fff', padding: 6 }} span={4} key={t.num}>
              <Statistic
                title={
                  <React.Fragment>
                    <span className='h-row-title'>{t.title}</span>
                    &nbsp;
                    <Tooltip placement='top' title={t.tip}>
                      <InfoCircleOutlined rotate={20} />
                    </Tooltip>
                  </React.Fragment>
                }
                value={t.num == 0 ? '-' : t.num}
              />
            </Col>
          ))}
        </Row>
        <Row style={rowStyle} gutter={24}>
          <Col style={colStyle} span={24}>
            <span className='title'>创建工单数和机器拦截率日趋势</span>
            <Tooltip placement='top' title='每日机器人拦截率=当日创建且结束的机器人工单数 / 当日创建工单数。若新创建的机器人工单于次日才结束，则当日的机器人拦截率不会将其计算在内。'>
              <InfoCircleOutlined style={{ color: '#ccc' }} rotate={20} />
            </Tooltip>
            <div className='workorder-box'>
              <div className='workorder-content'>
                <span className='empty'>暂无数据。</span>
              </div>
            </div>
          </Col>
        </Row>
        <Row style={rowStyle} gutter={24}>
          <Col style={colStyle} span={24}>
            <span className='title'>创建工单数按所选属性分布的日趋势</span>
            <Tooltip placement='top' title='饼状图展示所选时间段结束时的总体分布，柱状图展示所选时间段内的每日分布'>
              <InfoCircleOutlined style={{ color: '#ccc' }} rotate={20} />
            </Tooltip>
            <div className='workorder-box'>
              <div className='tabs'>
                <Tabs defaultActiveKey='1' animated>
                  <TabPane style={{ height: 260 }} key='1' tab='状态'>
                    <div className='workorder-content'>
                      <span className='empty'>暂无数据。</span>
                    </div>
                  </TabPane>
                  <TabPane style={{ height: 260 }} key='2' tab='状态'>
                    <div className='workorder-content'>
                      <span className='empty'>暂无数据。</span>
                    </div>
                  </TabPane>
                </Tabs>
              </div>
            </div>
          </Col>
        </Row>
        <Row style={rowStyle} gutter={24} justify='space-between'>
          <Col style={halfColStyle} span={11}>
            <span className='title'>创建工单的标签分布 （前十）</span>
            <div className='empty-box'>
              <span className='empty'>暂无数据。</span>
            </div>
          </Col>
          <Col style={halfColStyle} span={11}>
            <span className='title'>创建工单的用户城市分布 （前十）</span>
            <div className='empty-box'>
              <span className='empty'>暂无数据。</span>
            </div>
          </Col>
        </Row>
        <Row style={rowStyle} gutter={[8, 8]} justify='space-between'>
          <Col style={halfColStyle} span={11}>
            <span className='title'>平均创建工单数的日趋势</span>
            <div className='empty-box'>
              <span className='empty'>暂无数据。</span>
            </div>
          </Col>
          <Col style={halfColStyle} span={11}>
            <span className='title'>平均创建工单数的小时趋势</span>
            <div className='empty-box'>
              <span className='empty'>暂无数据。</span>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default WorkOrder
