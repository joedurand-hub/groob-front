import { useState } from 'react'
import { ENDPOINT } from '../../helpers/constants'
import Input from "../Input/Input"
import Button from '../Button/Button'
import usePost from '../../hooks/usePost'
import Loader from '../Loader/Loader'
import styles from './Index.module.css'

const ForgotPassword = () => {
    const [email, setEmail] = useState("")
    const [handlePassword, setHandlePassword] = useState(false)
    const { data, pending, error, sendData } = usePost()
    const handleNewPassword = () => {
        setHandlePassword(!handlePassword);
    }

    const handleInputChange = (e) => {
        setEmail(e.target.value)
    }
    const handleForgotPassword = () => {
        sendData({
            endpoint: `${ENDPOINT}/reset-password`,
            postData: {
                email
            }
        })
    }
    return (
        <div className={styles.container_reset_password}>
            <button className={styles.button_reset_password} onClick={handleNewPassword}>¿Olvidaste tu contraseña?</button>
            {handlePassword && (
                <form>
                    <Input type="text" placeholder="Escriba su email" onChange={handleInputChange} />
                    {error && (
                        <p className={styles.form_text_input_error}>
                            ¡Ups! Algo salió mal. Volvé a intentarlo.
                        </p>
                    )}
                    {data && (
                        <p className={styles.form_text_input_success}>
                            ¡Perfecto! Revisa tu casilla de email.
                        </p>
                    )}
                    {pending ? (
                        <div className={styles.container_send_email}>
                            <Loader/>
                        </div>

                    ) : (
                        <div className={styles.container_send_email}>
                            <Button name="Enviar" type="submit" variant="primary" onClick={handleForgotPassword} />
                        </div>
                    )}
                </form>
            )
            }
        </div >
    )
}

export default ForgotPassword