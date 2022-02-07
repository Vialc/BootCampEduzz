import { useState } from "react";
import Button from "../button";

const Card = () => {

    const [valor, setValor] = useState(0)

    function Adicionar() {
        setValor(valor + 1)
    }

    function Subtrair() {
        setValor(valor - 1)
    }

    return (
        <div className="card">
            <h5 className="card-header">Meu Card</h5>
            <div className="card-body">
                <p >{valor}</p>
                <Button
                    className="btn btn-success"
                    onClick={Adicionar}
                >
                    Adicionar
                </Button>
                <Button
                    className="btn btn-danger"
                    onClick={Subtrair}
                >
                    Subtrair
                </Button>
            </div>
        </div>
    )
}

export default Card;