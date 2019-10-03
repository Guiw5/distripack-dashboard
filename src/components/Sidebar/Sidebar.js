import React from 'react'
import sidebar from './Sidebar.module.css'

import cx from 'classnames'
import { SideItem } from './SideItem'

export const Sidebar = props => {
  const data = {
    Productos: {
      link: '',
      sublinks: [
        { title: 'Lista de Precios', link: '' },
        { title: 'Administrar Precios', link: '' }
      ]
    },
    Pedidos: { link: '', sublinks: [] },
    Clientes: { link: '', sublinks: [] },
    Cuentas: { link: '', sublinks: [] },
    Proveedores: { link: '', sublinks: [] },
    Stock: { link: '', sublinks: [] }
  }

  return (
    <div
      className={cx([
        sidebar['wrapper'],
        'bg-light border-right',
        props.toggled ? sidebar['toggled'] : ''
      ])}
    >
      <div className={sidebar['heading']}>{props.brand}</div>
      <div
        className={cx([sidebar['list-group'], 'list-group-flush', 'bg-light'])}
      >
        {Object.keys(data).map(title => (
          <SideItem key={title} title={title} data={data[title]} />
        ))}
      </div>
    </div>
  )
}
