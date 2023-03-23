import React from 'react'
import { useParams } from 'umi'
import styles from './repo.less'

export default () => {
  const params = useParams()
  return (
    <div className={styles.page}>
      <h1>Repository</h1>
      <p>repo: {params.user}/{params.repo}</p>
      <p>category: {params.cat}</p>
    </div>
  )
}
