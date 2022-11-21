import axios from 'axios'
import { useState, useEffect } from "react";
import { getCookie } from "cookies-next";
import { useRouter } from 'next/router';

const useRequest = (url) => {
    const token = getCookie("authtoken")
    const router = useRouter()
    useEffect(() => {
        if (token === undefined) {
            router.push("/register");
        }
    }, [token])

    const [data, setData] = useState(undefined)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(undefined)
    useEffect(() => {
        setLoading(true)
        axios.get(`${url}`, { headers: { authtoken: token } },
            { withCredentials: true })
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
    return { data, loading, error };
}
export default useRequest;