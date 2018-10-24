import React  from 'react'
// import React, { Component } from 'react'

import SearchBox from './SearchBox'
import CervezasList from './CervezasList'
import Clock from './Clock'
import './Main.css'

const Main = () => {
  return (
    <div>
      <main>
        <SearchBox />
        <CervezasList />
        <Clock />
      </main>
    </div>
  )
}

export default Main



/* export class Main extends Component {
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
 */