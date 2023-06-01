// ENDPOINTS IN THE BACKEND API
let ENDPOINT;
let URL;
// let DEPLOY = true;

// if (DEPLOY === false) {
    if (process.env.REACT_ENV === 'production') {
        ENDPOINT = "https://groob-back-production.up.railway.app";
    } else {
        ENDPOINT = "http://localhost:8080";
    }
    DEPLOY = !DEPLOY
// }
// if (DEPLOY === TRUE) {
    // if (process.env.REACT_ENV === 'production') {
    //     ENDPOINT = "https://groob-back.onrender.com";
    // } else {
    //     ENDPOINT = "http://localhost:8080";
    // }
//     DEPLOY = !DEPLOY
// }


if (process.env.REACT_ENV === 'production') {
    URL = "https://groob.com.ar";
} else {
    URL = "http://localhost:3000";
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
