import {
    ENABLE_DARK_MODE,
    DISABLE_DARK_MODE
} from '../actions/types';

const initialState = {
    loading: false,
    cartItems : [],
    colorMode: false,
    error: ""
}

export default function rootReducer(state = initialState, action) {
    switch(action.type) {
        case ENABLE_DARK_MODE:
            return {
                ...state,
                loading: false,
                colorMode: action.payload,
                error: ""
            }

        case DISABLE_DARK_MODE:
            return {
                ...state,
                loading: false,
                colorMode: action.payload,
                error: ""
            }

        default: return state;
    }
}
