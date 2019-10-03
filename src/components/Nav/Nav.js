import React from 'react'

export const Nav = props => (
  <nav className={'navbar navbar-light bg-light border-bottom'}>
    <a
      href="#"
      id="menu-toggle"
      className={'navbar-toggler'}
      onClick={props.toggleSidebar}
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className={'navbar-toggler-icon'} />
    </a>
  </nav>
)
