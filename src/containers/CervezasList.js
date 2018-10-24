/* import React, { Component } from 'react'

export default class CervezasList extends Component {
  render() {
    return (
      <div>
        <p>Aquí estaría la lista de cervezas</p>
      </div>
    )
  }
}
 */
import React from 'react'
import PropTypes from 'prop-types'
import CervezaSnippet from '../components/Cervezas/CervezasSnipets'

const CervezasList = () => {
  const {cervezas } = this.props
  return (
    <div>
      {cervezas.map((cerverzas) => 
        <CervezaSnippet nombre={cerveza.nombre} desc ={cerveza.desc}/>
      }
    </div>
  )
}

CervezasList.propTypes = {
  cervezas: PropTypes.arrayOf(PropTypes.shape({
    nombre: PropTypes.string.isRequired,
    desc: PropTypes.string
  }).isRequired
  )
}

export default CervezasList

