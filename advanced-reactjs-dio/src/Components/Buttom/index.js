import React from "react";
import ProptTypes from 'prop-types'

function Button(props) {
    const { children, onClick } = props

    return (
        <button 
            onClick={onClick}
        >
            {children}
        </button>
    )
}

Button.ProptTypes = {
    onClick: ProptTypes.func.isRequired
}

export default Button