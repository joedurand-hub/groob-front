import React from "react";

// notifications/success?collection_id=1310744205&collection_status=approved&
//payment_id=1310744205
//&status=approved
//&external_reference=null&payment_type=account_money&
//merchant_order_id=6472434290&preference_id=1216478638-7d90f482-e3f4-4451-aed1-03f6c1c0de49&site_id
//=MLA&processing_mode=aggregator&merchant_account_id=null

import { useRouter } from 'next/router';

function Success() {
    const router = useRouter();

    const { payment_id, status, merchant_order_id } = router.query;
    const query = router.query;

    return (
        <div>
            <h1>
                <span>Pago aprobado!</span>
            </h1>
            <h2>Código de pago: {payment_id}</h2>
            <h2>Estado: {status}</h2>
            <h2>ID de la orden de compra: {merchant_order_id}</h2>
            <h3></h3>
            <p>Ya puedes continuar navegando.</p>
        </div>
    );
}
export default Success;

// Success.getInitialProps = async ({ query }) => {
//   const {param} = query

//   return {id}
// }
