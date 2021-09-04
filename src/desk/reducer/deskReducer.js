import {BUY_BOOK, CENTRAL_CONTENT, LOGIN_INFO} from "../constants/Constants";

const initialState = {
    books: 1,
    loginInfo:{
        loginStatus:false,
        userEmail:null
    },
    centralContent: "CENTRAL_CONTENT"
};

function deskReducer(state = initialState, action) {
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
        default: return state;
    }
};

export default deskReducer;