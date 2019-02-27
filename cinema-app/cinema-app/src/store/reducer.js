const initialState = {
    cinema: null,
    price: 0,
    tickets: 0
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'RECEIVE_CINEMA':
            return {
                ...state,
                cinema: action.seats
            };
        case 'SEAT_CLICKED':
            return {
                ...state,
                cinema: action.payload.seats,
                price: action.payload.price,
                tickets: action.payload.tickets
            }
        default:
            return state;
    }
}

export default reducer;