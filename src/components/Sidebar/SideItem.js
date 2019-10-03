import React, { useState } from 'react'
import Collapse from 'react-bootstrap/Collapse'

import sidebar from './Sidebar.module.css'
import cx from 'classnames'

export const SideItem = ({ title, data }) => {
  const [open, setOpen] = useState(false)

  const { link, sublinks } = data
  const hasSublnks = sublinks.length > 0

  const toggle = () => setOpen(prevState => !prevState)
  const loadView = () => console.log('abriendo vista', link)

  return (
    <>
      <Link onClick={hasSublnks ? toggle : loadView}>{title}</Link>
      <Collapse in={open}>
        <div className={cx('list-group', 'list-group-flush', 'bg-light')}>
          {hasSublnks &&
            sublinks.map(sublink => (
              <SubLink key={sublink.title}>{sublink.title}</SubLink>
            ))}
        </div>
      </Collapse>
    </>
  )
}

export const Link = props => (
  <a
    href="#"
    className={cx([
      'list-group-item',
      'list-group-item-action',
      sidebar['link']
    ])}
    onClick={props.onClick}
  >
    {props.children}
  </a>
)

export const SubLink = props => (
  <a
    href="#"
    className={cx([
      'list-group-item',
      'list-group-item-action',
      'pl-5',
      sidebar['link']
    ])}
    onClick={props.onClick}
  >
    {props.children}
  </a>
)
