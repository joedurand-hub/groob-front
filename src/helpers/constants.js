import { getCookie } from "cookies-next"
export const TOKEN = getCookie('authToken')
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
export const URL = "http://localhost:3000" // change this domain in production