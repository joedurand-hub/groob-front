// ENDPOINTS IN THE BACKEND API
let ENDPOINT;
let URL;
// let DEPLOY = true;

// if (DEPLOY === false) {
// if (process.env.REACT_ENV === 'production') {
//     ENDPOINT = process.env.URL_PRODUCTION;
// } else if(process.env.REACT_ENV === 'development') {
//     ENDPOINT = URL_DEVELOPMENT;
// }
// DEPLOY = !DEPLOY
// }
// if (DEPLOY === TRUE) {
if (process.env.REACT_ENV === 'production') {
    ENDPOINT = process.env.BASE_URL_PRODUCTION;
} else {
    ENDPOINT = process.env.BASE_URL_DEVELOPMENT;
}
//     DEPLOY = !DEPLOY
// }


if (process.env.REACT_ENV === 'production') {
    URL = process.env.BASE_URL_PRODUCTION;
} else {
    URL = process.env.BASE_URL_DEVELOPMENT;
}

export { ENDPOINT };
export { URL };

// ENDPOINTS IN THE FRONTEND ROUTES
export const GET_PROFILE = "/profile"
export const GET_PROFILE_BY_ID = "/profile/:id"
export const UPDATE_PROFILE = "/profile"
export const FOLLOW = "/follow"
export const UNFOLLOW = "/unfollow"
export const GET_FOLLOWERS = "/followers"
export const GET_FOLLOWINGS = "/followings"
export const POST_PUBLICATION = "/post"
