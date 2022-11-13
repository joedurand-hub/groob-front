import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import GoBack from "../../components/GoBack/Back";
import Link from "next/link";
import { useRouter } from 'next/router';

// notifications/success?collection_id=1310744205&collection_status=approved&
//&external_reference=null&payment_type=account_money&
//merchant_order_id=6472434290&preference_id=1216478638-7d90f482-e3f4-4451-aed1-03f6c1c0de49&site_id
//=MLA&processing_mode=aggregator&merchant_account_id=null


const Success = () => {
    const { theme } = useContext(ThemeContext);
    const router = useRouter();
    console.log("router.query:", router.query)

    return (
        <div>
        <GoBack path="/feed" />
        <Link href="/feed">
          <div
            style={{
              marginTop: "50%",
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <h1 className={theme ? "light_mode" : "dark_mode"}>
                Pago aprobado!
            </h1>
            <h3>Código de pago: {router.query.payment_id}</h3>
            <h2>Estado: {router.query.status}</h2>
            <h2>ID de la orden de compra: {router.query.merchant_order_id}</h2>
            <h2>Código de Referencia: {router.query.preference_id}</h2>
            <h2></h2>
            <p>Ya puedes continuar navegando.</p>
          </div>
        </Link>
        </div>
    );
}
export default Success;

// Success.getInitialProps = async ({ query }) => {
//   const {param} = query

//   return {id}
// }
