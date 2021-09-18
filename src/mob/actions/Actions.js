import {BUY_BOOK, CENTRAL_CONTENT,F4E_AUTH} from "../constants/Constants";
import {LOGIN_INFO} from "../../desk/constants/Constants";

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


export const updateF4EAuth=(data)=>{
    return {
        type:F4E_AUTH,
        f4e_auth:data
    }
}