import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDMNhf6-SItey2VFkNciQrtAoUN2TZC-yE",
    authDomain: "crud-tolcqd.firebaseapp.com",
    databaseURL: "https://crud-tolcqd.firebaseio.com",
    projectId: "crud-tolcqd",
    storageBucket: "crud-tolcqd.appspot.com",
    messagingSenderId: "773883336095",
    appId: "1:773883336095:web:36d903b5a08127657fd9aa"
});

// const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };