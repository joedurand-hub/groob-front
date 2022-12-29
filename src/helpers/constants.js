// ENDPOINTS IN THE BACKEND API
const deploy = process.env.NEXT_PUBLIC_REACT_ENV

export const ENDPOINT = deploy === "development" ?
    process.env.NEXT_PUBLIC_API_ENDPOINT_DEVELOPMENT :
    process.env.NEXT_PUBLIC_API_ENDPOINT_PRODUCTION
export const GET_PROFILE = "/profile"
export const GET_PROFILE_BY_ID = "/profile/:id"
export const UPDATE_PROFILE = "/profile"
export const FOLLOW = "/follow"
export const UNFOLLOW = "/unfollow"
export const GET_FOLLOWERS = "/followers"
export const GET_FOLLOWINGS = "/followings"
export const POST_PUBLICATION = "/post"

// ENDPOINTS IN THE FRONTEND ROUTES
export const URL = deploy === "development" ?
    process.env.NEXT_PUBLIC_REACT_BASE_URL_DEVELOPMENT :
    process.env.NEXT_PUBLIC_REACT_BASE_URL_PRODUCTION