import React, { Component } from 'react'
import PropTypes from 'prop-types'
import SearchBox from '../components/SearchBox'
import CervezasList from '../containers/CervezasList'



export default class CervezasPage extends Component {
  static propTypes = {
    prop: PropTypes
  }

  state = {
    cervezas: []
  }
  componentDidMount =  () => {
    fetch('http://localhost:8080/api/cervezas')
      .then(response => response.json())
      .then(cervezas => this.setState({ cervezas }))
      .catch(error =>{})
  }


  render() {
    const { cervezas } = this.state
    return (
      <div>
      <SearchBox />
      <CervezasList cervezas = {cervezas}/>
    </div>
    )
  }
}




