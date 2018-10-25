import React, { Component } from 'react'
import PropTypes from 'prop-types'
import SearchBox from '../components/SearchBox'
import CervezasList from '../containers/CervezasList'



export default class CervezasPage extends Component {
  static propTypes = {
    prop: PropTypes
  }

  state = {
    cervezas: [],
    error: '',
    cervezasFiltradas: []
  }
  componentDidMount =  () => {
    this.setState({error: ''}) // inicializo el error
    fetch('http://localhost:8080/api/cervezas')
      .then(response => response.json())
      .then(cervezas => this.setState({ cervezas }))
      .catch(error =>{
        //console.log(`error: ${error}`)
        this.setState({ error: error.message }) // por si recibo otro error
      })
  }
  handleFilter = searchText =>{  
    const { cervezas } = this.state
    const aux = cervezas.filter(
      cerveza => {
        searchText
          .split(' ')
          .some(
            palabra =>
          cerveza.nombre.toUpperCase().includes(palabra.toUpperCase()) || 
            cerveza.descripción.toUpperCase().includes(palabra.toUpperCase())
        )        
      }
    )
    this.setState({cervezasFiltradas: aux})
  }

  render() {
    const { cervezasFiltradas, error } = this.state
    return (
      <div>
      <SearchBox filter={this.handleFilter}/>
      <CervezasList cervezas = {cervezasFiltradas}/>
      {error ? <p>{error}</p> :''}
    </div>
    )
  }
}




