import { createContext, useReducer  } from "react"
import profileReducer, { initialState } from "../reducers/profileReducer"

const ProfileContext = createContext(profileReducer);

export const ProfileProvider = ({ children }) => {
    const [state, dispatch] = useReducer(shopReducer, initialState);
    const updatedCart = state.products.concat(product);
	updatePrice(updatedCart)

  dispatch({
    type: "ADD_TO_CART",
    payload: {
      products: updatedCart
    }
  });
};