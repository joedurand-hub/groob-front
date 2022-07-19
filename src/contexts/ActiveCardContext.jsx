import { createContext, useState } from "react";

const CardContext = createContext()

const ActiveCardProvider = ({ children }) => {
    const [activeCard, setActiveCard] = useState(true)
    const handleCardActivation = () => {
        setActiveCard(!activeCard)
    }

  return (
    <CardContext.Provider value={{activeCard, handleCardActivation}}>
      {children}
    </CardContext.Provider>
  );
};

export { CardContext, ActiveCardProvider }


// Example to use it in a route:
// const { activeCard, handleCardActivation } = useContext(CardContext)
// const handleClick = () => {
//   handleCardActivation()
// }

// return (
// <div> 
//     <button onClick={handleClick}> Mostrar card y su theme </button>
//     <Card value={activeCard}> Botones e info</Card>
// </div>
// )


// Interesting places to implement it:
// - "Options" button on posts
// - Menu button
// - Show a list of contacts to forward things to them.
// - Fill Premium functionality forms, add bank accounts