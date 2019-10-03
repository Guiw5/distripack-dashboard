import React from 'react'

export const PageContent = props => {
  return (
    <div className={'container-fluid'}>
      <h1 className={'mt-4'}>{props.title}</h1>
    </div>
  )
}
