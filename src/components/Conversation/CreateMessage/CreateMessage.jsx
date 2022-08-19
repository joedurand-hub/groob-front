import InputEmoji from "react-input-emoji"


const CreateMessage = ({value, onChange}) => {
  return (
    <div>
        <InputEmoji value={value} onChange={onChange}/>
    </div>
  )
}

export default CreateMessage