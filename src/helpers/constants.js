// ENDPOINTS IN THE BACKEND API
let ENDPOINT;
let URL;
if (process.env.REACT_ENV === 'development') {
    ENDPOINT = "http://localhost:8080";
} else {
    ENDPOINT = "https://groob-back.onrender.com";
}
if (process.env.REACT_ENV === 'development') {
    URL = "http://localhost:3000";
} else {
    URL = "https://groob.com.ar";
}
export { ENDPOINT };
export { URL };
export const GET_PROFILE = "/profile"
export const GET_PROFILE_BY_ID = "/profile/:id"
export const UPDATE_PROFILE = "/profile"
export const FOLLOW = "/follow"
export const UNFOLLOW = "/unfollow"
export const GET_FOLLOWERS = "/followers"
export const GET_FOLLOWINGS = "/followings"
export const POST_PUBLICATION = "/post"

// ENDPOINTS IN THE FRONTEND ROUTES