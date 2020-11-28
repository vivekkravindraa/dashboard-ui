import { UPDATE_SELECTED_NAV_TAB_INDEX } from '../actions/types';

const initialState = {
    loading: false,
    selectedNavTabIndex: 0,
    error: ""
}

export default function reducerNavigate(state = initialState, action) {
    switch(action.type) {
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
