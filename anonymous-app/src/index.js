// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';
// import { createStore, applyMiddleware, compose } from 'redux';
// import rootReducer from '../src/store/reducers/rootReducer';
// import { Provider } from 'react-redux';
// import thunk from 'redux-thunk';
// import { reduxFirestore, getFirestore } from 'redux-firestore';
// import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
// import fbConfig from './config/fbConfig';

// const store = createStore(rootReducer,
//     compose(
//         applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
//         reduxFirestore(fbConfig),
//         reactReduxFirebase(fbConfig, { attachAuthIsReady: true })
//     )
// );

// store.firebaseAuthIsReady.then(() => {
//     ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
//     // registerServiceWorker();
// })

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// import registerServiceWorker from "./registerServiceWorker";
import rootReducer from "./store/reducers/rootReducer";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { reduxFirestore, getFirestore } from "redux-firestore";
import { reactReduxFirebase, getFirebase } from "react-redux-firebase";
import fbConfig from "./config/fbConfig";

const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
        reduxFirestore(fbConfig),
        reactReduxFirebase(fbConfig, { useFirestoreForProfile: true, userProfile: 'users', attachAuthIsReady: true })
    )
);

store.firebaseAuthIsReady.then(() => {
    ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>,
        document.getElementById("root")
    );
    // registerServiceWorker();
});


