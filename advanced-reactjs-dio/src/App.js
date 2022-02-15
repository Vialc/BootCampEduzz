import React, { Fragment } from 'react'

const materias = [{
  type: 'Quimica'
}, {
  type: 'Matemática'
}, {
  type: 'Linguagens'
}]

function Column({ type }) {
  return (
    <tr>
      <td>{type}</td>
    </tr>
  )
}

function App() {

  const renderColumns = (element, key) => (
    <Fragment key={`column-${key}`}>
      <Column type={element.type} />
    </Fragment>
  )

  return (
    <table>
      {materias.map(renderColumns)}
    </table>
  )
}

export default App