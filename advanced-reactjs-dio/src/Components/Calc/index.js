import React from "react";
import ProptTypes from "prop-types"

function Calc (props) {
    const { min, max, onChange } = props

    return (
        <div>
            <p>Valor mínimo: {min}</p> 
            <p>Valor máximo: {max}</p> 
            <input type="text" onChange={onChange}/>
        </div>
    )
}

Calc.ProptTypes = {
    min: ProptTypes.number.isRequired,
    max: ProptTypes.number.isRequired,
    onChange: ProptTypes.func
}

export default Calc