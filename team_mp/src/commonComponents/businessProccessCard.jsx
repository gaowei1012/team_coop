import React from 'react'
import PropType from 'prop-types'
import { Card, Tooltip, Tag } from 'antd'
import { EditOutlined, SettingOutlined, DeleteOutlined } from '@ant-design/icons'

const BusinessProcessCard = ({ title, edit_unit_fun, detail_unit_fun, delete_unit_fun, children, index, style, color, icon, bordered, hoverable }) => (
  <Card
    title={
      <Tag color={color}>
        {icon} {title} - {index + 1}
      </Tag>
    }
    style={style}
    hoverable={hoverable}
    bordered={bordered}
    extra={
      <div style={{ width: 80, display: 'flex', justifyContent: 'space-between' }}>
        <Tooltip placement='bottom' title='编辑'>
          <EditOutlined onClick={edit_unit_fun} />
        </Tooltip>
        <Tooltip placement='bottom' title='详情'>
          <SettingOutlined onClick={detail_unit_fun} />
        </Tooltip>
        <Tooltip placement='bottom' title='删除'>
          <DeleteOutlined onClick={delete_unit_fun} />
        </Tooltip>
      </div>
    }>
    {children}
  </Card>
)

BusinessProcessCard.propType = {
  title: PropType.string.isRequired, // 标题
  delete_unit_fun: PropType.func.isRequired, // 删除方法
  edit_unit_fun: PropType.func.isRequired, // 编辑方法
  detail_unit_fun: PropType.func.isRequired, // 详情方法
  children: PropType.element.isRequired, // 子节点
  index: PropType.number, // key 索引
  style: PropType.object, // 样式对象
  color: PropType.string, // 标签样色
  icon: PropType.element, // icon 图标
  bordered: PropType.bool, // false | true
  hoverable: PropType.bool, // false | true
  size: PropType.string // default | small
}

export default BusinessProcessCard
