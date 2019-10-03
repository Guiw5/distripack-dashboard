import React from 'react'

import bootstrap from '../../assets/styles/bootstrap.module.css'

export const PageContent = props => {
  return (
    <div className={bootstrap['container-fluid']}>
      <h1 className={bootstrap['mt-4']}>{props.title}</h1>
      <p>
        The starting state of the menu will appear collapsed on smaller screens,
        and will appear non-collapsed on larger screens. When toggled using the
        button below, the menu will change.
      </p>
      <p>
        Make sure to keep all page content within the{' '}
        <code>#page-content-wrapper</code>. The top navbar is optional, and just
        for demonstration. Just create an element with the{' '}
        <code>#menu-toggle</code> ID which will toggle the menu when clicked.
      </p>
    </div>
  )
}
