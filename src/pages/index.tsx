import React from 'react'
import styles from './index.less'
import { Link } from 'umi'
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
            { title: 'Name', key: 'name', dataIndex: 'name', width: '70%', render:(val, rec) => {
              return (<Link to={`/repo/${val}`}>{val}</Link>)
            } },
            { title: 'Tags', key: 'tags', dataIndex: 'tags' },
          ]}
          dataSource={[
            { name: 'tvrcgo/clash', tags: 1 }
          ]}
        />
      </div>
    </div>
  )
}
