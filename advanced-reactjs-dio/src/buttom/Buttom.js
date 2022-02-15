import React, { Component } from 'react'
import Counter from '../Counter'


const Buttom = ({increment, decrement, count }) => (
    <div>
        <h1>Valor Atual: {count}</h1>
        <div>
            <button onClick={increment}>Adicionar 1</button>
        </div>
        <div>
            <button onClick={decrement}>Diminuir 1</button>
        </div>
    </div>
)

export default Buttom