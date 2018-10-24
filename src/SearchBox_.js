import React, { Component } from 'react'


export default class SearchBox extends Component {
  render() {
    return (
      <div>
        <form>
          <input type="text"/>
          <button type="submit">Buscar</button>
        </form>
      </div>
    )
  }
}
