import { getCookie } from "cookies-next";
import { useWebNotifications } from '../../hooks/useWebNotifications';
import { useRouter } from "next/router";

const Index = () => {
  const router = useRouter()
  const token = getCookie("authtoken")
  if(!token) {
    return router.push("/login")
  }

  const notis = useWebNotifications('Nueva notificación', {
    body: 'Hola, probando noti jeje',
  });
  console.log(notis)
  return (
    <div>
      Notificaciones habilitadas

    </div>
  )
}

export default Index