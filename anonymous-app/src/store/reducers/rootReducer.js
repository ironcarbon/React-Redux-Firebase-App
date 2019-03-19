import authReducer from './authReducers';
import confessionReducer from './confessionReducer';
import { combineReducer } from 'redux';

const rootReducer = combineReducer({
    auth: authReducer,
    confession: confessionReducer
})

export default rootReducer;

