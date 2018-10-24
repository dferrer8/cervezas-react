import React, { Component } from 'react'
import SearchBox from './SearchBox'
import CervezasList from './CervezasList'
import './Main.css'

export class Main extends Component {
  render() {
    return (
      <main>
        <SearchBox />
        <CervezasList />
      </main>
    )
  }
}

export default Main
