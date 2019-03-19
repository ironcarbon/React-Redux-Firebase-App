import authReducer from './authReducers';
import confessionReducer from './confessionReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    auth: authReducer,
    confession: confessionReducer
})

export default rootReducer;

