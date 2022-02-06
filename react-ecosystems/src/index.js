import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';


class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      clock: 1000,
      copo: 'agua'
    }
  }

  alterarCopo = () => {
    this.setState({
      copo: 'refrigerante'
    })
  }

  render() {
    const { clock, copo } = this.state
    return (
      <div>
        <h1>{clock}</h1>
        <button onClick={ () => this.alterarCopo()}>{copo}</button>
      </div>
    )
  }
}


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
