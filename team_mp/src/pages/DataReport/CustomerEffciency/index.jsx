import React from 'react'
import SelectDatePicker from '../components/SelectDatePicker'
import '@/style/datareport.scss'
import { Row, Col, Statistic, Button, Tooltip } from 'antd'
import { InfoCircleOutlined, VerticalAlignBottomOutlined } from '@ant-design/icons'
import Utils from '@/utils/utils'
import XLSX from 'xlsx'
var utils = new Utils()

const tips = [
  { num: 0, title: '人工工单数', tip: null, isIcon: false },
  { num: null, title: '人工工单解决率', tip: null, isIcon: false },
  { num: null, title: '平均首次响应时长', tip: '基于在所选时间段内创建的人工工单数，统计出从首位客服接入服务，到首次回复用户提问之间的平均用时', isIcon: true },
  { num: null, title: '平均响应时长', tip: '基于在所选时间段内创建且已结束的人工工单数，统计出从每次用户提问，到客服给出相应回复的平均用时', isIcon: true },
  { num: null, title: '平均解决时长', tip: '基于在所选时间段内创建且已结束的人工工单数，统计出从首位客服接入服务，到工单结束的平均用时', isIcon: true }
]
const rowStyle = {
  margin: 10
}

const colStyle = {
  background: '#fff',
  height: 300
}

const CustomerEffciency = (props) => {
  // 下载
  const download = () => {
    const entozh = {
      name: '姓名',
      age: '年龄',
      address: '地址'
    }
    const json = {}
    const sheet = XLSX.utils.json_to_sheet(json)
    utils.openDownloadDialog(utils.sheet2blob(sheet, undefined), `客服详情.xlsx`)
  }

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
                    {t.isIcon ? (
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
            <div className='customer-detail'>
              <span className='detail'>客服详情</span>
              <Button className='btn' icon={<VerticalAlignBottomOutlined />} type='default' onClick={download}>
                下载
              </Button>
            </div>
            <div className='customer-detail-box'>
              <span className='empty'>暂无数据。</span>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default CustomerEffciency
