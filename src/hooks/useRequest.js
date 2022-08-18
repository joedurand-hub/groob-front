import axios from 'axios'
import { useState, useEffect } from "react";
import { TOKEN } from "../helpers/constants"

const useRequest = (url) => {
    const [data, setData] = useState(undefined)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(undefined)
    useEffect(() => {
        setLoading(true)
        axios.get(`${url}`, { headers: { "authToken": TOKEN }
        }, {withCredentials: true})
        .then(response => {
            setData(response.data)
            setLoading(false)
        })
        .catch(error => {
            setError(true)
            setData(false)
            setLoading(false)
            console.log(error)
        })
        .finally(() => {
            setLoading(false)
        })
    }, [])
    return {data, loading, error};
} 
export default useRequest;