import React from 'react'
import sidebar from './Sidebar.module.css'

import cx from 'classnames'
import { SideItem } from './SideItem'

const data = {
  Productos: {
    link: 'products',
    sublinks: [
      { title: 'Lista de Precios', link: '' },
      { title: 'Administrar Precios', link: '' }
    ]
  },
  Pedidos: { link: 'orders', sublinks: [] },
  Clientes: { link: 'clients', sublinks: [] },
  Cuentas: {
    link: 'accounts',
    sublinks: [
      { title: 'Cuentas Corrientes', link: '' },
      { title: 'Administrar CC', link: '' }
    ]
  },
  Proveedores: { link: 'suppliers', sublinks: [] },
  Stock: { link: 'inventary', sublinks: [] }
}

export const Sidebar = props => {
  return (
    <div
      className={cx([
        sidebar['wrapper'],
        'bg-dark',
        'sidebar',
        props.toggled ? sidebar['toggled'] : ''
      ])}
    >
      <div className={cx(sidebar['heading'], 'bg-nav')}>{props.brand}</div>
      <div className={cx([sidebar['list-group'], 'list-group-flush'])}>
        {Object.keys(data).map((title, index) => (
          <SideItem key={index} title={title} data={data[title]} />
        ))}
      </div>
    </div>
  )
}
