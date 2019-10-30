import React, { useState, useEffect } from 'react'
import http from '../../http/client'

import {
  BootstrapTable,
  TableHeaderColumn,
  ShowSelectedOnlyButton
} from 'react-bootstrap-table'
import pageContent from './PageContent.module.css'

// createShowSeletedOnlyButton = (onClick, showSelected) => {
//   console.log('showSelected', showSelected)
//   return (
//     <ShowSelectedOnlyButton
//       onClick={onClick}
//       showAllText="Ver Todos"
//       showOnlySelectText="Ver Seleccionados"
//     />
//   )
// }

const PageContent = props => {
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

  const selectRow = {
    mode: 'checkbox',
    bgColor: '#00bfff',
    hideSelectColumn: false,
    clickToSelectAndEditCell: true,
    showOnlySelected: true
  }

  return (
    <div className={'container-fluid'}>
      <h1 className={'mt-4'}>{props.title}</h1>
      <BootstrapTable
        bordered
        condensed
        data={products}
        exportCSV
        search
        pagination
        multiColumnSort
        csvFileName={'listaPrecios'}
        hover
        striped
        multiColumnSearch
        cellEdit={{
          mode: 'click',
          blurToSave: true
        }}
        selectRow={selectRow}
        searchPlaceholder={'Ingrese el código o descripción del producto'}
        version={'4'}
        options={{
          sizePerPage: 10,
          exportCSVText: 'Descargar Listado',
          csvFileName: 'ListaPrecios'
          // showSelectedOnlyBtn: createShowSeletedOnlyButton
        }}
      >
        <TableHeaderColumn
          headerAlign="center"
          dataField="id"
          width={'60'}
          csvHeader={'Cod'}
          isKey={true}
        >
          Cod
        </TableHeaderColumn>
        <TableHeaderColumn
          headerAlign="center"
          dataField="nick"
          csvHeader={'Alias'}
          dataSort={true}
          editable={false}
          width={'260'}
        >
          Alias
        </TableHeaderColumn>
        <TableHeaderColumn
          headerAlign="center"
          dataField="description"
          width={'550'}
          csvHeader={'Descripción'}
          dataSort={true}
        >
          Descripción
        </TableHeaderColumn>
        <TableHeaderColumn
          headerAlign="center"
          searchable={false}
          csvHeader={'Cant'}
          dataField="quantity"
          width={'80'}
          editable={false}
        >
          Cant
        </TableHeaderColumn>
        <TableHeaderColumn
          headerAlign="center"
          searchable={false}
          csvHeader={'Precio'}
          dataField="price"
          dataSort={true}
          width={'80'}
          dataFormat={cell => {
            //   try {
            //     return `$${cell.toFixed(2)}`
            //   } catch (error) {
            //     console.log(error)
            //   }
            // }}
            return cell
          }}
        >
          Precio
        </TableHeaderColumn>
      </BootstrapTable>
    </div>
  )
}

export default PageContent
