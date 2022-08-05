export const initialState = {
    birthday: new Date,
    firstName: "",
    lastName: "",
    description: "",
    verified: false,
    online: false,
    premium: false,
    explicitContent: false,
    _id: "62eb57ba84040b9347f12e40",
    userName: "joejulian",
    email: "dujotech@proton.me",
};

const shopReducer = (state, action) => {
    const { type, payload } = action

    switch (type) {
        case "GET_PROFILE":
            console.log("ADD_TO_CART", payload);

            return {
                ...state,
                products: payload.products
            };
        default:
            return {
                ...state
            }
    }
}

export default shopReducer