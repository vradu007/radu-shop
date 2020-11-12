import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from '../../configs/firebase';

firebase.initializeApp(firebaseConfig);
const googleProvider = new firebase.auth.GoogleAuthProvider();
const facebookProvider = new firebase.auth.FacebookAuthProvider();

const signOut = () => {
    return firebase.auth().signOut();
}

const signInWithGoogle = () => {
    return firebase.auth().signInWithPopup(googleProvider);
}

const signInWithFacebook = () => {
    console.log("in firebase.js")
    return firebase.auth().signInWithPopup(facebookProvider);
}

export {
    signOut,
    signInWithGoogle,
    signInWithFacebook,
}