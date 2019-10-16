import React, { useState } from 'react'
import layout from './Layout.module.css'

import { Sidebar } from '../Sidebar/Sidebar'
import { Nav } from '../Nav/Nav'

const Layout = props => {
  const [toggled, setToggled] = useState(false)

  const toggleSidebar = () => setToggled(prevState => !prevState)

  return (
    <div className={'d-flex'}>
      <Sidebar toggled={toggled} brand={'Distripack'} />
      <div className={layout['wrapper']}>
        <Nav toggleSidebar={toggleSidebar} />
        {props.children}
      </div>
    </div>
  )
}

export default Layout
