// ENDPOINTS IN THE BACKEND API
const deploy = true
export const ENDPOINT = deploy ? "https://groob-back-production.up.railway.app" : "http://localhost:8080"
export const GET_PROFILE = "/profile" 
export const GET_PROFILE_BY_ID = "/profile/:id" 
export const UPDATE_PROFILE = "/profile" 
export const FOLLOW = "/follow"
export const UNFOLLOW = "/unfollow"
export const GET_FOLLOWERS = "/followers"
export const GET_FOLLOWINGS = "/followings"
export const POST_PUBLICATION = "/post"

// ENDPOINTS IN THE FRONTEND ROUTES
export const URL = deploy ? "https://www.groob.com.ar" : "http://localhost:3000" 