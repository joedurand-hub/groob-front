import { useContext } from "react"
import { ThemeContext } from "../../contexts/ThemeContext"
import styles from './notification.module.css'
import Image from "next/image"
import Link from "next/link"

const Notification = ({ notifications }) => {
    const { theme } = useContext(ThemeContext)

    if(notifications?.length === 0) {
        return (
            <div className={styles.container}>
                <p>
                    No hay notificaciones nuevas o pendientes. 
                </p>
            </div>
        )
    }
    return (
        <>
            {
                notifications?.map((index, notification) => (
                    <Link href={`/feed/${notification.link}`} passHref>
                        <div key={index} className={theme ? `${styles.container_notifications} light_mode`
                            : `${styles.container_notifications} dark_mode`}
                        >
                            <Image src={notification.profilePic} width={30} height={30}
                                alt={`Foto de perfil de ${notification.userName}`} />
                            <p className={theme ? `${styles.text} light_mode` : `${styles.text} dark_mode`}>
                                A <strong>{notification.userName}</strong> {notification.event}.
                            </p>
                        </div>
                    </Link>
                ))
            }
        </>

    )
}


export default Notification