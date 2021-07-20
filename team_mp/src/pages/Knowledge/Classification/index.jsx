/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import { Collapse, Form, Input, Tree } from 'antd'
import { PlusOutlined, DownOutlined } from '@ant-design/icons'
import CommonModal from '@/commonComponents/commonModal'
import '@/style/classification.scss'

const { DirectoryTree } = Tree

const treeData = [
  {
    title: '全部分类',
    key: 'all',
    children: [
      { title: 'leaf 0-0', key: '0-0-0', isLeaf: true },
      { title: 'leaf 0-1', key: '0-0-1', isLeaf: true }
    ]
  }
]

const Classification = (props) => {
  const { visible, setVisible } = props
  const [classification_data, setClassificationData] = useState([])
  const [form] = Form.useForm()

  useEffect(() => {
    form.resetFields()
  }, [visible])

  const add_plus_lined = () => {
    setVisible(true)
  }

  const confirm = () => {
    form
      .validateFields()
      .then((values) => {
        classification_data.push(values)
        setClassificationData([...classification_data])
        setVisible(false)
      })
      .catch((info) => {
        console.log('info=====>>>', info)
      })
  }
  return (
    <div style={{ width: '100%' }}>
      <Tree showLine switcherIcon={<DownOutlined />} treeData={treeData} />
      <CommonModal
        title='添加下级分类'
        width={600}
        visible={visible}
        common_cancel={() => {
          setVisible(false)
        }}
        common_confirm={confirm}
        children={
          <Form form={form}>
            <Form.Item label='当前分类'>
              <span style={{ marginLeft: 16 }}>全部分类</span>
            </Form.Item>
            <Form.Item label='分类名称' name='classification_name' rules={[{ required: true }]}>
              <Input placeholder='请输入分类名称' />
            </Form.Item>
          </Form>
        }
      />
    </div>
  )
}

export default React.memo(Classification)
