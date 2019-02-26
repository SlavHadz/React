const initialState = {
    cinema: null
}

const reducer = (state = initialState, action) => {
    if(action.type === 'UPDATE') {
        return {
            ...state,
            ciname: null
        }
    }

    return state;
}

export default reducer;