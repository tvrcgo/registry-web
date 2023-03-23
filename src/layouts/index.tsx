import React from 'react'
import { Outlet, Link } from 'umi'
import styles from './index.less'

export default () => {
  return (
    <div className={styles.registryWeb}>
      <div className={styles.head}>
        <div className={styles.brand}><Link to="/">Registry Station</Link></div>
        <div className={styles.rt}>self-host</div>
      </div>
      <div className={styles.main}>
        <div className={styles.inner}><Outlet /></div>
      </div>
    </div>
  )
}
