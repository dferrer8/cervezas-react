
import React from 'react'
import PropTypes from 'prop-types'
import CervezaSnippet from '../components/Cervezas/CervezasSnipets'
// ({cervezas}) reemplaza props y quitamos const
const CervezasList = (props) => {
  const { cervezas } = props
  return (
    <div>
      {cervezas.map(cerveza => (
        <CervezaSnippet key={cerveza.nombre} nombre={cerveza.nombre} desc ={cerveza.descripción} envase = {cerveza.envase}/>
      ))}
    </div>
  )
}

CervezasList.propTypes = {
  cervezas: PropTypes.arrayOf(PropTypes.shape({
    nombre: PropTypes.string.isRequired,
    desc: PropTypes.string,
    envase: PropTypes.string
  })
  ).isRequired
}

export default CervezasList

