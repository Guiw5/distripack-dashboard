import React from 'react'

import bootstrap from '../../assets/styles/bootstrap.module.css'
import cx from 'classnames'

export const Nav = props => (
  <nav
    className={cx([
      bootstrap['navbar'],
      bootstrap['navbar-light'],
      bootstrap['bg-light'],
      bootstrap['border-bottom']
    ])}
  >
    <button
      id="menu-toggle"
      type="button"
      className={bootstrap['navbar-toggler']}
      onClick={props.toggleSidebar}
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className={bootstrap['navbar-toggler-icon']}></span>
    </button>
  </nav>
)
