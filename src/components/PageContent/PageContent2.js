import React, { useState, useEffect } from 'react'
import http from '../../http/client'

import BootstrapTable from 'react-bootstrap-table-next'
import paginationFactory from 'react-bootstrap-table2-paginator'
import ToolkitProvider, {
  Search,
  CSVExport
} from 'react-bootstrap-table2-toolkit'

const { SearchBar, ClearSearchButton } = Search
const { ExportCSVButton } = CSVExport

const PageContent = props => {
  const columns = [
    {
      dataField: 'id',
      text: 'Cod',
      headerStyle: { textAlign: 'center', width: '60px' }
    },
    {
      dataField: 'nick',
      text: 'Alias',
      sort: true,
      headerStyle: { textAlign: 'center', width: '260px' },
      formatter: (cell, row) =>
        cell.charAt(0).toUpperCase() + cell.slice(1).toLowerCase()
    },
    {
      dataField: 'description',
      text: 'Descripción',
      sort: true,
      headerStyle: { textAlign: 'center', width: '550px' },
      formatter: (cell, row) =>
        cell.charAt(0).toUpperCase() + cell.slice(1).toLowerCase()
    },
    {
      dataField: 'quantity',
      text: 'Cant',
      searchable: false,
      headerStyle: { textAlign: 'center', width: '80px' }
    },
    {
      dataField: 'price',
      text: 'Precio',
      searchable: false,
      headerStyle: { textAlign: 'center', width: '80px' }
    }
  ]

  const [products, setProducts] = useState([])

  useEffect(() => {
    async function fetchProducts() {
      try {
        const { data } = await http.get('/skus')
        setProducts(data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchProducts()
  }, [])

  const selectRow = {}

  // if (products.length === 0) return null
  // if (products.length > 0) console.log('products', products)

  return (
    <div className={'container-fluid'}>
      <h1 className={'mt-4'}>{props.title}</h1>

      <ToolkitProvider
        bootstrap4
        keyField={'id'}
        columns={columns}
        data={products}
        search
      >
        {props => {
          console.log('props', props.baseProps, props.searchProps)
          return (
            <div>
              <h3>Input something at below input field:</h3>
              <SearchBar {...props.searchProps} />
              <ClearSearchButton {...props.searchProps} />
              <hr />
              <BootstrapTable
                {...props.baseProps}
                pagination={paginationFactory()}
              />
              <ExportCSVButton {...props.csvProps}>
                Export CSV!!
              </ExportCSVButton>
            </div>
          )
        }}
      </ToolkitProvider>
    </div>
  )
}

export default PageContent
