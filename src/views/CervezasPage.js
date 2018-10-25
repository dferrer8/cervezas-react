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
    error: ''
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


  render() {
    const { cervezas, error } = this.state
    return (
      <div>
      <SearchBox />
      <CervezasList cervezas = {cervezas}/>
      {error ? <p>{error}</p> :''}
    </div>
    )
  }
}




