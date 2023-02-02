import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import GoBack from "../../components/GoBack/Back";
import Tab from "../../components/Tab/Tab";

const Faqs = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={theme ? "light_mode" : "dark_mode"}>
      <GoBack path="/blog" text="Blog / Preguntas-Frecuentes"/>
        <div
          style={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              padding: "10px"
          }}
        >
          <h1 className={theme ? "light_mode" : "dark_mode"}>
            Preguntas Frecuentes
          </h1>

          <Tab text="Feed" variant="tab_nav"/>
          <Tab text="Recomendados" variant="tab_nav"/>
          <div className={theme ? "light_mode" : "dark_mode"}>
            ¿Puedo publicar cualquier tipo de contenido en Groob?
            No, Groob permite la publicación de contenido relacionado con el entretenimiento, como libros electrónicos, podcasts, música y videos. La plataforma también tiene filtros disponibles para detectar y evitar la visualización de contenido explícito y proteger a los usuarios de este tipo de contenido.
          </div>
          <div className={theme ? "light_mode" : "dark_mode"}>
            ¿Cuál es la política de Groob sobre la propiedad intelectual?
            Groob respeta los derechos de autor y propiedad intelectual de los creadores de contenido. Si cree que su contenido ha sido utilizado en la plataforma de manera que infrinja sus derechos de autor, por favor envíenos un aviso de derechos de autor.
          </div>

          <div>
            ¿Qué sucede si deseo eliminar mi contenido de Groob?
            Puede eliminar su contenido de Groob en cualquier momento desde su perfil de usuario. Tenga en cuenta que si ha vendido su contenido a través de la plataforma, no podrá eliminarlo hasta que haya cumplido con todas las obligaciones de venta.
          </div>
          
          <div>
            ¿Cuáles son las opciones de pago disponibles en Groob y cómo se aplican las comisiones a las ventas realizadas en la plataforma?
            Groob ofrece varias opciones de pago para que los creadores de contenido puedan recibir ingresos a través de la plataforma, como tarjetas de crédito y débito y servicios de pago en línea. Groob aplica comisiones sobre las ventas realizadas en la plataforma, y los detalles de estas comisiones están disponibles en la sección de preguntas frecuentes de la plataforma.
          </div>
          
          <div>
            ¿Cómo puedo proteger mi información personal y evitar el acceso no autorizado a mi cuenta de Groob?
            Le recomendamos utilizar contraseñas seguras y no compartir su información de acceso con terceros. También puede habilitar la verificación de dos pasos para proteger su cuenta contra el acceso no autorizado.
          </div>

          <div>
            ¿Cómo puedo monetizar mi contenido en Groob?
            Los creadores de contenido pueden monetizar su contenido a través de la venta de productos digitales exclusivos y la obtención de comisiones por las ventas realizadas en la plataforma.
          </div>

          <div>
            ¿Cómo puedo promocionar mi contenido en Groob?
            Los creadores de contenido pueden promocionar su contenido a través de la opción de subir contenido exclusivo y hacer transmisiones en vivo. También pueden utilizar las herramientas de marketing disponibles en la plataforma para llegar a una audiencia más amplia.
          </div>
          
          <div>
            ¿Qué tipos de contenido están permitidos en Groob?
            Groob permite la publicación de contenido relacionado con el entretenimiento, como libros electrónicos, podcasts, música y videos. También hay filtros disponibles para detectar y evitar la visualización de contenido explícito.
          </div>
          
          <div>
            ¿Cuáles son los requisitos para ser un creador de contenido en Groob?
            Los creadores de contenido deben cumplir con ciertos requisitos para poder utilizar la plataforma, como tener una cuenta verificada y seguir las pautas de la comunidad.
          </div>
          
          <div>
            ¿Cuáles son las opciones de pago disponibles en Groob?
            Groob ofrece varias opciones de pago para que los creadores de contenido puedan recibir ingresos a través de la plataforma, como tarjetas de crédito y débito y servicios de pago en línea.
          </div>
          
          <div>
            ¿Cuáles son las comisiones que se aplican a las ventas en Groob?
            Groob aplica comisiones sobre las ventas realizadas en la plataforma. Los detalles de estas comisiones están disponibles en la sección de preguntas frecuentes de la plataforma.
          </div>
          
          <div>
            ¿Cómo puedo obtener apoyo técnico si tengo problemas con la plataforma?
            Groob ofrece soporte técnico a través de su centro de ayuda y un equipo de soporte dedicado a resolver problemas y preguntas de los usuarios.
          </div>
          <div>
            ¿Cómo puedo reportar contenido inapropiado en Groob?
            Los usuarios pueden reportar contenido inapropiado a través de la opción de reportar contenido disponible en la plataforma.
          </div>


        </div>
    </div>
  );
};

export default Faqs;
