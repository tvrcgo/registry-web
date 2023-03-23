import React from 'react'
import styles from './index.less'
import {
  Table
} from 'antd'

export default () => {
  return (
    <div className={styles.page}>
      <h1>Overview</h1>
      <div>
        registry info ...
      </div>
      <h1>Repositories</h1>
      <div>
        <Table
          size='middle'
          bordered
          columns={[
            { title: 'Name', key: 'name', width: '70%' },
            { title: 'Tags', key: 'tags' },
          ]}
        />
      </div>
    </div>
  )
}
