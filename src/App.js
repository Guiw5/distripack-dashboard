import React, { useState } from 'react'

import app from './App.module.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import { Sidebar } from './components/Sidebar/Sidebar'
import { Nav } from './components/Nav/Nav'
import { PageContent } from './components/PageContent/PageContent'

const App = () => {
  const [toggled, setToggled] = useState(false)
  const [title, setTitle] = useState('')

  const toggleSidebar = () => setToggled(prevState => !prevState)

  return (
    <div className={'d-flex'}>
      <Sidebar toggled={toggled} brand={'Distripack'} onClick={setTitle} />
      <div className={app['wrapper']}>
        <Nav toggleSidebar={toggleSidebar} />
        <PageContent title={title} />
      </div>
    </div>
  )
}

export default App
