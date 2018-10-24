import React, { Component } from 'react'


export default class SearchBox extends Component {

  state = {
    disabled: true
  }

  handleChange = evento => {
/*     // console.log('Me han pulsado')
    console.log(evento.target.value) // envia el texto que voy escribiendo. Tiene un evento que cambia el contenido consigo al input podría poner un value="Escribe cerveza"
    this.setState({disabled:false}) // activa boton */
    this.setState({busqueda: evento.target.value}, () => 
      console.log(this.state.busqueda)) //es asincrono
    
    // console.log(evento.target.value)

    this.setState({disabled: evento.target.value ? false: true})// controlo estados
  }
  
  render() {
    return (
      <div>
        <form>
          <input type="text" onChange={this.handleChange}/>
          <button type="submit" disabled={this.state.disabled}>
            Buscar
          </button>
        </form>
      </div>
    )
  }
}
