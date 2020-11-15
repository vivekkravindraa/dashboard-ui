import {
    TOGGLE_DARK_MODE, UPDATE_SELECTED_NAV_TAB_INDEX
} from '../actions/types';

const initialState = {
    loading: false,
    colorMode: false,
    selectedNavTabIndex: 0,
    error: ""
}

export default function rootReducer(state = initialState, action) {
    switch(action.type) {
        case TOGGLE_DARK_MODE:
            return {
                ...state,
                loading: false,
                colorMode: action.payload,
                error: ""
            }

        case UPDATE_SELECTED_NAV_TAB_INDEX:
            return {
                ...state,
                loading: false,
                selectedNavTabIndex: action.payload,
                error: ""
            }

        default: return state;
    }
}
