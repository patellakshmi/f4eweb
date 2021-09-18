import {BUY_BOOK, LOGIN_INFO, CENTRAL_CONTENT, F4E_AUTH} from "../constants/Constants";

const initialState = {
    books: 1,
    loginInfo:{
        loginStatus:false,
        userEmail:null
    },
    centralContent: "CENTRAL_CONTENT",
    f4e_auth:null,
};

function mobReducer(state = initialState, action) {
    console.log(":: Desk-Reducer");
    console.log(state);
    console.log(action);
    switch (action.type){
        case LOGIN_INFO:
            return {...state, loginInfo: action.loginInfo }
        case BUY_BOOK:
            return {...state, books: state.books+action.bookCount }
        case CENTRAL_CONTENT:
            return {...state, centralContent: action.centralContent }
        case F4E_AUTH:
            return {...state, f4e_auth: action.f4e_auth }
        default: return state;
    }
};

export default mobReducer;