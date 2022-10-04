import { getCookie } from "cookies-next"
export const myToken = getCookie('authToken')
export const TOKEN = myToken;
// ENDPOINTS IN THE BACKEND API
export const ENDPOINT = "http://localhost:8080"
export const GET_PROFILE = "/profile" 
export const GET_PROFILE_BY_ID = "/profile/:id" 
export const UPDATE_PROFILE = "/profile" 
export const FOLLOW = "/follow"
export const UNFOLLOW = "/unfollow"
export const GET_FOLLOWERS = "/followers"
export const GET_FOLLOWINGS = "/followings"
export const POST_PUBLICATION = "/post"

// ENDPOINTS IN THE FRONTEND ROUTES
export const URL = "http://localhost:3000" || "https://www.groob.com.ar" // change this domain in production