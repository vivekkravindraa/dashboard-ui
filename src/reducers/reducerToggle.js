import { TOGGLE_DARK_MODE } from '../actions/types';

const initialState = {
    loading: false,
    colorMode: false,
    error: ""
}

export default function reducerToggle(state = initialState, action) {
    switch(action.type) {
        case TOGGLE_DARK_MODE:
            return {
                ...state,
                loading: false,
                colorMode: action.payload,
                error: ""
            }

        default: return state;
    }
}
