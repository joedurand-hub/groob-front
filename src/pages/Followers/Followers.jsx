import { useContext } from 'react'
import { CardContext } from '../../contexts/ActiveCardContext'
import Card from '../../components/Card/Card'

const Followers = () => {
  const { activeCard, handleCardActivation } = useContext(CardContext)
    const handleClick = () => {
      handleCardActivation()
    }

  return (
    <div> 
        <button onClick={handleClick}> Mostrar card y su theme </button>
        <Card value={activeCard}> Botones e info</Card>
    </div>
  )
}

export default Followers