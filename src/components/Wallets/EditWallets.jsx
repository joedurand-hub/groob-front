import Input from "../Input/Input"
import styles from './editWallets.module.css'

const EditWallets = ({entidad, CBU, CVU, alias}) => {
  const handleInputChange = (e) => {
    console.log(e.target.value)
  }
  // lógica similar al Update de un perfil

    return (
    <div>
        <form>
          <Input label="Entidad" name="Entidad" placeholder="Entidad" type="text" onChange={(e) => handleInputChange(e)}/>
          <Input />
          <Input />
          <Button name="Enviar" variant="primary" />
        </form>
    </div>
  )
}

export default EditWallets