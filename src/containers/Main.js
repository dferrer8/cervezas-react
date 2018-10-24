import React  from 'react'
import { Route, Switch } from 'react-router-dom'
// import React, { Component } from 'react'
import IndexPage from '../view/IndexPage'
import CervezaPage from '../view/CervezaPage'
import CervezasPage from './CervezasPage'
import ContactPage from '../view/ContactPage'
import NoMatch from '../view/NoMatchPage'
/* import SearchBox from './SearchBox'

import CervezasList from './CervezasList'
import Clock from './Clock' */
import './Main.css'

// con funciones quitando los return (si solo hago un render no necesito tantas)
const Main = () => (
      <main>
        <Switch>
          <Route path="/" exact component={IndexPage} />
          <Route path="/cervezas" exact component={CervezasPage} />
          <Route path="/cervezas:id" component={CervezaPage} />
          <Route path="/contact" component={ContactPage} />
          <Route component={NoMatch} />
        </Switch>
{/*         <SearchBox />
        <CervezasList />
        <Clock /> */}
      </main>
)

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