import axios from 'axios'
import { useState, useEffect } from "react";
// axios.defaults.withCredentials = true

const initialState = {
    data: undefined,
    loading: true,
    error: undefined,
}

const useRequest = (url, token) => {
    const [requestData, setRequestData] = useState(initialState)
    useEffect(() => {
        axios.get(`${url}`, {
            headers: {
                "auth-token": token
            }
        }, {withCredentials: true})
        .then(response => setRequestData({
            data: response.data,
            loading: false,
            error: undefined,
        }))
        .catch(error => {
            console.log(error)
            setRequestData({
                data: undefined,
                loading: false,
                error: error.message,
            })
        })
    }, [])
    return requestData;
} 

export default useRequest;