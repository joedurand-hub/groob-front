import { CardContext } from "../../contexts/ActiveCardContext"
import {useContext} from "react"
import Card from "../Card/Card"

const Wallet = ({openCard, closeCard}) => {

  return (
    <Card >
        <div>
        {/* Agregar copy to clipboard */}
        <br/>
        <h5>Cuentas bancarias y billeteras</h5> <br/>
        <strong>Entidad:</strong> Mercado Pago <br/>
        <strong>CVU:</strong> 0000003100027978940501 <br/>
        <strong>ALIAS:</strong> joe.ars.mp <br/>
            <button onClick={closeCard}> Close </button>
        </div>
    </Card>
  )
}

export default Wallet
