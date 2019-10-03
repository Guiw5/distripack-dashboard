import React, { useState } from 'react'
import sidebar from './Sidebar.module.css'
import bootstrap from '../../assets/styles/bootstrap.module.css'
import cx from 'classnames'

export const Sidebar = props => {
  return (
    <div
      className={cx([
        sidebar['wrapper'],
        bootstrap['bg-light'],
        bootstrap['border-right'],
        props.toggled ? sidebar['toggled'] : ''
      ])}
    >
      <div className={sidebar['heading']}>{props.brand}</div>
      <div
        className={cx([sidebar['list-group'], bootstrap['list-group-flush']])}
      >
        {[
          'Productos',
          'Pedidos',
          'Clientes',
          'Cuentas',
          'Proveedores',
          'Stock'
        ].map(title => (
          <a
            href="#"
            className={cx([
              bootstrap['list-group-item'],
              bootstrap['list-group-item-action'],
              bootstrap['bg-light']
            ])}
            onClick={() => props.onClick(title)}
          >
            {title}
          </a>
        ))}
      </div>
    </div>
  )
}
