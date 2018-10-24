import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Sidebar.css'

export class Sidebar extends Component {
  render() {
    return (
      <aside>
        <nav>
          <ul>
            <li>
              <Link to= '/'>Inicio</Link>
              <Link to= '/cervezas'>Cervezas</Link>
              {/* <Link to= '/cervezas/listado'>Listado de cervezas</Link> */}
              {/* <Link to= '/cervezas/buscador'>Buscador</Link> */}
              <Link to= '/contact'>Contactar</Link>
            </li>
          </ul>
        </nav>
      </aside>
    )
  }
}

export default Sidebar
