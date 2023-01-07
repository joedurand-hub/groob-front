import { useRouter } from "next/router";
import Button from "../components/Button/Button";

function Terms() {
  const router = useRouter();

  return (
    <div style={{ padding: "10px" }}>
      <h1>¡Bienvenido a Groob!</h1>
      <h2>Términos y condiciones</h2>
      <p>Estos términos y condiciones describen cómo se puede usar el sitio web de Groob, ubicado en <a href="https://groob.com.ar">https://groob.com.ar</a>, <a href="https://groob.online">https://groob.online</a> y <a href="https://groob.store">https://groob.store</a>. Al acceder a este sitio web, está de acuerdo con estos términos y condiciones. Si no está de acuerdo con estos términos y condiciones, no continúe usando Groob.</p>
      <h2>Cookies</h2>
      <p>Utilizamos cookies para personalizar su experiencia en línea. Al acceder a Groob, acepta utilizar las cookies requeridas. Una cookie es un archivo de texto que se coloca en su disco duro por parte de un servidor de páginas web. Las cookies no pueden usarse para ejecutar programas o enviar virus a su computadora. Solo pueden leer las cookies un servidor web en el dominio que le emitió la cookie. Podemos usar cookies para recopilar, almacenar y rastrear información con fines estadísticos o de marketing para operar nuestro sitio web. Algunas cookies son necesarias para que nuestro sitio web funcione. Estas cookies siempre están activas y no necesitan su consentimiento. También acepta las cookies de terceros, que se pueden utilizar a través de servicios proporcionados por terceros si utiliza dichos servicios en nuestro sitio web, como una ventana de visualización de video proporcionada por terceros e integrada en nuestro sitio web.</p>
      <h2>Licencia</h2>
      <p>A menos que se indique lo contrario, Groob y/o sus licenciantes poseen los derechos de propiedad intelectual de todo el material de Groob. Todos los derechos de propiedad intelectual están reservados. Puede acceder a este material para su uso personal sujeto a las restricciones establecidas en estos términos y condiciones. Este acuerdo comienza en la fecha en que accede al sitio web.</p>
      <p>Algunas partes de nuestro sitio web ofrecen a los usuarios la oportunidad de publicar y compartir opiniones e información en ciertas áreas del sitio web. Groob no filtra, edita ni revisa los comentarios antes de que se publiquen en el sitio web. Los comentarios no reflejan los puntos de vista y opiniones de Groob, sino los de la persona que los publica. Groob no será responsable de los comentarios ni de cualquier daño o gasto
        causado y/o sufrido como resultado del uso y/o publicación y/o aparición de los comentarios en este sitio web en la medida en que lo permitan las leyes aplicables. Groob se reserva el derecho de monitorear todos los comentarios y eliminar cualquier comentario que considere inapropiado, ofensivo o que cause el incumplimiento de estos términos y condiciones.</p>
      <p>Usted garantiza y declara que:</p>
      <ul>
        <li>Tiene derecho a publicar los comentarios en nuestro sitio web y tiene todas las licencias y consentimientos necesarios para hacerlo.</li>
        <li>Los comentarios no infringen ningún derecho de autor ni derecho de propiedad intelectual de terceros.</li>
        <li>Los comentarios no son difamatorios ni ilegales y no causarán daño a ninguna persona o entidad.</li>
        <li>No está utilizando nuestro sitio web para promocionar ningún producto o servicio de forma ilegal.</li>
      </ul>
      <p>Si viola estas garantías y declaraciones, Groob puede cancelar su acceso al sitio web y tomar cualquier otra medida que considere necesaria.</p>
      <h2>Exclusión de garantías</h2>
      <p>Este sitio web se proporciona "tal cual" sin ninguna garantía de ningún tipo. Groob no garantiza que el sitio web esté disponible en todo momento o que esté libre de errores. Groob no será responsable de cualquier daño o pérdida causada por el uso de este sitio web, incluyendo daños indirectos o consecuentes.</p>
      <h2>Limitación de responsabilidad</h2>
      <p>En la medida máxima permitida por la ley, Groob no será responsable de ningún daño o pérdida causado por el uso de este sitio web, incluyendo daños indirectos o consecuentes.</p>
      <h2>Cambios a los términos y condiciones</h2>
      <p>Groob se reserva el derecho de modificar estos términos y condiciones en cualquier momento. Publicaremos cualquier cambio en esta página y le notificaremos de cualquier cambio importante por correo electrónico. Es su responsabilidad revisar esta página regularmente para ver si hay cambios. Su uso continuo de este sitio web después de cualquier cambio significa que acepta dichos cambios.</p>
      <h3>Ley aplicable</h3>
      <p>Estos términos y condiciones se regirán e interpretarán de acuerdo con las leyes del país en el que se encuentra el sitio web. Cualquier disputa que surja del uso de este sitio web se resolverá en los tribunales del país en el que se encuentra el sitio web.</p>
      <h2>Transacciones y protección de pagos</h2>
      <p>Utilizamos <a href="https://www.mercadopago.com.ar/">Mercado Pago</a> o cualquier otro tipo de pago aceptado en nuestro sitio web para procesar transacciones, incluyendo ventas, compras de contenido y donaciones. Al realizar una transacción en nuestro sitio web, acepta los términos y condiciones de Mercado Pago o del otro procesador de pagos utilizado. También acepta que Groob no es responsable de ningún problema o disputa que surja durante el proceso de pago.</p>
      <p>Puede presentar una disputa y solicitar un reembolso a través de Mercado Pago o del otro procesador de pagos utilizado. Groob trabajará con usted y el vendedor para resolver cualquier disputa de manera justa y rápida.</p>
      <p>Groob se reserva el derecho de implementar dinero propio dentro de la plataforma, incluyendo dinero fiat electrónico y/o criptomonedas, juntos o de manera independiente, en cualquier momento y en cualquier sección. Todas las transacciones deben realizarse a través de Mercado Pago o del otro procesador de pagos utilizado y aceptado en nuestro sitio web.</p>
      <h2>Contacto</h2>
      <p>Si tiene alguna pregunta o comentario sobre estos términos y condiciones, no dude en ponerse en contacto con nosotros a través de nuestro formulario de contacto en el sitio web o a través de nuestro correo electrónico.</p>

      <footer style={{ display: "flex", margin: "10px", alignItems: "center", justifyContent: "center" }}>

        <Button
          variant="login"
          name="Aceptar"
          onClick={() => {
            router.push("/");
          }}
        />
      </footer>
    </div>
  );
}

export default Terms;
