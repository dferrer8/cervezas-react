import React from 'react'

export default class Clock extends React.Component {

    state = {date: new Date()};
    // Defino primer id - ejecuta esta funcion cada 1000 ms

    componentDidMount() {
      this.timerID = setInterval(
        () => this.tick(),
        1000
      );
    }
    // Si quito el componente, limpio y quito la función.
    componentWillUnmount() {
      clearInterval(this.timerID);
    }
    // cambia el estado calcula la hora
    tick() {
      this.setState({
        date: new Date()
      });
    }
  

  
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}