import { useRouter } from "next/router";
import Button from "../components/Button/Button";

const Policy = () => {
    const router = useRouter();
    return (
        <div style={{ padding: "10px" }}>
            <h1>
                Política de privacidad
            </h1>
            <p>En Groob, valoramos su privacidad y tomamos medidas para protegerla. Esta política de privacidad describe cómo recopilamos, utilizamos y compartimos su información cuando utiliza nuestro sitio web y servicios.</p>
            <h2>Información que recopilamos:</h2>
            <p>Cuando se registra en Groob o utiliza nuestros servicios, podemos recopilar información personal como su nombre, dirección de correo electrónico, número de teléfono y dirección de envío. También podemos recopilar información no personal como la dirección IP de su dispositivo, tipo de navegador y preferencias de idioma. Utilizamos cookies y tecnologías similares para recopilar información sobre sus actividades en nuestro sitio web y servicios. Las cookies son archivos de texto que se colocan en su disco duro y nos permiten mejorar su experiencia en línea y rastrear su uso de nuestro sitio web. Puede configurar su navegador para rechazar las cookies, pero esto puede afectar la funcionalidad de nuestro sitio web.</p>
            <p>Utilizamos la información que recopilamos para proporcionar y mejorar nuestros servicios, personalizar su experiencia y comunicarnos con usted. También podemos utilizar esta información para fines estadísticos y de marketing</p>
            <h2>Compartimos su información:</h2>
            <p>Podemos compartir su información con terceros que proporcionan servicios en nuestro nombre, como procesadores de pagos y servicios de envío. Estos terceros están sujetos a confidencialidad y sólo pueden utilizar su información para proporcionar estos servicios en nuestro nombre. También podemos compartir su información con autoridades regulatorias o judiciales si se nos requiere por ley o si creemos de buena fe que es necesario para cumplir con la ley o proteger nuestros derechos o los de terceros.</p>
            <h2>Enlaces a sitios web de terceros:</h2>
            <p>Nuestro sitio web puede contener enlaces a sitios web de terceros. No tenemos control sobre las prácticas de privacidad de estos sitios web y le recomendamos que revise las políticas de privacidad de cada uno de ellos. Esta política de privacidad sólo se aplica a la información recopilada por Groob.</p>
            <h2>Seguridad:</h2>
            <p>Tomamos medidas de seguridad razonables para proteger su información personal de pérdida, uso indebido y acceso no autorizado. Sin embargo, no podemos garantizar la seguridad de la información que nos proporciona debido a la naturaleza insegura de Internet.</p>
            <h2>Cambios a esta política de privacidad:</h2>
            <p>Podemos actualizar esta política de privacidad de vez en cuando. Le notificaremos de cualquier cambio importante publicando una nueva versión en nuestro sitio web. Le recomendamos que revise esta política de vez en cuando para estar al tanto de cualquier cambio.</p>
            <h2>Contacto:</h2>
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
    )
}

export default Policy