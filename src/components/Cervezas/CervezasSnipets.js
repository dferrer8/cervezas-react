import React from 'react'
import PropTypes from 'prop-types'

function CervezasSnipets() {
  return (
    <div>
      <article>
        <h1>{props.nombre}</h1>
        {props.desc ? <p>{props.desc}</p> : ''}
      </article>
    </div>
  )
}

CervezasSnipets.propTypes = {
  nombre: PropTypes.string.isRequired,
  desc: PropTypes.string
}

export default CervezasSnipets

