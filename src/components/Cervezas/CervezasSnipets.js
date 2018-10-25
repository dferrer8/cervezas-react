import React from 'react'
import PropTypes from 'prop-types'

function CervezasSnipets({nombre, desc}) {
  // const {nombre, desc} = props
  return (
    <div>
      <article>
        <h1>{nombre}</h1>
        {desc ? <p>{desc}</p> : ''}
      </article>
    </div>
  )
}

CervezasSnipets.propTypes = {
  nombre: PropTypes.string.isRequired,
  desc: PropTypes.string
}

export default CervezasSnipets

