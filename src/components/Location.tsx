import React from 'react'
import dataContext from '../ContextData'

export default function Location() {

  const context = React.useContext(dataContext)

  return <h1>{context.data.name}</h1>
  
}
