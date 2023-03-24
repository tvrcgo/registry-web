import React from 'react'
import { Outlet, Link } from 'umi'
import styles from './index.less'
import { SettingOutlined } from '@ant-design/icons'
import Setting from '@/components/Setting'

export default () => {
  return (
    <div className={styles.registryWeb}>
      <div className={styles.head}>
        <div className={styles.brand}><Link to="/">Registry Station</Link></div>
        <div className={styles.rt}>
          <Setting trigger={(<SettingOutlined />)} />
        </div>
      </div>
      <div className={styles.main}>
        <div className={styles.inner}><Outlet /></div>
      </div>
    </div>
  )
}
