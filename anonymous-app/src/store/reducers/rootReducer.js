import authReducer from './authReducers';
import confessionReducer from './confessionReducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';

const rootReducer = combineReducers({
    auth: authReducer,
    confession: confessionReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
})

export default rootReducer;


//FirestoreReducer is responsible for syncing our data and in our component