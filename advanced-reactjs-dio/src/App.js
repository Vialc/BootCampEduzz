import React, { Component } from 'react'
import Counter from './Counter'
import Buttom from './buttom/Buttom'

class App extends Component {

  render () {
    return (
      <div>
        <Counter render={
          ({ increment, decrement, count }) => (
            <Buttom 
            increment={increment}
            decrement={decrement}
            count={count}
            />
          )
        }>
        </Counter>
      </div>
    )
  }
}

export default App