import { combineReducers } from 'redux';

import reducerToggle from './reducerToggle';
import reducerNavigate from './reducerNavigate';

const rootReducer = combineReducers({
    toggle: reducerToggle,
    navigate: reducerNavigate
})

export default rootReducer;
