import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyD9qkNq8D3IjvLveIq7Y-NR0zXS0f0sY-E",
    authDomain: "anonymous-app-react.firebaseapp.com",
    databaseURL: "https://anonymous-app-react.firebaseio.com",
    projectId: "anonymous-app-react",
    storageBucket: "anonymous-app-react.appspot.com",
    messagingSenderId: "883374781981"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });


export default firebase;