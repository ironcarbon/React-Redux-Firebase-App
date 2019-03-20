import authReducer from './authReducers';
import confessionReducer from './confessionReducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';

const rootReducer = combineReducers({
    auth: authReducer,
    confession: confessionReducer,
    firestore: firestoreReducer
})

export default rootReducer;


//FirestoreReducer is responsible for syncing our data and in our component