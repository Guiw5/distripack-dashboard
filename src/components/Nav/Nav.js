import React from 'react'
// import styles from './Nav.module.css'
import cx from 'classnames'

export const Nav = props => (
  <nav className={cx('navbar', 'navbar-dark', 'border-bottom', 'bg-nav')}>
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
