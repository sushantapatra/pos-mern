const initialState = {
    loading: false,
    cartItems: [],
}


export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'updateCart':
            return { ...state, cartItems:action.payload}
        default: return state;
    }
}