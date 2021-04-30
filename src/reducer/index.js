const initialState = {
    articles: [],
    patel: 'lakshmi'
};

function rootReducer(state = initialState, action) {
    console.log(state);
    return state;
};

export default rootReducer;