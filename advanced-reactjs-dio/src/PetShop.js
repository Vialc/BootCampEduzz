import React from "react";
import ProptTypes from "prop-types"

function PetShop (props) {

    const { dogs, cats, customers, customerName, onClick,
            power, historico } = props

    return (
        <div>
            <h1>Dogs: {dogs}</h1>
            <h1>Cats: {cats}</h1>
            <div>
                Quantidade de Clientes: {customers}
            </div>
            <div>
                Nome do Cliente: {customerName}
            </div>
            <div>
                <button onClick={onClick}>Iniciar Banho</button>
            </div>
            <div>
                Ligado: {power}
            </div>
            <div>
                Histórico: {historico}
            </div>
        </div>
    )
}

PetShop.defaultProps = {
    cats: 0,
    customers: []
}

PetShop.ProptTypes = {
    dogs: ProptTypes.number.isRequired,
    cats: ProptTypes.number.isRequired,
    customers: ProptTypes.array.isRequired,
    customerName: ProptTypes.string.isRequired,
    onClick: ProptTypes.func.isRequired,
    power: ProptTypes.bool.isRequired,
    historico: ProptTypes.object.isRequired
}

export default PetShop