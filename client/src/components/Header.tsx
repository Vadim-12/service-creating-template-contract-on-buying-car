import React, { FC } from 'react'
import Menu from './Menu'

const Header: FC = () => {
  return (
    <header>
      <div className="container">
        <Menu/>
      </div>
    </header>
  )
}

export default Header