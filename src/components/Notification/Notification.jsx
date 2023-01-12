import { useContext } from "react"
import { ThemeContext } from "../../contexts/ThemeContext"
import styles from './notification.module.css'
import Image from "next/image"
import Link from "next/link"

const Notification = ({ notifications }) => {
    const { theme } = useContext(ThemeContext)
    console.log(notifications)
    if (notifications?.length === 0) {
        return (
            <div className={styles.container}>
                <p>
                    No hay notificaciones nuevas o pendientes.
                </p>
            </div>
        )
    }
    return (
        <article className={styles.notifications}>
            {
                notifications?.map((notification, index) => {

                    if (notification.event === "le ha gustado tu post" || notification.event === "ha dejado un comentario") {
                        return (
                            <div key={index}>
                                <Link href={`/feed/${notification.link}`}
                                    passHref
                                >
                                    <div className={theme ? `${styles.container_notifications} light_mode`
                                        : `${styles.container_notifications} dark_mode`}>
                                        <Image style={{ borderRadius: "50%" }} src={notification.profilePic} width={35} height={35}
                                            alt={`Foto de perfil de ${notification.userName}`} />
                                        <p className={theme ? `${styles.text} light_mode` : `${styles.text} dark_mode`}>
                                            <strong>{notification.userName}</strong> {notification.event}
                                        </p>
                                    </div>
                                </Link>
                            </div>

                        )
                    }
                    if (notification.event === "te ha seguido!" || notification.event === "ya no te sigue.") {
                        return (
                            <div key={index}>
                                <Link href={`/user/${notification.link}`}
                                    passHref
                                >
                                    <div className={theme ? `${styles.container_notifications} light_mode`
                                        : `${styles.container_notifications} dark_mode`}>
                                        <Image style={{ borderRadius: "50%" }} src={notification.profilePic} width={35} height={35}
                                            alt={`Foto de perfil de ${notification.userName}`} />
                                        <p className={theme ? `${styles.text} light_mode` : `${styles.text} dark_mode`}>
                                            <strong>{notification.userName}</strong> {notification.event}
                                        </p>
                                    </div>
                                </Link>
                            </div>
                        )
                    }
                }
                )
            }
        </article>

    )
}


export default Notification