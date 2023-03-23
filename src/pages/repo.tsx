import React from 'react'
import { useParams, Link } from 'umi'
import styles from './repo.less'
import {
  Table
} from 'antd'

export default () => {
  const params = useParams()

  const onRemoveTag = (tag: any) => {
    console.log(tag)
  }

  return (
    <div className={styles.page}>
      <h1>Repository</h1>
      <h2>{params.user}/{params.repo}</h2>
      <p>category: {params.cat}</p>
      <div>
        <Table
          size='middle'
          bordered
          columns={[
            { title: 'Tag', key: 'tag', dataIndex: 'tag', width: '60%' },
            { title: 'Size', key: 'size', dataIndex: 'size', render: (val) => {
              return `${(val/Math.pow(1024, 2)).toFixed(1)}MB`
            } },
            { title: 'Action', key: 'action', width: 120, render: (_, row) => {
              return (
                <a onClick={() => onRemoveTag(row)}>删除</a>
              )
            } },
          ]}
          dataSource={[
            { tag: 'latest', size: 100233746, key: 1 },
            { tag: 'v1.0', size: 120333746, key: 2 },
          ]}
        />
      </div>
    </div>
  )
}
