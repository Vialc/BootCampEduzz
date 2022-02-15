import React from "react"
import PetShop from "./PetShop"

function App () {
  const handleClick = () => {
    console.log('iniciando banho...')
  }
  return (
    <div>
        <PetShop 
          dogs={2}
          cats={3}
          customers="Vitor"
          customerName="Vitor Alcântara"
          onClick={handleClick}
          power={true}
          historico={[`inicio: chegou, `,
                     'meio:comprou, ',
                     'fim: saiu']}
        />
    </div>
  )
}

export default App