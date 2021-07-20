import React from 'react'
import { CloseOutlined } from '@ant-design/icons'
import '@/style/condition.scss'

const FilterCondition = (props) => {
  const { text, label, filter_condition } = props
  return (
    <div className='filter-condition' onClick={filter_condition}>
      <span className='text'>{label}:</span>
      <span className='label'>{text}</span>
      <CloseOutlined className='icon' />
    </div>
  )
}

export default FilterCondition
