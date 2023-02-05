import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useState } from 'react';
import { ENDPOINT } from "../helpers/constants"
import logo from "../../public/Logo.png";
import Input from "../components/Input/Input"
import Button from "../components/Button/Button"
import Loader from "../components/Loader/Loader"
import usePut from "../hooks/usePut"
import Image from 'next/image';

const ResetPassword = () => {
    const router = useRouter();
    const { info, pending, error, sendUpdatedData } = usePut()
    const [newPassword, setNewPassword] = useState("")
    const [comparePassword, setcomparePassword] = useState("")
    const [diferent, setDiferent] = useState("")
    const [truePass, setTruePass] = useState("")
    const token = router.query.token

    useEffect(() => {
        if (newPassword === comparePassword && newPassword.length >= 6 && newPassword.length <= 16) {
            setTruePass("Las contraseñas coinciden!")
            setDiferent("")
            if (info) {
                setTruePass("")
            }
            if (error) {
                setTruePass("")
                setDiferent("¡Ups! Se produjo un error. Volvé a intentarlo más tarde.")
            }
        }
        if (newPassword != comparePassword) {
            setTruePass("")
            setDiferent("Las contraseñas no coinciden")
        }
        if (newPassword.length < 6) {
            setTruePass("")
            setDiferent("La contraseña debe ser mayor a 6 caracteres")
        }
        if (newPassword.length > 16) {
            setTruePass("")
            setDiferent("La contraseña debe ser menor a 16 caracteres")
        }
        if (newPassword.length === 0 && comparePassword.length === 0) {
            setTruePass("")
            setDiferent("")
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [newPassword, comparePassword])


    const handleSubmit = (e) => {
        e.preventDefault()
        if (newPassword.length >= 6 && newPassword.length <= 16) {
            sendUpdatedData({
                endpoint: `${ENDPOINT}/change-password`,
                putData: {
                    password: newPassword,
                },
                query: token,
            });
        }
        setNewPassword("");
        setcomparePassword("");
    }

    return (
        <div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", margin: "20px" }}>
                <Image src={logo} width="120" height="75" alt="logo" />
                <h1>Reset Password</h1>
                <form
                    onSubmit={handleSubmit}
                >
                    <Input
                        type="password"
                        placeholder="Contraseña"
                        value={newPassword}
                        maxLength={16}
                        minLength={6}
                        pattern="[A-Za-z0-9]{6,16}"
                        required
                        onChange={(e) => setNewPassword(e.target.value)}
                    />
                    <Input
                        type="password"
                        placeholder="Repetir contraseña"
                        value={comparePassword}
                        maxLength={16}
                        minLength={6}
                        pattern="[A-Za-z0-9]{6,16}"
                        title="La contraseña debe tener entre 6 y 16 caracteres y al menos una letra mayúscula, una letra minúscula y un número"
                        required
                        onChange={(e) => setcomparePassword(e.target.value)}
                    />
                    {truePass && (
                        <p style={{ color: "green", display: "flex", alignItems: "center", justifyContent: "center" }}><strong>{truePass}</strong></p>
                    )}
                    {diferent && (
                        <p style={{ color: "red", display: "flex", alignItems: "center", justifyContent: "center", }}><strong>{diferent}</strong></p>
                    )}
                    {info && (
                        <p style={{ color: "blue", display: "flex", alignItems: "center", justifyContent: "center", }}><strong>Contraseña cambiada con éxito!</strong></p>
                    )}
                    {pending ? (
                        <Loader />
                    ) : (
                        <Button name="Enviar" variant="login" type="submit" />

                    )}
                </form>
            </div>
        </div>
    )
}

export default ResetPassword