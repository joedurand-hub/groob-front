import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import GoBack from "../../components/GoBack/Back";
import Link from "next/link";
import { useRouter } from 'next/router';

// notifications/success?collection_id=1310744205&collection_status=approved&
//payment_id=1310744205
//&status=approved
//&external_reference=null&payment_type=account_money&
//merchant_order_id=6472434290&preference_id=1216478638-7d90f482-e3f4-4451-aed1-03f6c1c0de49&site_id
//=MLA&processing_mode=aggregator&merchant_account_id=null


const Success = () => {
    const { theme } = useContext(ThemeContext);
    const router = useRouter();
    console.log("router: ", router)
    console.log("router.query:", router.query)
    // const { payment_id, status, merchant_order_id } = router.query;
    // const query = router.query;

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
            {/* <p className={theme ? "light_mode" : "dark_mode"}>
              Próximamente disponible.
            </p> */}
            {/* <h2>Código de pago: {payment_id}</h2>
            <h2>Estado: {status}</h2>
            <h2>ID de la orden de compra: {merchant_order_id}</h2>
            <h3></h3>
            <p>Ya puedes continuar navegando.</p> */}
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
