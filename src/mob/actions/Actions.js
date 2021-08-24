import {BUY_BOOK, CENTRAL_CONTENT} from "../constants/Constants";

export const updateCentralContent=(data)=>{
    return {
        type:CENTRAL_CONTENT,
        centralContent:data
    }
}

export const updateBook=(data)=>{
    return {
        type:BUY_BOOK,
        bookCount:data
    }
}