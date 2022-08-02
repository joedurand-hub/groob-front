import styles from "./publications.module.css"
import { useState, useEffect } from 'react'
import Posts from '../../Post/Post'
import { getCookie } from "cookies-next";
import { useContext } from "react";
import { ThemeContext } from "../../../contexts/ThemeContext";

const Publications = () => {
    const {theme} = useContext(ThemeContext)

    const [data, setData] = useState("")
    const token = getCookie("authToken");
    useEffect( () => {
        const fetchPosts = async () => {

            const response = await fetch(`http://localhost:8080/profile/posts`, {
                headers: { 
                  "authToken": token 
                }}, {
                  withCredentials: true
                })
                const data = await response.json()
                setData(data)
                return data
        } 
        fetchPosts()
    }, [])
  return (
    <div className={ theme ? `${styles.container_publications_light}` : `${styles.container_publications_dark}`}>
        <Posts data={data}/>
    </div>
  )
}

export default Publications