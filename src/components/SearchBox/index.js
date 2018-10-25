import React, { Component } from 'react'
import PropTypes from 'prop-types'


export default class SearchBox extends Component {
  // paso la propiedad como función requerida
  static propTypes = {
    filter: PropTypes.func.isRequired
  }

  state = {
    disabled: true,
    busqueda: '',
    searchText: ''
  }

  handleChange = evento => {
    //this.setState({disabled: evento.target.value ? false: true}) // controlo estados
    const searchText = evento.target.value
    this.setState({
      disabled: searchText ? false: true,
      searchText
    }) 
    this.props.filter(searchText)
  }
  // controlo el evento porque ocurre en mi aplicacion
  handleSubmit = evento => {
    evento.preventDefault() // evito que se vaya por defecto fuera
    // this.props.filter(this.state.searchText) // este texto se pasara desde arriba
  }
  
  render() {
    const {disabled} = this.state
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleChange}/>
          <button type="submit" disabled={disabled}>
            Buscar
          </button>
        </form>
      </div>
    )
  }
}


