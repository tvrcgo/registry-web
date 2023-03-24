import React, { useState } from 'react'
import {
  Drawer,
  Input,
  Form,
  Button
} from 'antd'
import type { FormInstance } from 'antd/es/form'
import useSetting from '@/hooks/setting'

interface SettingProps {
  trigger: any
}

export default (props: SettingProps) => {
  const { trigger } = props
  const [state, updater] = useSetting()
  const [open, updateOpen] = useState(false)
  const formRef = React.useRef<FormInstance>(null)

  const onSaveSetting = (values: any) => {
    updater(values)
    updateOpen(false)
  }

  return (
    <>
      <span
        onClick={() => updateOpen(!open)}
        style={{ cursor: 'pointer', display: 'inline-block' }}
      >
        {trigger}
      </span>
      <Drawer
        title='Setting'
        width={500}
        open={open}
        onClose={() => updateOpen(false)}
      >
        <Form
          ref={formRef}
          layout='vertical'
          onFinish={onSaveSetting}
        >
          <Form.Item name="registry_host" label="Registry Host" rules={[{ required: true }]} initialValue={state.registry_host}>
            <Input size='large' />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">Save</Button>
          </Form.Item>
        </Form>
      </Drawer>
    </>
  )
}
