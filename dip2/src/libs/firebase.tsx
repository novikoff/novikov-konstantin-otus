import firebase from 'firebase/app'
import 'firebase/auth'


// const app = firebase.initializeApp({
//     apiKey: "AIzaSyCVVNlE6Xkmb5pRjVFrIuZWy2MT14prgdM",
//     authDomain: "auth-eef56.firebaseapp.com",
//     projectId: "auth-eef56",
//     storageBucket: "auth-eef56.appspot.com",
//     messagingSenderId: "514131476845",
//     appId: "1:514131476845:web:a00745762f97664356da64"
// })

const app = firebase.initializeApp({
    apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGINGSENDERID,
    appId: process.env.REACT_APP_FIREBASE_APPID
})


console.log(process.env.REACT_APP_FIREBASE_APIKEY);
console.log(process.env.REACT_APP_FIREBASE_AUTHDOMAIN);
console.log(process.env.REACT_APP_FIREBASE_PROJECTID);
console.log(process.env.REACT_APP_FIREBASE_STORAGEBUCKET);

export {app as firebaseApp};
export const auth = app.auth();
