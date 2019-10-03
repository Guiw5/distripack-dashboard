import React, { useState } from 'react'
import bootstrap from '../src/assets/styles/bootstrap.module.css'
import app from './App.module.css'

import { Sidebar } from './components/Sidebar/Sidebar'
import { Nav } from './components/Nav/Nav'
import { PageContent } from './components/PageContent/PageContent'

const App = () => {
  const [toggled, setToggled] = useState(false)
  const [title, setTitle] = useState('')

  const toggleSidebar = () => setToggled(prevState => !prevState)

  return (
    <div className={bootstrap['d-flex']}>
      <Sidebar toggled={toggled} onClick={setTitle} />
      <div className={app['wrapper']}>
        <Nav toggleSidebar={toggleSidebar} />
        <PageContent title={title} />
      </div>
    </div>
  )
}

export default App
