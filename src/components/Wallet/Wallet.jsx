import Card from "../Card/Card"
import { useCard } from "../../hooks/useCard"
const Wallet = ({isOpenCard, closeCard}) => {

  return (
    <Card isOpen={isOpenCard} closeCard={closeCard}>
        <div>
        {/* Agregar copy to clipboard */}
        <br/>
        <h5>Cuentas bancarias y billeteras</h5> <br/>
        <strong>Entidad:</strong> Mercado Pago <br/>
        <strong>CVU:</strong> 0000003100027978940501 <br/>
        <strong>ALIAS:</strong> joe.ars.mp <br/>
        </div>
    </Card>
  )
}

export default Wallet
