import React from 'react'
import PropTypes from 'prop-types'

const CervezasSnipets = ({nombre, desc}) => (
  // const {nombre, desc} = props
  
    <div>
      <article>
        <h1>{nombre}</h1>
        {desc ? <p>{desc}</p> : ''}
      </article>
    </div>
)

CervezasSnipets.propTypes = {
  nombre: PropTypes.string.isRequired,
  desc: PropTypes.string
}

export default CervezasSnipets

