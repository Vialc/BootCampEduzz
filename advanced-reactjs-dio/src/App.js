import React, { useState } from "react"
import Button from "./Components/Buttom"
import Calc from "./Components/Calc"
import Table from "./Components/Table"

function App() {

  const [value, setValue] = useState(0)
  const [min, setMin] = useState(0)
  const [max, setMax] = useState(30)

  const handleClick = () => {
    setMin(10)
  }

  const handleCalc = ({ target }) => {
    const value = target.value
    setValue(min + max + value)
  }

  return (
    <>
      <div>
        <Button
          onClick={handleClick}
        >
          Adicionar ao carrinho
        </Button>
      </div>
      <div>
        <h1>Valor Calculado: {value}</h1>
        <Calc
          min={min}
          max={max}
          onChange={handleCalc}
        />
      </div>
      <div>
        <Table 
          products={[
            { id: 1, name: 'Cheese', price: 4.9, stock: 20 },
            { id: 2, name: 'Milk', price: 1.9, stock: 32 },
            { id: 3, name: 'Yoghurt', price: 2.4, stock: 12 },
            { id: 4, name: 'Heavy Cream', price: 3.9, stock: 9 },
            { id: 5, name: 'Butter', price: 0.9, stock: 99 },
            { id: 6, name: 'Sour Cream ', price: 2.9, stock: 86 },
            { id: 7, name: 'Fancy French Cheese 🇫🇷', price: 99, stock: 12 },
          ]}
        />
      </div>
    </>
  )
}

export default App