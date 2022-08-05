import useRequest from "../hooks/useRequest"
import { getCookie } from "cookies-next";

const getProfile = () => {
    const url = "traer url desde las constantes"
    const token = getCookie("authToken")
    const {data, loading, error} = useRequest(url,token)    
    products.forEach((product) => (total += product.price));
  
    dispatch({
      type: "UPDATE_PRICE",
      payload: {
        total
      }
    });
  };

export default getProfile;