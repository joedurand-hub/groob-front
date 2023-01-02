import { useEffect } from 'react';

export const useWebPayments = (total, displayItems) => {
  useEffect(() => {
    if (!('PaymentRequest' in window)) {
      console.log('Este navegador no soporta pagos web');
      return;
    }

    const paymentRequest = new PaymentRequest(displayItems, {
      total,
      requestPayerEmail: true,
    });

    const paymentButton = document.getElementById('payment-button');
    paymentButton.addEventListener('click', () => {
      paymentRequest.show().then((paymentResponse) => {
        paymentResponse.complete('success');
      });
    });
  }, [total, displayItems]);
}


// EL SISTEMA DE TRANSACCIÓN ES CON BRAINTREE, STRIPE O SIMILAR.

// import { useWebPayments } from './useWebPayments';

// function MyComponent() {
//   useWebPayments(1000, [
//     {
//       label: 'Producto 1',
//       amount: { currency: 'ARS', value: '10' },
//     },
//     {
//       label: 'Producto 2',
//       amount: { currency: 'ARS', value: '20' },
//     },
//   ]);

//   return (
//     <div>
//       <button id="payment-button">Pagar</button>
//     </div>
//   );
// }