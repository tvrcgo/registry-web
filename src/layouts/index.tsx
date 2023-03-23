import React, { useState } from 'react'
import { Outlet, Link } from 'umi'
import styles from './index.less'
import { SettingOutlined } from '@ant-design/icons'
import {
  Drawer,
  Badge,
  Form,
  Input,
  Select,
  Button
} from 'antd'
import type { FormInstance } from 'antd/es/form'
import useRegistry from '@/hooks/registry'
import useSetting from '@/hooks/setting'

export default () => {

  const [open, updateOpen] = useState(false)
  const registry = useRegistry()
  const [setting, updateSetting] = useSetting()

  const formRef = React.useRef<FormInstance>(null)
  const onSaveSetting = (values: any) => {
    updateSetting(values)
    updateOpen(false)
  }

  return (
    <div className={styles.registryWeb}>
      <div className={styles.head}>
        <div className={styles.brand}><Link to="/">Registry Station</Link></div>
        <div className={styles.rt}>
          <span>{registry.ok ? (<Badge status="success" />) : (<Badge status="error" />)}</span>
          <span><SettingOutlined onClick={() => updateOpen(!open)} /></span>
        </div>
      </div>
      <div className={styles.main}>
        <div className={styles.inner}><Outlet /></div>
      </div>
      <Drawer
        title='Setting'
        width={600}
        open={open}
        onClose={() => updateOpen(false)}
      >
        <Form
          ref={formRef}
          layout='vertical'
          onFinish={onSaveSetting}
        >
          <Form.Item name="registry_host" label="Registry Host" rules={[{ required: true }]} initialValue={setting.registry_host}>
            <Input size='large' />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">Save</Button>
          </Form.Item>
        </Form>
      </Drawer>
    </div>
  )
}
