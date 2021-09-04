import {BUY_BOOK, CENTRAL_CONTENT, LOGIN_INFO} from "../constants/Constants";

export const updateCentralContent=(data)=>{
    return {
        type:CENTRAL_CONTENT,
        centralContent:data
    }
}

export const updateLoginInfo=(data)=>{
    return {
        type:LOGIN_INFO,
        loginInfo:{
            loginStatus:data.loginStatus,
            userEmail:data.userEmail
        },
    }
}

export const updateBook=(data)=>{
    return {
        type:BUY_BOOK,
        bookCount:data
    }
}