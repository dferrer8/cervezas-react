import React, { Component } from 'react'
import SearchBox from './SearchBox'
import CervezasList from './CervezasList'
import Clock from './Clock'
import './Main.css'

export class Main extends Component {
  render() {
    return (
      <main>
        <SearchBox />
        <CervezasList />
        <Clock />
      </main>
    )
  }
}

export default Main
