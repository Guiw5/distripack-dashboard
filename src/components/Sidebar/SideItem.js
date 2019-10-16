import React from 'react'
import { UncontrolledCollapse } from 'reactstrap'

import sidebar from './Sidebar.module.css'
import cx from 'classnames'

export const SideItem = ({ title, data }) => {
  const { link, sublinks } = data
  const hasSublnks = sublinks.length > 0
  const id = `${title.replace(' ', '')}`
  const loadView = () => console.log('abriendo vista', link)

  if (!hasSublnks) return <Link onClick={loadView}>{title}</Link>

  return (
    <>
      {/**This LinkToggler should have an #id to shows sublinks */}
      <Link id={id}>{title}</Link>
      <UncontrolledCollapse toggler={id}>
        <div className={cx('list-group', 'list-group-flush')}>
          {sublinks.map(sublink => (
            <SubLink key={sublink.title}>{sublink.title}</SubLink>
          ))}
        </div>
      </UncontrolledCollapse>
    </>
  )
}

export const Link = ({ id, sublink, onClick, children }) => (
  <a
    id={id}
    href="#"
    className={cx([
      'list-group-item',
      'list-group-item-action',
      'bg-dark',
      sublink && 'pl-5',
      sidebar['link']
    ])}
    onClick={onClick}
  >
    {children}
  </a>
)

export const SubLink = props => <Link {...props} sublink />
