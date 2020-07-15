import React from 'react'
import { Button } from 'antd'
import styles from './index.less'
import Link from 'next/link'
const Index = () => {
  return (
    <div className={styles.indexWrapper}>
      <Link href="/user">
        <Button type="primary">go user</Button>
      </Link>
      index...
    </div>
  )
}
export default Index
