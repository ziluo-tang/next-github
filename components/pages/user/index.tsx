import React from 'react'
import Router from 'next/router'
import { Button } from 'antd'
const gobackHandle = () => {
  Router.push('/')
}
const User = () => {
  return (
    <div>
      <Button type="primary" onClick={gobackHandle}>
        go back
      </Button>
      user...
    </div>
  )
}
export default User
